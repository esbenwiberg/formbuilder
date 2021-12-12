import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { IFormItemOptions } from '../models/options/IFormItemOptions';
import { IFormSchema } from '../models/schema/IFormSchema';
import { fetchSchema } from '../utils/SchemaFetch';
import { ValidationEventType } from '../models/validation/ValidationEventType';
import { ValidationOverride } from '../models/validation/ValidationOverride';
import { ValidationResult } from '../models/validation/ValidationResult';
import { IFormItem } from '../modules/IFormItem';
import { IFormBuilderListConfig, IFormBuilderListSearchConfig, IFormBuilderListColumns, IFormBuilderListMenuConfig, IFormBuilderListEditorConfig } from './config/IFormBuilderListConfig';
import { Form, FormRef } from './Form';
import { FormList } from './FormList';
import { IFormGrouping } from '../interfaces/IFormGrouping';
import { IPropertyOverrides } from '../interfaces/IPropertyOverrides';
import { formbuilder } from '../builders/helpers/FormBuilderInitializer';
import { ILoadingSpinnerProps } from '../builders/fluentUI/components/list2/components/FluentFormShimmer';

export type FormBuilderItemType<T extends IFormItem> = T | Array<T>;

export interface FormBuilderSingleItemProps<T extends IFormItem> {
    onPropertyChange?: (item: T, prop: string, value: any) => void;
}

export interface IFormBuilderListProps<T extends IFormItem> {
    config: IFormBuilderListConfig<T>;
    onItemChange?: (item: T) => void;
    searchConfig?: IFormBuilderListSearchConfig;
    columnConfig?: IFormBuilderListColumns;
    menuConfig?: IFormBuilderListMenuConfig<T>;
    editorConfig?: IFormBuilderListEditorConfig<T>;
}

export interface IFormBuilderProps<T extends IFormItem> {
    itemType: new () => T;
    item: FormBuilderItemType<T>;
    singleItemProps?: FormBuilderSingleItemProps<T>;
    listProps?: IFormBuilderListProps<T>;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    formItemConfigOverrides?: Partial<IFormItemOptions<T>>;
    propertyOverrides?: IPropertyOverrides;
    spinnerProps?: ILoadingSpinnerProps;
    keyPrefix?: string;
    overrideSchema?: IFormSchema<IFormItem>;
}

export type FormBuilderRef<T extends IFormItem> = { getItem: () => FormBuilderItemType<T>, validateItem: () => Promise<ValidationResult>; };

// wrapper for handling both single item and list of items
export const FormBuilder = forwardRef(<T extends IFormItem, FormBuilderRef>(props : IFormBuilderProps<T>, ref: FormBuilderRef) => {

    if (!formbuilder.verify()) throw Error("Formbuilder not initialized! call 'FormBuilder.Initialize' as early as possible")

    const formRef = useRef<FormRef<T>>();
    const [schema, setSchema] = useState<IFormSchema<IFormItem> | undefined>(props.overrideSchema);

    useImperativeHandle<FormBuilderRef, any>(ref as any, () => ({ 
        getItem: () => formRef.current?.getItem(), 
        validateItem: () => formRef.current?.validateItem != null ? formRef.current?.validateItem(ValidationEventType.Manual) : undefined
    }), []);
    
    const loadSchema = async() => {
        let schemaMerged = await fetchSchema<T>(props.itemType, props.formItemConfigOverrides, props.propertyOverrides);
        setSchema(schemaMerged);
    }

    useEffect(() => {
        if (props.overrideSchema == null)
            loadSchema();
    }, [props.itemType]);

    if (schema == null) return null;

	return (
        <div className="formbuilder-rootcontainer" key={`${props.keyPrefix}-formbuilder-container`}>
            {
                (Array.isArray(props.item) || props.listProps != null)
                    ?   <FormList
                            ref={formRef}
                            items={props.item}
                            schema={schema}
                            {...props as any} // TODO: fucking T type mismatch for some reason (ewi)
                            keyPrefix={`${props.keyPrefix}-list`}
                        />
                    :   <Form
                            key={(props.item as any).id}
                            ref={formRef}
                            schema={schema}
                            onPropertyChange={ (item: IFormItem, prop: string, value: any) => props.singleItemProps?.onPropertyChange == null ? () => {} : props.singleItemProps.onPropertyChange(item as any, prop, value)} // TODO: fucking T type mismatch for some reason (ewi)
                            {...props as any} // TODO: fucking T type mismatch for some reason (ewi)
                            keyPrefix={`${props.keyPrefix}-${(props.item as any).id}`}
                        />
            }
        </div>
    )
})
