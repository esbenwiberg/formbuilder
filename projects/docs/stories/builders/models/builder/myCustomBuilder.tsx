import React from "react";
import { IFormItemBuilder, IFormItem, IDynamicPropertyComponentConfig, IItemRenderProps, IFormItemPropertyOptions, IFormItemBuilderResult, buildPropertyRenderInfo, FormLabel, ValidationMark, getValidationMarkForProperty } from "@wiberg/formbuilder";
import { customPropertyTypes, ICustomPropertyTypes } from "./customPropertyType";
import { SpecialTextField } from "./specialTextField";
import { SpecialNumberField } from "./specialNumberField";
import { FluentPropertyLabel } from "@wiberg/fluentui-builder";

export const createCustomBuilder = () : IFormItemBuilder => {

    const id: Readonly<string> = "myCustomBuilder";
    
    // const listComponent = <T extends IFormItem>() : ElementType<IFormListRenderProps<T>> => FluentList;
    const loadingComponent = () => undefined;
    const BuilderLabelRender: FormLabel = FluentPropertyLabel;

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        
        let { item } = renderProps;
        
        if (item === null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");
        
        let info = buildPropertyRenderInfo(renderProps, schema, property);

        let validationMark: ValidationMark = getValidationMarkForProperty(renderProps, property);

        const WrapInLabel = (element: JSX.Element, addErrormessage?: boolean) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={info.props.key}>
                     <BuilderLabelRender
                        key={`${info.key}-labelcontainer`}
                        propertySchema={schema}
                        hideLabel={info.props.options.hideLabel}
                        parentKey={info.key}
                        validationMark={validationMark}
                    />
                    { element }
                </div>
            )
        }
        const propertyType: ICustomPropertyTypes = customPropertyTypes;
        
        switch (schema.propertyType) {
            case propertyType.specialText: return { found: true, element: WrapInLabel(<SpecialTextField {...schema} {...info.props} />) };
            case propertyType.specialNumber: return { found: true, element: WrapInLabel(<SpecialNumberField {...schema} {...info.props} />) };
            default: return { found: false, element: undefined }
        }
    };

    return { id, build, loadingComponent, listComponent: undefined }
}
