import { DynamicJsonfield } from "./components/dynamicComponents/DynamicJsonfield";
import { DynamicBooleanField } from "./components/dynamicComponents/DynamicBooleanField";
import { DynamicDateField } from "./components/dynamicComponents/DynamicDateField";
import { DynamicPredefinedArrayField } from "./components/dynamicComponents/DynamicPredefinedArrayField";
import { DynamicTextfield } from "./components/dynamicComponents/DynamicTextfield";
import React, { ElementType } from "react";
import { FluentPropertyLabel } from "./components/list/components/FluentPropertyLabel";
import { FluentFormShimmer } from "./components/list/components/FluentFormShimmer";
import { fluentUiLabel } from "./components/fluentUiLabel";
import FluentList from "./components/list/FluentList";
import { LabelRender, IFormItemBuilder, IFormItem, IFormListRenderProps, ILoadingProps, IDynamicPropertyComponentConfig, IItemRenderProps, IFormItemPropertyOptions, IFormItemBuilderResult, buildPropertyRenderInfo, ValidationMark, getValidationMarkForProperty, IPropertyTypes, propertyTypes } from "@wiberg/formbuilder";

export const createFluentBuilder = (labelRender?: LabelRender) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_fluentbuilder";
    
    const defaultLabelRender: LabelRender = fluentUiLabel;
    const builderLabelRender = labelRender ?? defaultLabelRender;
    const listComponent = <T extends IFormItem>() : ElementType<IFormListRenderProps<T>> => FluentList;
    const loadingSpinnerComponent = () : ElementType<ILoadingProps> | undefined => FluentFormShimmer;

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        let { item } = renderProps;
        
        if (item === null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let info = buildPropertyRenderInfo(renderProps, schema, property);
        let validationMark: ValidationMark = getValidationMarkForProperty(renderProps, property);

        const WrapInLabel = (element: JSX.Element) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={`propcon-${info.key}`}>
                    <FluentPropertyLabel
                        key={`${info.key}-labelcontainer`}
                        labelRender={builderLabelRender}
                        propertySchema={schema}
                        hideLabel={info.props.options.hideLabel}
                        parentKey={info.key}
                        validationMark={validationMark}
                    />
                    { element }
                </div>
            )
        }

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.string: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...info.props} />) };
            case propertyType.number: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...info.props} />) };
            case propertyType.boolean: return { found: true, element: WrapInLabel(<DynamicBooleanField {...schema} {...info.props} />) }
            case propertyType.date: return { found: true, element: WrapInLabel(<DynamicDateField {...schema} {...info.props} />) }
            case propertyType.json: return { found: true, element: WrapInLabel(<DynamicJsonfield {...schema} {...info.props} />) };
            case propertyType.predefinedArray: return { found: true, element: WrapInLabel(<DynamicPredefinedArrayField {...schema} {...info.props} />) };
            default: return { found: false, element: undefined }
        }
    };


    return { id, build, loadingComponent: loadingSpinnerComponent, listComponent }
}
