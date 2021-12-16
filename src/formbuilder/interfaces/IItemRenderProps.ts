import { IFormItemOptions } from "../models/options/IFormItemOptions";
import { IValidationResult } from "../models/validation/IValidationResult";
import { IFormItem } from "../modules/IFormItem";
import { IPropertyOverrides } from "./IPropertyOverrides";

export interface IItemRenderProps<T extends IFormItem> {
    /** the form item */
    item: T;
    /** the form item schema */
    schema: IFormItemOptions<T>;
    /** the 'onChange' event of the properties render element */
    onChange: (prop: string, value: any) => void;
    /** the 'onBlur' event of the properties render element */
    onBlur: (property: string, value: any) => void;
    /** overrides used to hide or disable some properties in the forms, overriding the schema settings */
    propertyOverrides?: IPropertyOverrides;
    /** the results of the validation */
    validationResults: IValidationResult;
    /** a prefix added to the validation results. used for distincting between nested vailadtionresults */
    validationResultPrefix?: string;
    /** the item where the property resides */
    parentItem?: Readonly<IFormItem>;
}