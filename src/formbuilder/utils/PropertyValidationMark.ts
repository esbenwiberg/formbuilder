import { IValidationRule } from "../models/validation/IValidationRules";
import { ValidationMark } from "../models/validation/ValidationMark";
import { IFormItem } from "../modules/IFormItem";
import { array } from "./Array";

export const getPropertyValidationMark = <T extends IFormItem>(validationRule: IValidationRule<T> | Array<IValidationRule<T>> | undefined) : ValidationMark => {
    if (validationRule == null) return ValidationMark.None;
    if (Array.isArray(validationRule)) {
        return array.max(validationRule, _ => _.validationMark ?? 0);
    }
    else {
        return validationRule.validationMark ?? 0;
    }
}