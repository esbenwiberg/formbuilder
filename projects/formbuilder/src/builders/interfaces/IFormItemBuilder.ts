import { IFormListRenderProps } from "../../components/interfaces/IFormListRenderProps";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { ValidationMark } from "../../models/validation/ValidationMark";
import { IDynamicPropertyComponentConfig } from "./IDynamicPropertyComponentConfig";
import { ILoadingProps as ILoadingProps } from "./ILoadingProps";

export interface IFormItemBuilderResult {
    found: boolean;
    element: JSX.Element | undefined;
}

export interface IFormItemBuilder {
    id: Readonly<string>;
    listComponent?: <T extends IFormItem>() => React.ElementType<IFormListRenderProps<T>>;
    loadingComponent?: () => React.ElementType<ILoadingProps> | undefined;
    build: <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) => IFormItemBuilderResult;
}

export type LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark?: ValidationMark) => JSX.Element | undefined;

export declare type ValidationMessageElement = (message: string) => JSX.Element;

export declare type LoadingSpinner = React.ElementType<ILoadingProps>;