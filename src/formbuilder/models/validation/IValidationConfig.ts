import { IFormItem } from "../../modules/IFormItem";
import { IValidationRule } from "./IValidationRules";

export interface IValidationConfig<T extends IFormItem> {
    ignoreValidation?: boolean;
    validationRules?: { [name: string] : IValidationRule<T> | Array<IValidationRule<T>> }
}