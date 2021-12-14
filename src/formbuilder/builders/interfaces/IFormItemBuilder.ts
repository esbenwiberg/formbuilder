import { IFormListRenderProps } from "../../components/interfaces/IFormListRenderProps";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { ValidationMark } from "../../models/validation/ValidationMark";
import { IFormItem } from "../../modules/IFormItem";
import { ILoadingSpinnerProps } from "../fluentUI/components/list/components/FluentFormShimmer";
import { IDynamicPropertyComponentConfig } from "./IDynamicPropertyComponentConfig";

export interface IFormItemBuilderResult {
    found: boolean;
    element: JSX.Element | undefined;
}

// TODO: rename (ewi)
export interface IFormItemBuilder {
    id: string;
    listComponent?: <T extends IFormItem>() => React.ElementType<IFormListRenderProps<T>>;
    loadingSpinnerComponent?: () => React.ElementType<ILoadingSpinnerProps>;
    build: <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) => IFormItemBuilderResult;
}

export type LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark?: ValidationMark) => JSX.Element | undefined;