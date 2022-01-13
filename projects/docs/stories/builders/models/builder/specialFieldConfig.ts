import { IDynamicTextFieldConfig } from "@wiberg/formbuilder";

export interface ISpecialFieldConfig<T> extends IDynamicTextFieldConfig<T> {
    color?: string;
}