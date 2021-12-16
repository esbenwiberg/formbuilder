import { IFormItem } from "../../modules/IFormItem";
import { ValidationEventType } from "./ValidationEventType";
import { ValidationMark } from "./ValidationMark";

export interface IValidationRule<T extends IFormItem> {
    /** the validation rule identifier */
    id: string;
    /** should this rule be skipped during validation */
    disabled?: boolean;
    /** should this validation rule add a mark to the property label */
    validationMark?: ValidationMark;
    /** the validation rule it self - how is this property validated (return true for valid, false for invalid) */
    validationRule: (item: T) => boolean;
    /** the message to display if validation fails */
    validationMessage: string;
    /** which events should the validation, for this property, fire */
    validateOn: ValidationEventType;
    /** use this when validating a child form item */
    fromType?: new () => IFormItem;
}
