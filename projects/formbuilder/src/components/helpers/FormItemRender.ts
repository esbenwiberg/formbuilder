import { IFormItemBuilder } from "../../builders/interfaces/IFormItemBuilder"
import React from "react";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IFormListRenderProps } from "../interfaces/IFormListRenderProps";
import { ILoadingProps } from "../../builders/interfaces/ILoadingProps";
import { IFormItem } from "../../interfaces/form/IFormItem";

export interface IFormItemRender {
    hasBuilders: () => boolean;
    register: (builder: IFormItemBuilder) => void;
    registerRange: (builders: Array<IFormItemBuilder> | undefined) => void;

    list: <T extends IFormItem>() => React.ElementType<IFormListRenderProps<T>>;
    loadingComponent: () => React.ElementType<ILoadingProps>;
    properties: <T extends IFormItem>(renderProps: IItemRenderProps<T>, properties?: Array<string>) => Array<JSX.Element> | undefined;
}

export const buildFormItemRender = () : IFormItemRender => {

    var _builders: Array<IFormItemBuilder> = [];

    const hasBuilders = () : boolean => _builders.length > 0;

    const register = (builder: IFormItemBuilder) : void => {
        if (_builders.findIndex(_ => _.id === builder.id) >= 0) return;
        _builders.push(builder);
    }

    const registerRange = (builders: Array<IFormItemBuilder> | undefined) : void => {
        builders?.forEach(_ => register(_));
    }

    const list = <T extends IFormItem>() : React.ElementType<IFormListRenderProps<T>> | undefined => {
        for (const builder of _builders) {
            if (builder.listComponent) return builder.listComponent();
        }
        return undefined;
    }

    const loadingComponent = () : React.ElementType<ILoadingProps> | undefined => {
        for (const builder of _builders) {
            if (builder.loadingComponent) return builder.loadingComponent();
        }
        return undefined;
    }

    const properties = <T extends IFormItem>(renderProps: IItemRenderProps<T>, properties?: Array<string>) : Array<JSX.Element> | undefined => {
        let elements: Array<JSX.Element> = [];
        // loop through properties specified or defautls to all properties
        for (const prop of properties ?? Object.keys(renderProps.schema.properties)) {
            let propSchema = {...renderProps.schema.properties[prop]};
            if (propSchema.hide && propSchema.hide(renderProps.item)) continue;
            // check if property type is not available in any builders
            let found = false;
            for (const builder of _builders) {
                let result = builder.build(renderProps, prop, propSchema);
                if (result.found) {
                    found = true;
                    if (result.element != null) 
                        elements.push(result.element);
                }
            }
            if (!found) console.warn(`Property type '${propSchema.propertyType}' is not supported in any registered builders. Maybe you've forgot to register a builder?`);
        }

        return elements?.length ? elements : undefined;
    }

    return { register, registerRange, properties, hasBuilders, list, loadingComponent } as IFormItemRender
}
