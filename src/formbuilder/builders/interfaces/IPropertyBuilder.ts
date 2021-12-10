import { IFormListRenderProps } from "../../components/FormList";
import { IItemRenderProps } from "../../interfaces/IItemRenderProps";
import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { ValidationMark } from "../../models/validation/ValidationMark";
import { IFormItem } from "../../modules/IFormItem";
import { ILoadingSpinnerProps } from "../fluentUI/components/FluentSpinner";
import { IDynamicPropertyComponentConfig } from "./IDynamicPropertyComponentConfig";

export interface IPropertyBuilderResult {
    found: boolean;
    element: JSX.Element | undefined;
}

// TODO: rename (ewi)
export interface IFormItemBuilder {
    id: string;
    listComponent?: <T extends IFormItem>() => React.ElementType<IFormListRenderProps<T>>;
    loadingSpinnerComponent?: () => React.ElementType<ILoadingSpinnerProps>;
    build: <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(renderProps: IItemRenderProps<T>, property: string, schema: IFormItemPropertyOptions<T, C>) => IPropertyBuilderResult;
}

export type LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark?: ValidationMark) => JSX.Element | undefined;