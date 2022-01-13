import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { IFormItemBuilder, IFormItemBuilderResult, LabelRender, LoadingSpinner, ValidationMessageElement } from "../interfaces/IFormItemBuilder";
import { IPropertyTypes, propertyTypes } from "../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IDynamicComponentConfig } from "./config/IDynamicComponentConfig";
import { IFormItemProps } from "../../components/Form";
import { IFormItemComponentConfig } from "./config/IFormItemComponentConfig";
import { FormBuilder } from "../../components/FormBuilder";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { DynamicArrayField } from "./components/DynamicArrayField";
import React, { ElementType, PropsWithChildren, ReactElement } from "react";
import { ILoadingProps } from "../interfaces/ILoadingProps";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { ValidationMark } from "../..";
import { buildPropertyRenderInfo } from "../helpers/BuildPropertyRenderProps";
import { getValidationMarkForProperty } from "../helpers/GetValidationMark";

export const createComplexObjectBuilder = (labelRender?: LabelRender, validationMessage?: ValidationMessageElement, loadingSpinner?: LoadingSpinner) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_complexbuilder";
    
    const defaultLabelRender: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(propertySchema: IFormItemPropertyOptions<T, C>, key: string) => <label key={key}>{propertySchema.displayName}</label>;
    const defaultValidationMessageElement = (message: string) : JSX.Element => <p>{message}</p>;
    const defaultSpinner: React.ElementType<ILoadingProps> = (props: PropsWithChildren<ILoadingProps>, context?: any): ReactElement<any, any> => <p>Loading...</p>;

    const builderLabelRender = labelRender ?? defaultLabelRender;
    const builderValidationMessageElement = validationMessage ?? defaultValidationMessageElement;

    const loadingSpinnerComponent = () : ElementType<ILoadingProps> | undefined => loadingSpinner ?? defaultSpinner;

    const convertPropertyOverrides = (propertyOverrides: IPropertyOverrides | undefined, property: string) : IPropertyOverrides | undefined => {
        if (propertyOverrides == undefined) return undefined;
        let clone = {...propertyOverrides};
        if (Array.isArray(propertyOverrides.disabledProps) && propertyOverrides.disabledProps.indexOf(property) >= 0) clone.disabledProps = true;
        return clone;
    };

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        let { item, validationResults } = renderProps;
        
        if (item == null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let info = buildPropertyRenderInfo(renderProps, schema, property);

        const WrapInLabel = (element: JSX.Element, addErrormessage?: boolean) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={info.props.key}>
                    { !info.props.options.hideLabel && builderLabelRender(schema, info.key + "-label")}
                    { element }
                    { (addErrormessage && info.props.errorMessage) && builderValidationMessageElement(info.props.errorMessage)}
                </div>
            )
        }

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.array:
                return { found: true, element: WrapInLabel(<DynamicArrayField {...schema} {...info.props} />) };
            case propertyType.custom: 
                let customConfig = (schema.config as unknown) as IDynamicComponentConfig<T>;
                if (!customConfig?.component) return { found: false, element: undefined };
                // const Comp = this.customComponents[customConfig?.componentName];
                const Comp = customConfig.component;
                return { found: true, element: <>{ WrapInLabel(<Comp key={info.key} {...info.props} {...schema} />) }</> }

            case propertyType.formItem:
                let formConfig = (schema.config as any) as IFormItemComponentConfig<T>;
                if (!formConfig?.schemaConfig) return { found: false, element: undefined };
                let formItemProps: IFormItemProps<T> = {
                    item: item[property],
                    schemaConfig: formConfig.schemaConfig,
                    groupContainer: formConfig.groupContainer,
                    groupRender: formConfig.groupRender,
                    onPropertyChange: (item: T, prop: string, value: any) => info.props.onChange(item),
                    validationResult: validationResults,
                    validationResultPrefix: property,
                    propertyOverrides: convertPropertyOverrides(renderProps.propertyOverrides, property)
                };

                let addErrormessage = false;
                // used for having properties as array of formitem
                let listProps = schema?.listProps; 
                if (listProps != undefined) {
                    formItemProps.onPropertyChange = undefined;
                    listProps.config.onItemsChange = items => info.props.onChange(items);
                    addErrormessage = true;
                }

                // types sucks sometimes!! (ewi)
                return { found: true, element: <>{ WrapInLabel(<FormBuilder key={info.key} keyPrefix={info.key} {...formItemProps as any} {...formConfig} listProps={listProps as any} />, addErrormessage) }</> }

            default: return { found: false, element: undefined }
        }
    };

    return { id, build, loadingComponent: loadingSpinnerComponent }
}
