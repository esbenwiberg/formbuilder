import React, { forwardRef, FunctionComponent, useEffect, useImperativeHandle, useRef, useState } from 'react';
import useIsMounted from '../hooks/useIsMounted';
import { IFormGroupOptions } from '../models/options/IFormGroupOptions';
import { IFormItemOptions } from '../models/options/IFormItemOptions';
import { IFormSchema } from '../models/schema/IFormSchema';
import { fetchSchema } from '../utils/SchemaFetch';
import { IValidationResult } from '../models/validation/IValidationResult';
import { ValidationEventType } from '../models/validation/ValidationEventType';
import { ValidationOverride } from '../models/validation/ValidationOverride';
import { ValidationResult } from '../models/validation/ValidationResult';
import { IFormItem } from '../modules/IFormItem';
import { validationUtil } from '../utils/ValidationUtil';
import { IDynamicSchemaConfig } from './config/IFormBuilderListConfig';
import { formValidator } from './helpers/FormValidator';
import { IFormGrouping } from '../interfaces/IFormGrouping';
import { IItemRenderProps } from '../interfaces/IItemRenderProps';
import { IPropertyOverrides } from '../interfaces/IPropertyOverrides';
import { formbuilder } from '../builders/helpers/FormBuilderInitializer';
import { ILoadingSpinnerProps } from '../builders/fluentUI/components/list2/components/FluentFormShimmer';

export interface IFormItemProps<T extends IFormItem> {
    itemType: new () => T;
    item: T;
    schema?: IFormSchema<T>;
    dynamicSchema?: IDynamicSchemaConfig<T>; // experimental
    onPropertyChange?: (item: IFormItem, prop: string, value: any) => void;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    formItemConfigOverrides?: Partial<IFormItemOptions<T>>;
    propertyOverrides?: IPropertyOverrides;
    spinnerProps?: ILoadingSpinnerProps;
    /*** DO NOT USE! only used internally */
    validationResult?: IValidationResult;
    /*** DO NOT USE! only used internally */
    validationResultPrefix?: string;
    keyPrefix?: string;
}

export type FormRef<T extends IFormItem> = { getItem: () => T, validateItem: (type?: ValidationEventType) => Promise<ValidationResult>; };

const EmptyGroupContainer : FunctionComponent<{groupings: Array<IFormGrouping>, itemId: string}> = props => {
    return <div key={`emptygroup-${props.itemId}`}>{props.children}</div>
}

