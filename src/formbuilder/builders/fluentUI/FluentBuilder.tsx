import { IPropertyRenderProps } from "../../interfaces/IPropertyRenderProps";
import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { IFormItemBuilder, IFormItemBuilderResult, LabelRender } from "../interfaces/IFormItemBuilder";
import { IPropertyTypes, propertyTypes } from "../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { ValidationMark } from "../../models/validation/ValidationMark";
import { DynamicJsonfield } from "./components/dynamicComponents/DynamicJsonfield";
import { DynamicBooleanField } from "./components/dynamicComponents/DynamicBooleanField";
import { DynamicDateField } from "./components/dynamicComponents/DynamicDateField";
import { DynamicPredefinedArrayField } from "./components/dynamicComponents/DynamicPredefinedArrayField";
import { DynamicTextfield } from "./components/dynamicComponents/DynamicTextfield";
import React, { ElementType } from "react";
import { FluentPropertyLabel } from "./components/list/components/FluentPropertyLabel";
import { FluentFormShimmer } from "./components/list/components/FluentFormShimmer";
import { getPropertyValidationMark } from "../../utils/common/PropertyValidationMark";
import { validationUtil } from "../../utils/common/ValidationUtil";
import { fluentUiLabel } from "./components/fluentUiLabel";
import { ILoadingSpinnerProps } from "../interfaces/ILoadingSpinnerProps";
import { IFormListRenderProps } from "../../components/interfaces/IFormListRenderProps";
import FluentList from "./components/list/FluentList";
import { IFormItem } from "../../interfaces/form/IFormItem";

export const createFluentBuilder = (labelRender?: LabelRender) : IFormItemBuilder => {

    const id: Readonly<string> = "internal_fluentbuilder";
    
    const defaultLabelRender: LabelRender = fluentUiLabel;
    const builderLabelRender = labelRender ?? defaultLabelRender;
    const listComponent = <T extends IFormItem>() : ElementType<IFormListRenderProps<T>> => FluentList;
    const loadingSpinnerComponent = () : ElementType<ILoadingSpinnerProps> | undefined => FluentFormShimmer;

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        let { item, onChange, onBlur, validationResults, validationResultPrefix } = renderProps;
        
        if (item === null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");

        let validationIndexer = validationResultPrefix ? `${validationResultPrefix}.${property}` : property;
        let key = `prop-${validationResultPrefix ?? ""}${property}`;
        let props: IPropertyRenderProps<T, C, any> = {
            key: schema.key ?? key,
            value: (item as any)[property],
            options: schema,
            onChange: (value: any) => onChange(property ,value),
            onBlur: (value: any) => onBlur(property, value),
            disabled: schema.disable ? schema.disable(item) : false,
            errorMessage: validationUtil.getResultAsString(validationResults[validationIndexer]),
            parent: item
        }

        let validationMark: ValidationMark = getPropertyValidationMark(renderProps?.schema?.validation?.validationRules && renderProps.schema.validation.validationRules[property]);

        const WrapInLabel = (element: JSX.Element) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={`propcon-${key}`}>
                    <FluentPropertyLabel
                        key={`${key}-labelcontainer`}
                        labelRender={builderLabelRender}
                        propertySchema={schema}
                        hideLabel={props.options.hideLabel}
                        parentKey={key}
                        validationMark={validationMark}
                    />
                    { element }
                </div>
            )
        }

        const propertyType: IPropertyTypes = propertyTypes;

        switch (schema.propertyType) {
            case propertyType.string: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...props} />) };
            case propertyType.number: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...props} />) };
            case propertyType.boolean: return { found: true, element: WrapInLabel(<DynamicBooleanField {...schema} {...props} />) }
            case propertyType.date: return { found: true, element: WrapInLabel(<DynamicDateField {...schema} {...props} />) }
            case propertyType.json: return { found: true, element: WrapInLabel(<DynamicJsonfield {...schema} {...props} />) };
            case propertyType.predefinedArray: return { found: true, element: WrapInLabel(<DynamicPredefinedArrayField {...schema} {...props} />) };
            default: return { found: false, element: undefined }
        }
    };


    return { id, build, loadingSpinnerComponent, listComponent }
}
