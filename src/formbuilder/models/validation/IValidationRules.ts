import { IFormItem } from "../../modules/IFormItem";
import { ValidationEventType } from "./ValidationEventType";
import { ValidationMark } from "./ValidationMark";

export interface IValidationRule<T extends IFormItem> {
    id: string;
    disabled?: boolean;
    validationMark?: ValidationMark;
    validationRule: (item: T) => boolean;
    validationMessage: string;
    validateOn: ValidationEventType;
    fromType?: new () => IFormItem;
}
