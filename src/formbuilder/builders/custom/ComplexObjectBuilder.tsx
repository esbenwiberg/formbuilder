import { IPropertyRenderProps } from "../../interfaces/IPropertyRenderProps";
import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { IFormItemBuilder, IFormItemBuilderResult, LabelRender } from "../interfaces/IFormItemBuilder";
import { PropertyType } from "../../models/property/PropertyType";
import { IFormItem } from "../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../interfaces/IDynamicPropertyComponentConfig";
import { IDynamicComponentConfig } from "./config/IDynamicComponentConfig";
import { IFormItemProps } from "../../components/Form";
import { IFormItemComponentConfig } from "./config/IFormItemComponentConfig";
import { FormBuilder } from "../../components/FormBuilder";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { DynamicArrayField } from "./components/DynamicArrayField";
import React from "react";
import { validationUtil } from "../../utils/common/ValidationUtil";
import { validationMessageElement } from "../helpers/validationMessage";

export class ComplexObjectBuilder implements IFormItemBuilder {

    public id = "internal_custombuilder";
    private _labelRender: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(propertySchema: IFormItemPropertyOptions<T, C>, key: string) => <label key={key}>{propertySchema.displayName}</label>;
    private _validationMessageElement: (message: string) => JSX.Element = validationMessageElement;

    constructor(labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element) {
        if (labelRender) this._labelRender = labelRender;
        if (validationMsgElement) this._validationMessageElement = validationMsgElement;
    }

    public static Create = (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element) : ComplexObjectBuilder => {
        let builder = new ComplexObjectBuilder(labelRender, validationMsgElement);
        return builder;
    }

    // property overrides cannot be nested for now (ewi)
    public convertPropertyOverrides = (propertyOverrides: IPropertyOverrides | undefined, property: string) : IPropertyOverrides | undefined => {
        if (propertyOverrides == undefined) return undefined;
        let clone = {...propertyOverrides};
        if (Array.isArray(propertyOverrides.disabledProps) && propertyOverrides.disabledProps.indexOf(property) >= 0) clone.disabledProps = true;
        return clone;
    }

    public build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) : IFormItemBuilderResult => {
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
                    { !props.options.hideLabel && this._labelRender(schema, key + "-label")}
                    { element }
                    { (addErrormessage && props.errorMessage) && this._validationMessageElement(props.errorMessage)}
                </div>
            )
        }

        switch (schema.propertyType) {
            case PropertyType.Array: return { found: true, element: WrapInLabel(<DynamicArrayField {...schema} {...props} />) };
            case PropertyType.Custom: 
                let customConfig = (schema.config as unknown) as IDynamicComponentConfig;
                if (!customConfig?.component) return { found: false, element: undefined };
                // const Comp = this.customComponents[customConfig?.componentName];
                const Comp = customConfig.component;
                return { found: true, element: <>{ WrapInLabel(<Comp key={key} {...props} {...schema} />) }</> }

            case PropertyType.FormItem:
                let formConfig = (schema.config as any) as IFormItemComponentConfig;
                if (!formConfig?.itemType) return { found: false, element: undefined };
                let formItemProps: IFormItemProps<IFormItem> = {
                    item: (item as any)[property],
                    itemType: formConfig.itemType,
                    groupContainer: formConfig.groupContainer,
                    groupRender: formConfig.groupRender,
                    onPropertyChange: (item: IFormItem, prop: string, value: any) => props.onChange(item),
                    validationResult: validationResults,
                    validationResultPrefix: property,
                    propertyOverrides: this.convertPropertyOverrides(renderProps.propertyOverrides, property)
                };

                let addErrormessage = false;
                // used for having properties as array of formitem
                let listProps = schema?.listProps;
                if (listProps != undefined) {
                    formItemProps.onPropertyChange = undefined;
                    listProps.config.onItemsChange = items => props.onChange(items);
                    addErrormessage = true;
                }

                return { found: true, element: <>{ WrapInLabel(<FormBuilder key={key} keyPrefix={key} {...formItemProps} {...formConfig} listProps={schema?.listProps as any} />, addErrormessage) }</> }

            default: return { found: false, element: undefined }
        }
    }
}