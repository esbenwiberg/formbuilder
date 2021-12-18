import { IPropertyRenderProps } from "../../interfaces/IPropertyRenderProps";
import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { IFormItemBuilder, IFormItemBuilderResult, LabelRender } from "../interfaces/IFormItemBuilder";
import { IPropertyTypes, propertyTypes } from "../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IDynamicComponentConfig } from "./config/IDynamicComponentConfig";
import { IFormItemProps } from "../../components/Form";
import { IFormItemComponentConfig } from "./config/IFormItemComponentConfig";
import { FormBuilder, IFormBuilderListProps } from "../../components/FormBuilder";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { DynamicArrayField } from "./components/DynamicArrayField";
import React, { ElementType, PropsWithChildren, ReactElement } from "react";
import { validationUtil } from "../../utils/common/ValidationUtil";
import { ILoadingSpinnerProps } from "../interfaces/ILoadingSpinnerProps";
import { IFormItem } from "../../interfaces/form/IFormItem";

export const createComplexObjectBuilder = (labelRender?: LabelRender, validationMessage?: (message: string) => JSX.Element, loadingSpinner?: React.ElementType<ILoadingSpinnerProps>) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_custombuilder";
    
    const defaultLabelRender: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(propertySchema: IFormItemPropertyOptions<T, C>, key: string) => <label key={key}>{propertySchema.displayName}</label>;
    const defaultValidationMessageElement = (message: string) : JSX.Element => <p>{message}</p>;
    const defaultSpinner: React.ElementType<ILoadingSpinnerProps> = (props: PropsWithChildren<ILoadingSpinnerProps>, context?: any): ReactElement<any, any> => <p>Loading...</p>;

    const builderLabelRender = labelRender ?? defaultLabelRender;
    const builderValidationMessageElement = validationMessage ?? defaultValidationMessageElement;

    const loadingSpinnerComponent = () : ElementType<ILoadingSpinnerProps> | undefined => loadingSpinner ?? defaultSpinner;

    const convertPropertyOverrides = (propertyOverrides: IPropertyOverrides | undefined, property: string) : IPropertyOverrides | undefined => {
        if (propertyOverrides == undefined) return undefined;
        let clone = {...propertyOverrides};
        if (Array.isArray(propertyOverrides.disabledProps) && propertyOverrides.disabledProps.indexOf(property) >= 0) clone.disabledProps = true;
        return clone;
    };

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        let { item, onChange, onBlur, validationResults, validationResultPrefix } = renderProps;
        
        if (item == null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let validationIndexer = validationResultPrefix ? `${validationResultPrefix}.${property}` : property;
        let key = `${validationResultPrefix ?? ""}${property}`;
        let props: IPropertyRenderProps<T, C, any> = {
            key: schema.key ?? key,
            value: (item as any)[property],
            options: schema,
            onChange: (value: any) => onChange(property, value),
            onBlur: (value: any) => onBlur(property, (item as any)[property]),
            disabled: schema.disable ? schema.disable(item) : false,
            errorMessage: validationUtil.getResultAsString(validationResults[validationIndexer]),
            parent: item
        };

        const WrapInLabel = (element: JSX.Element, addErrormessage?: boolean) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={props.key}>
                    { !props.options.hideLabel && builderLabelRender(schema, key + "-label")}
                    { element }
                    { (addErrormessage && props.errorMessage) && builderValidationMessageElement(props.errorMessage)}
                </div>
            )
        }

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.array:
                return { found: true, element: WrapInLabel(<DynamicArrayField {...schema} {...props} />) };
            case propertyType.custom: 
                let customConfig = (schema.config as unknown) as IDynamicComponentConfig<T>;
                if (!customConfig?.component) return { found: false, element: undefined };
                // const Comp = this.customComponents[customConfig?.componentName];
                const Comp = customConfig.component;
                return { found: true, element: <>{ WrapInLabel(<Comp key={key} {...props} {...schema} />) }</> }

            case propertyType.formItem:
                let formConfig = (schema.config as any) as IFormItemComponentConfig<T>;
                if (!formConfig?.schemaConfig) return { found: false, element: undefined };
                let formItemProps: IFormItemProps<T> = {
                    item: item[property],
                    schemaConfig: formConfig.schemaConfig,
                    groupContainer: formConfig.groupContainer,
                    groupRender: formConfig.groupRender,
                    onPropertyChange: (item: T, prop: string, value: any) => props.onChange(item),
                    validationResult: validationResults,
                    validationResultPrefix: property,
                    propertyOverrides: convertPropertyOverrides(renderProps.propertyOverrides, property)
                };

                let addErrormessage = false;
                // used for having properties as array of formitem
                let listProps = schema?.listProps; 
                if (listProps != undefined) {
                    formItemProps.onPropertyChange = undefined;
                    listProps.config.onItemsChange = items => props.onChange(items);
                    addErrormessage = true;
                }

                // types sucks sometimes!! (ewi)
                return { found: true, element: <>{ WrapInLabel(<FormBuilder key={key} keyPrefix={key} {...formItemProps as any} {...formConfig} listProps={listProps as any} />, addErrormessage) }</> }

            default: return { found: false, element: undefined }
        }
    };

    return { id, build, loadingSpinnerComponent }
}
