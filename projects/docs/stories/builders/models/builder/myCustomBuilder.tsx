import React, { ElementType } from "react";
import { LabelRender, IFormItemBuilder, IFormItem, IFormListRenderProps, ILoadingProps, IDynamicPropertyComponentConfig, IItemRenderProps, IFormItemPropertyOptions, IFormItemBuilderResult, buildPropertyRenderInfo, ValidationMark, getValidationMarkForProperty, IPropertyTypes, propertyTypes } from "@wiberg/formbuilder";
import { customPropertyTypes, ICustomPropertyTypes } from "./customPropertyType";
import { SpecialTextField } from "./specialTextField";
import { SpecialNumberField } from "./specialNumberField";
import { fluentUiLabel } from "@wiberg/fluentui-builder";

export const createCustomBuilder = () : IFormItemBuilder => {

    const id: Readonly<string> = "myCustomBuilder";
    
    // const listComponent = <T extends IFormItem>() : ElementType<IFormListRenderProps<T>> => FluentList;
    const loadingComponent = () => undefined;
    const labelRender: LabelRender = fluentUiLabel;

    const build = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>): IFormItemBuilderResult => {
        console.log("GOGO");
        
        let { item } = renderProps;
        
        if (item === null) throw Error("item is null");
        if (schema == null) throw Error("schema is null");
        console.log("1");
        
        let info = buildPropertyRenderInfo(renderProps, schema, property);
        console.log("2");
        const WrapInLabel = (element: JSX.Element, addErrormessage?: boolean) : JSX.Element => {
            return (
                <div className="formbuilder-property" key={info.props.key}>
                    { !info.props.options.hideLabel && labelRender(schema, info.key + "-label")}
                    { element }
                </div>
            )
        }
        console.log("3");
        const propertyType: ICustomPropertyTypes = customPropertyTypes;
        console.log("4");
        console.log(schema.propertyType);
        
        switch (schema.propertyType) {
            case propertyType.specialText: return { found: true, element: WrapInLabel(<SpecialTextField {...schema} {...info.props} />) };
            case propertyType.specialNumber: return { found: true, element: WrapInLabel(<SpecialNumberField {...schema} {...info.props} />) };
            default: return { found: false, element: undefined }
        }
    };

    return { id, build, loadingComponent, listComponent: undefined }
}
