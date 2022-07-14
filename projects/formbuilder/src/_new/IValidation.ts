import { IFormItem } from "../interfaces/form/IFormItem";
import { RequireOnlyOne } from "../interfaces/types/Partials";
import { INestedValidation } from "../models/validation/IValidationRules";
import { ValidationEventType } from "../models/validation/ValidationEventType";
import { ValidationMark } from "../models/validation/ValidationMark";

export interface IValidation<T extends IFormItem> {
    /** the validation rule it self - how is this property validated (return true for valid, false for invalid) */
    validationRule?: (item: T) => string | null;
    /** which events should the validation, for this property, fire (defaults to all) */
    validateOn: ValidationEventType;
    /** should this validation rule add a mark to the property label */
    validationMark?: ValidationMark;
    /** use this when validating a child form item */
    nestedValidation?: RequireOnlyOne<INestedValidation<any>>;
}

export interface IValidationResult {
    
}
