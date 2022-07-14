import { DynamicJsonfield } from "./components/dynamicComponents/DynamicJsonfield";
import { DynamicBooleanField } from "./components/dynamicComponents/DynamicBooleanField";
import { DynamicDateField } from "./components/dynamicComponents/DynamicDateField";
import { DynamicPredefinedArrayField } from "./components/dynamicComponents/DynamicPredefinedArrayField";
import { DynamicTextfield } from "./components/dynamicComponents/DynamicTextfield";
import React, { ElementType } from "react";
import { FluentPropertyLabel } from "./components/FluentPropertyLabel";
import { FluentFormShimmer } from "./components/list/components/FluentFormShimmer";
import FluentList from "./components/list/FluentList";
import { IFormItemBuilder, IFormItem, IFormListRenderProps, ILoadingProps, IDynamicPropertyComponentConfig, IItemRenderProps, IFormItemPropertyOptions, buildPropertyRenderInfo, ValidationMark, getValidationMarkForProperty, IPropertyTypes, propertyTypes, FormLabel, ValidationMessageElement } from "@wiberg/formbuilder";

export const WrapInLabel: React.FC<{ Label: FormLabel, info: any, schema: IFormItemPropertyOptions<any, any>, validationMark: ValidationMark, skipError?: boolean }> = ({ Label, info, schema, validationMark, children }) => {
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
        </div>
    )
}

export const createFluentBuilder = (labelRender?: FormLabel) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_fluentbuilder";
    
    const DefaultLabelRender: FormLabel = FluentPropertyLabel;
    const BuilderLabelRender = labelRender ?? DefaultLabelRender;
    const listComponent = <T extends IFormItem>() : ElementType<IFormListRenderProps<T>> => FluentList;
    const loadingSpinnerComponent = () : ElementType<ILoadingProps> | undefined => FluentFormShimmer;

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) => {
        let { item } = renderProps;
        
        if (item === null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let info = buildPropertyRenderInfo(renderProps, schema, property);
        let validationMark: ValidationMark = getValidationMarkForProperty(renderProps, property);

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.string: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicTextfield {...schema} {...info.props} />
                </WrapInLabel>
            )
            case propertyType.number: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicTextfield {...schema} {...info.props} />
                </WrapInLabel>
            )
            case propertyType.boolean: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicBooleanField {...schema} {...info.props} />
                </WrapInLabel>
            )
            case propertyType.date: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicDateField {...schema} {...info.props} />
                </WrapInLabel>
            )
            case propertyType.json: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicJsonfield {...schema} {...info.props} />
                </WrapInLabel>
            )
            case propertyType.predefinedArray: return (
                <WrapInLabel Label={BuilderLabelRender} info={info} schema={schema} validationMark={validationMark}>
                    <DynamicPredefinedArrayField {...schema} {...info.props} />
                </WrapInLabel>
            )
            default: return undefined;
        }
    };


    return { id, build, loadingComponent: loadingSpinnerComponent, listComponent }
}
