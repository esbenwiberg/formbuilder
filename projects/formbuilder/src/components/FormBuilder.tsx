import React, { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { IFormItemOptions } from '../interfaces/options/IFormItemOptions';
import { IFormSchema } from '../interfaces/schema/IFormSchema';
import { ValidationEventType } from '../models/validation/ValidationEventType';
import { ValidationOverride } from '../models/validation/ValidationOverride';
import { ValidationResult } from '../models/validation/ValidationResult';
import { Form, FormRef } from './Form';
import { FormList } from './FormList';
import { IFormGrouping } from '../interfaces/IFormGrouping';
import { IPropertyOverrides } from '../interfaces/IPropertyOverrides';
import { formbuilder } from '../utils/FormBuilderInitializer';
import { ILoadingProps } from '../builders/interfaces/ILoadingProps';
import { ISchemaProvider } from '../interfaces/schema/ISchemaProvider';
import { schemaFromConfig } from '../utils/schema/schemaFromConfig';
import { IFormItem } from '../interfaces/form/IFormItem';
import { IFormBuilderListConfig } from '../interfaces/lists/IFormBuilderListConfig';
import { IFormBuilderListColumns } from '../interfaces/lists/IFormBuilderListColumns';
import { IFormBuilderListEditorConfig } from '../interfaces/lists/IFormBuilderListEditorConfig';
import { IFormBuilderListMenuConfig } from '../interfaces/lists/IFormBuilderListMenuConfig';
import { IFormBuilderListSearchConfig } from '../interfaces/lists/IFormBuilderListSearchConfig';
import { IFormListShimmerConfig } from '../interfaces/lists/IFormListShimmerConfig';
import { RequireOnlyOne, RecursivePartial } from '../interfaces/types/Partials';

export type FormBuilderItemType<T extends IFormItem> = T | Array<T>;

export interface FormBuilderSingleItemProps<T extends IFormItem> {
    onPropertyChange?: (item: T, prop: string, value: any) => void;
}

export interface IFormBuilderListProps<T extends IFormItem> {
    config: IFormBuilderListConfig<T>;
    onItemChange?: (item: T) => void;
    searchConfig?: IFormBuilderListSearchConfig;
    columnConfig?: IFormBuilderListColumns<T>;
    menuConfig?: IFormBuilderListMenuConfig<T>;
    editorConfig?: IFormBuilderListEditorConfig<T>;
    shimmerConfig?: IFormListShimmerConfig;
}

export interface ISchemaConfig<T extends IFormItem> {
    registeredSchemaKey?: string;
    schemaProvider?: ISchemaProvider<T>;
}

export interface IFormBuilderProps<T extends IFormItem> {
    item: FormBuilderItemType<T>;
    schemaConfig: RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
    singleItemProps?: FormBuilderSingleItemProps<T>;
    listProps?: IFormBuilderListProps<T>;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>;
    propertyOverrides?: IPropertyOverrides<T>;
    loadingProps?: ILoadingProps;
    keyPrefix?: string;
    overrideSchema?: IFormSchema<T>;
}

export type FormBuilderRef<T extends IFormItem> = { getItem: () => FormBuilderItemType<T>, validateItem: () => Promise<ValidationResult>; };


// wrapper for handling both single item and list of items
// export const FormBuilder = forwardRef(<T extends IFormItem, FormBuilderRef>(props : IFormBuilderProps<T>, ref: FormBuilderRef) => {
export const FormBuilder = <T extends IFormItem>(props : IFormBuilderProps<T> & { formRef?: Ref<any> }) => {

    // verify that the formbuilder is set up correctly
    formbuilder.verify();

    const [item, setItem] = useState(props.item);
    const subFormRef = useRef<FormRef<T>>();
    const [schema, setSchema] = useState<IFormSchema<T> | undefined>(props.overrideSchema); 

    useImperativeHandle<FormBuilderRef<T>, any>(props.formRef as any, () => ({ 
        getItem: () => subFormRef.current?.getItem(), 
        validateItem: () => subFormRef.current?.validateItem != null ? subFormRef.current?.validateItem(ValidationEventType.Manual) : undefined
    }), []);
    
    const loadSchema = async() => {
        let schemaMerged = await schemaFromConfig(props.schemaConfig, props.formItemConfigOverrides, props.propertyOverrides);
        setSchema(schemaMerged);
    }

    useEffect(() => {
        setItem(props.item);
    }, [props.item])
    

    useEffect(() => {
        if (props.overrideSchema == null)
            loadSchema();
    }, [props.schemaConfig]);

    if (schema == null) return null;

    const getKey = () : string => {
        return `${props.keyPrefix}`;
    }

	return (
        <div className="formbuilder-rootcontainer" key={`${props.keyPrefix}-formbuilder-container`}>
            {
                (Array.isArray(props.item) || props.listProps != null)
                    ?   <FormList
                            key={getKey()}
                            ref={subFormRef}
                            items={item}
                            schema={schema}
                            {...props as any} // TODO: fucking T type mismatch for some reason (ewi)
                            listProps={props.listProps ?? schema.options.listOptions}
                            keyPrefix={`${props.keyPrefix}-list`}
                            readOnly={props.propertyOverrides?.disabledProps === true}
                        />
                    :   <Form
                            key={getKey()}
                            ref={subFormRef}
                            schema={schema}
                            item={item}
                            onPropertyChange={ (item: IFormItem, prop: string, value: any) => props.singleItemProps?.onPropertyChange == null ? () => {} : props.singleItemProps.onPropertyChange(item as any, prop, value)} // TODO: fucking T type mismatch for some reason (ewi)
                            {...props as any} // TODO: fucking T type mismatch for some reason (ewi)
                            keyPrefix={getKey()}
                        />
            }
        </div>
    )
}
