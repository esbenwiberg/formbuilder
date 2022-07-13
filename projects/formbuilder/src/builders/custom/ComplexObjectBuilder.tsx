import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { FormLabel, IFormItemBuilder, IFormLabelProps, LoadingSpinner, ValidationMessageElement } from "../interfaces/IFormItemBuilder";
import { IPropertyTypes, propertyTypes } from "../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IDynamicComponentConfig } from "./config/IDynamicComponentConfig";
import { IFormItemProps } from "../../components/Form";
import { IFormItemComponentConfig } from "./config/IFormItemComponentConfig";
import { FormBuilder, ISchemaConfig } from "../../components/FormBuilder";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { DynamicArrayField } from "./components/DynamicArrayField";
import React, { ElementType, PropsWithChildren, ReactElement } from "react";
import { ILoadingProps } from "../interfaces/ILoadingProps";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { getValidationMarkForProperty, IPropertyRenderProps, RequireOnlyOne, ValidationMark } from "../..";
import { buildPropertyRenderInfo } from "../helpers/BuildPropertyRenderProps";

export const WrapInLabel: React.FC<{ Label: FormLabel, Error: ValidationMessageElement, info: any, schema: IFormItemPropertyOptions<any, any>, validationMark: ValidationMark, skipError?: boolean }> = ({ Label, Error, info, schema, validationMark, children, skipError }) => {
    return (
        <div className="formbuilder-property" key={info.props.key}>
            <Label
                key={`${info.key}-labelcontainer`}
                propertySchema={schema}
                hideLabel={info.props.options.hideLabel}
                parentKey={info.key}
                validationMark={validationMark}
            />
            { children }
            { (!skipError && info.props.errorMessage) && Error(info.props.errorMessage)}
        </div>
    )
}

export const createComplexObjectBuilder = (labelRender?: FormLabel, validationMessage?: ValidationMessageElement, loadingSpinner?: LoadingSpinner) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_complexbuilder";
    
    const DefaultLabelRender: FormLabel = <T extends IFormItem>(props: PropsWithChildren<IFormLabelProps<T>>) => <label key={props.parentKey + "-label"}>{props.propertySchema.displayName}</label>;
    const defaultValidationMessageElement = (message: string) : JSX.Element => <p>{message}</p>;
    const defaultSpinner: React.ElementType<ILoadingProps> = (props: PropsWithChildren<ILoadingProps>, context?: any): ReactElement<any, any> => <p>Loading...</p>;

    const BuilderLabelRender = labelRender ?? DefaultLabelRender;
    const builderValidationMessageElement = validationMessage ?? defaultValidationMessageElement;

    const loadingSpinnerComponent = () : ElementType<ILoadingProps> | undefined => loadingSpinner ?? defaultSpinner;

    const convertPropertyOverrides = (propertyOverrides: IPropertyOverrides<any> | undefined, property: string) : IPropertyOverrides<any> | undefined => {
        if (propertyOverrides == undefined) return undefined;
        let clone = {...propertyOverrides};
        
        if (propertyOverrides.disabledProps != null) {
            if (Array.isArray(propertyOverrides.disabledProps) ){
                if (propertyOverrides.disabledProps.indexOf(property) >= 0) {
                    clone.disabledProps = true
                }
            }
            else {
                clone.disabledProps = !!propertyOverrides.disabledProps;
            }
        }
        console.log(clone);
        return clone;
    };

    

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) : JSX.Element | undefined => {
        let { item, validationResults } = renderProps;
        
        if (item == null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let info = buildPropertyRenderInfo(renderProps, schema, property);
        let validationMark: ValidationMark = getValidationMarkForProperty(renderProps, property);

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.array:
                return (
                    <WrapInLabel Label={BuilderLabelRender} Error={builderValidationMessageElement} info={info} schema={schema} validationMark={validationMark} >
                        <DynamicArrayField {...schema} {...info.props} />
                    </WrapInLabel>
                )
            case propertyType.custom: 
                let customConfig = (schema.config as unknown) as IDynamicComponentConfig<T>;
                if (!customConfig?.component) return undefined;
                // const Comp = this.customComponents[customConfig?.componentName];
                const Comp = customConfig.component;
                return(
                    <WrapInLabel Label={BuilderLabelRender} Error={builderValidationMessageElement} info={info} schema={schema} validationMark={validationMark} >
                        <Comp key={info.key} {...info.props} {...schema} {...customConfig.componentProps} />
                    </WrapInLabel>
                )

            case propertyType.formItem:
                let formConfig = (schema.config as any) as IFormItemComponentConfig<T>;
                if (!formConfig?.schemaConfig) return undefined;
                let formItemProps: IFormItemProps<T> = {
                    item: item[property],
                    schemaConfig: formConfig.schemaConfig as RequireOnlyOne<ISchemaConfig<T>, "schema" | "schemaProvider">,
                    groupContainer: formConfig.groupContainer,
                    groupRender: formConfig.groupRender,
                    onPropertyChange: (item: T, prop: string, value: any) => info.props.onChange(item),
                    validationResult: validationResults,
                    validationResultPrefix: property,
                    propertyOverrides: convertPropertyOverrides(renderProps.propertyOverrides, property)
                };

                // handle dynamic schema coming from formitem config
                if (formConfig.schemaConfig.dynamicSchema != null) {
                    const dynamicSchema = formConfig.schemaConfig.dynamicSchema(item);
                    formConfig.schemaConfig = dynamicSchema;
                    formItemProps.schemaConfig = dynamicSchema;
                }
                    
                let addErrormessage = false;
                // used for having properties as array of formitem
                let listProps = schema?.listProps; 
                if (listProps != undefined) {
                    formItemProps.onPropertyChange = undefined;
                    listProps.config.onItemsChange = items => info.props.onChange(items);
                    addErrormessage = true;
                }

                // types sucks sometimes!! (ewi)
                return(
                    <WrapInLabel Label={BuilderLabelRender} Error={builderValidationMessageElement} info={info} schema={schema} validationMark={validationMark} skipError={!addErrormessage} >
                        <FormBuilder key={info.key} keyPrefix={info.key} {...formItemProps as any} {...formConfig} listProps={listProps as any} />
                    </WrapInLabel>
                )

            default: return undefined;
        }
    };

    return { id, build, loadingComponent: loadingSpinnerComponent }
}
