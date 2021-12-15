import { IPropertyRenderProps } from "../../interfaces/IPropertyRenderProps";
import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { IFormItemBuilder, IFormItemBuilderResult, LabelRender } from "../interfaces/IFormItemBuilder";
import { PropertyType } from "../../models/property/PropertyType";
import { IFormItem } from "../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { ValidationMark } from "../../models/validation/ValidationMark";
import { DynamicJsonfield } from "./components/dynamicComponents/DynamicJsonfield";
import { DynamicBooleanField } from "./components/dynamicComponents/DynamicBooleanField";
import { DynamicDateField } from "./components/dynamicComponents/DynamicDateField";
import { DynamicPredefinedArrayField } from "./components/dynamicComponents/DynamicPredefinedArrayField";
import { DynamicTextfield } from "./components/dynamicComponents/DynamicTextfield";
import React from "react";
import { Label } from "@fluentui/react";
import { FluentPropertyLabel } from "./components/list/components/FluentPropertyLabel";
import { FluentFormShimmer } from "./components/list/components/FluentFormShimmer";
import FluentList from "./components/list/FluentList";
import { getPropertyValidationMark } from "../../utils/common/PropertyValidationMark";
import { validationUtil } from "../../utils/common/ValidationUtil";
import { fluentUiLabel } from "./components/fluentUiLabel";

export class FluentBuilder implements IFormItemBuilder {

    public id = "internal_fluentbuilder";
    private _labelRender: LabelRender = fluentUiLabel;
    public listComponent? = () => FluentList;
    public loadingSpinnerComponent? = () => FluentFormShimmer;

    constructor(labelRender?: LabelRender) {
        if (labelRender) this._labelRender = labelRender;
    }

    public static Create = (labelRender?: LabelRender) : FluentBuilder => {
        let builder = new FluentBuilder(labelRender);
        return builder;
    }

    public build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) : IFormItemBuilderResult => {
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
                        labelRender={this._labelRender}
                        propertySchema={schema}
                        hideLabel={props.options.hideLabel}
                        parentKey={key}
                        validationMark={validationMark}
                    />
                    { element }
                </div>
            )
        }

        switch (schema.propertyType) {
            case PropertyType.String: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...props} />) };
            case PropertyType.Number: return { found: true, element: WrapInLabel(<DynamicTextfield {...schema} {...props} />) };
            case PropertyType.Boolean: return { found: true, element: WrapInLabel(<DynamicBooleanField {...schema} {...props} />) }
            case PropertyType.Date: return { found: true, element: WrapInLabel(<DynamicDateField {...schema} {...props} />) }
            case PropertyType.Json: return { found: true, element: WrapInLabel(<DynamicJsonfield {...schema} {...props} />) };
            case PropertyType.PredefinedArray: return { found: true, element: WrapInLabel(<DynamicPredefinedArrayField {...schema} {...props} />) };
            default: return { found: false, element: undefined }
        }
    }
}