export const Form = forwardRef(<T extends IFormItem, FormRef>(props : IFormItemProps<T>, ref: FormRef) => {

    if (!formbuilder.verify()) throw Error("Formbuilder not initialized! call 'FormBuilder.Initialize' as early as possible")

    const isMounted = useIsMounted();

    const [item, setItem] = useState(props.item);
    const [schema, setSchema] = useState(props.dynamicSchema != null ? undefined : props.schema);
    const dynamicSchema = useRef<IFormSchema<any>>();
    const [groupings, setGroupings] = useState<Array<IFormGrouping>>();
    const [groupsHandled, setGroupsHandled] = useState(false);
    const [validationResults, setValidationResults] = useState<IValidationResult>(props.validationResult ?? {});

    const validateItem = async (formItem: T, schema: IFormSchema<T> | undefined, on: ValidationEventType = ValidationEventType.Manual, prop: string | undefined) : Promise<ValidationResult> => {
        let schemaTest = dynamicSchema.current ?? schema;
        switch (props.validationOverride) {
            case undefined:
            case ValidationOverride.None:
                let results = await formValidator.validate(formItem, prop, schemaTest, on, validationResults, props.validationResultPrefix);
                setValidationResults({...results});
                return validationUtil.validated(results) ? ValidationResult.Success : ValidationResult.Failed;
            case ValidationOverride.Ignore:
                setValidationResults({});
                return ValidationResult.Success;
            case ValidationOverride.Continue:
                let results2 = await formValidator.validate(formItem, prop, schemaTest, on, validationResults, props.validationResultPrefix);
                setValidationResults({...results2});
                return validationUtil.validated(results2) ? ValidationResult.Success : ValidationResult.FailedDontBlock;
            default:
                return ValidationResult.Success;
        }
    }

    useImperativeHandle<FormRef, any>(ref as any, () => ({ 
        getItem: () => item as T, 
        validateItem: (type: ValidationEventType) => validateItem(item, props.schema, type, undefined)
    }), [item, props.schema]);

    const getDynamicSchemaKey = (it?: T) : string | undefined => {
        let dynamicKey = props.dynamicSchema?.dynamicKey;
        if (dynamicKey == null) return undefined;
        return dynamicKey(it ?? item);
    }

    const loadSchema = async (it?: T, force?: boolean) => {
        if (schema !== undefined && props.dynamicSchema?.dynamicKey == null && !force) return;
        let schemaMerged = await fetchSchema<T>(props.dynamicSchema?.customFormType ?? props.itemType, props.formItemConfigOverrides, props.propertyOverrides, getDynamicSchemaKey(it));
        if (props.dynamicSchema?.customFormType != null) {
            dynamicSchema.current = schemaMerged;
        }
        if (!isMounted()) return;
        setSchema(schemaMerged);
    }

    useEffect(() => {
        loadSchema();
    }, [props.itemType]);

    useEffect(() => {
        loadSchema(undefined, true);
    }, [props.propertyOverrides]);

    const GroupContainer: React.ElementType = props.groupContainer ?? EmptyGroupContainer;
    
    useEffect(() => {
        buildGroupings();
        // TODO: why? (ewi)
        // eslint-disable-next-line 
    }, [schema])

    const buildGroupings = () => {
        if (schema?.options?.groups == null) {
            setGroupsHandled(true);
            return;
        }

        let groups = schema?.options?.groups;

        let groupedProps: {[key: string] : Array<string>} = {};
        Object.keys(schema.options.properties).forEach(_ => {
            let prop = schema.options.properties[_];
            let groupKey = prop.group ?? "";
            if (groupedProps[groupKey] == null)
                groupedProps[groupKey] = [];
            groupedProps[groupKey].push(_);
        });

        let propertyGroupings = Object.keys(groupedProps).map(_ => {
            let group = Object.keys(groups).length && groups[_] ? groups[_] : { displayName: "Not grouped" } as IFormGroupOptions; // TODO: fuck the stupid typescript linter (ewi)
            return {
                groupKey: _, 
                displayName: group.displayName,
                groupProps: {...group.groupProps},
                properties: groupedProps[_]
            } as IFormGrouping
        });

        setGroupings(propertyGroupings);
        setGroupsHandled(true);
    }

    const onPropertyChange = (property: string, value: any | never) : void => {
        let clone = {...item} as IFormItem | any;
        clone[property as keyof IFormItem] = value;
        setItem(clone);
        validateItem(clone, schema, ValidationEventType.Change, property);
        var onChanged = schema?.options.properties[property]?.onChanged;
        if (onChanged != null) {
            let result = onChanged(clone);
            if (result?.refreshDynamicSchema) {
                loadSchema(clone);
            }
        }
        if (props.onPropertyChange) props.onPropertyChange(clone, property, value);
    }

    const Spinner: React.ComponentType<ILoadingSpinnerProps> = formbuilder.formItemRender.spinner();

    if (item == null) return null;
    if (schema == null) return <Spinner {...props.spinnerProps} />;
    if (!groupsHandled) return null;

    const propertyRenderProps: IItemRenderProps<T> = {
        item: item,
        schema: schema.options,
        onChange: onPropertyChange,
        onBlur: (prop: string) => validateItem(item, schema, ValidationEventType.Blur, prop),
        validationResults: validationResults,
        validationResultPrefix: props.validationResultPrefix,
        // propertyOverrides: props.propertyOverrides // this is merged with the schema, and shouldnt be part of the child items (ewi)
    }

	return (
        <div className="formbuilder-formcontainer" key={`${props.keyPrefix}-formbuilder-formcontainer`}>
            <GroupContainer groupings={groupings} key={`${props.keyPrefix}-formbuilder-groupcontainer`}>
                {
                    groupings?.map(_ => {
                        let children = formbuilder.formItemRender.properties(propertyRenderProps, _.properties);
                        if (children === undefined) return null;
                        return props.groupRender ? props.groupRender(_, children) : children;
                    })
                        ?? formbuilder.formItemRender.properties(propertyRenderProps) // not defining properties here, defaults to all
                }
            </GroupContainer>
        </div>
    )
})
