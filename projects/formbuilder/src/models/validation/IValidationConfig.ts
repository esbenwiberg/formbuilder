import { IFormItem } from "../../interfaces/form/IFormItem";
import { IValidationRule } from "./IValidationRules";

export interface IValidationConfig<T extends IFormItem> {
    /** should validation be ignored entirely */
    ignoreValidation?: boolean;
    /** the rules used for validation (keys are the property names) */
    validationRules?: { [name: string] : IValidationRule<T> | Array<IValidationRule<T>> }
}