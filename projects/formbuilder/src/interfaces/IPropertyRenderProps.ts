import { IFormItemPropertyOptions } from "./options/IFormItemPropertyOptions";
import { IDynamicPropertyComponentConfig } from "../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "./form/IFormItem";

export interface IPropertyRenderProps<TItem extends IFormItem, TConfig extends IDynamicPropertyComponentConfig<TItem>, TValue> {
    /** the property key */
    key?: string;
    /** the property value */
    value: TValue;
    /** the name of the property */
    propertyName: string;
    /** the options used for rendering the property */
    options: IFormItemPropertyOptions<TItem, TConfig>
    /** the 'onChange' event of the properties render element */
    onChange: (value: TValue) => void;
    /** the 'onBlur' event of the properties render element */
    onBlur: (value: TValue) => void;
    /** whether or not the property is disabled for editing */
    disabled: boolean;
    /** if validation fails this is the error message */
    errorMessage?: string;
    /** the item where the property resides */
    parent: Readonly<TItem>;
}