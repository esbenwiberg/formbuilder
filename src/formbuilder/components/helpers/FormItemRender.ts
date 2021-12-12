import { IFormItemBuilder } from "../../builders/interfaces/IFormItemBuilder"
import { IFormItem } from "../../modules/IFormItem";
import React from "react";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IFormListRenderProps } from "../FormList";
import { ILoadingSpinnerProps } from "../../builders/fluentUI/components/list/components/FluentFormShimmer";

export interface IFormItemRender {
    hasBuilders: () => boolean;
    register: (builder: IFormItemBuilder) => void;
    registerRange: (builders: Array<IFormItemBuilder> | undefined) => void;

    list: <T extends IFormItem>() => React.ElementType<IFormListRenderProps<T>>;
    spinner: () => React.ElementType<ILoadingSpinnerProps>;
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

    const spinner = () : React.ElementType<ILoadingSpinnerProps> | undefined => {
        for (const builder of _builders) {
            if (builder.loadingSpinnerComponent) return builder.loadingSpinnerComponent();
        }
        return undefined;
    }

    const properties = <T extends IFormItem>(renderProps: IItemRenderProps<T>, properties?: Array<string>) : Array<JSX.Element> | undefined => {
        let elements: Array<JSX.Element> = [];
        // loop through properties specified or defautls to all properties
        for (const prop of properties ?? Object.keys(renderProps.schema.properties)) {
            let propSchema = {...renderProps.schema.properties[prop]};
            if (propSchema.hide && propSchema.hide(renderProps.item)) continue;
            for (const builder of _builders) {
                let result = builder.build(renderProps, prop, propSchema);
                if (result.found && result.element != null) elements.push(result.element);
            }
        }

        return elements?.length ? elements : undefined;
    }

    return { register, registerRange, properties, hasBuilders, list, spinner } as IFormItemRender
}
