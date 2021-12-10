import { IFormItem } from "../modules/IFormItem";
import { IFormItemPropertyOptions } from "../models/options/IFormItemPropertyOptions";
import { IDynamicPropertyComponentConfig } from "../builders/interfaces/IDynamicPropertyComponentConfig";

export interface IPropertyRenderProps<TItem extends IFormItem, TConfig extends IDynamicPropertyComponentConfig, TValue> {
    key?: string;
    value: TValue;
    options: IFormItemPropertyOptions<TItem, TConfig>
    onChange: (value: TValue) => void;
    onBlur: (value: any) => void;
    disabled: boolean;
    errorMessage?: string;
    parent: Readonly<TItem>;
}