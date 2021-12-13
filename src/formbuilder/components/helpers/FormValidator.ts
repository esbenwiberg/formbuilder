import { IValidationRule } from "../../models/validation/IValidationRules";
import { IFormSchema } from "../../models/schema/IFormSchema";
import { IValidationResult } from "../../models/validation/IValidationResult";
import { ValidationEventType } from "../../models/validation/ValidationEventType";
import { IFormItem } from "../../modules/IFormItem";
import { FormSchemaUtil } from "../../utils/common/FormSchemaUtil";

const validateRule = async <T extends IFormItem>(item: T, property: string, rule: IValidationRule<T> | Array<IValidationRule<T>>, onEvent: ValidationEventType | undefined, results: IValidationResult, validationResultPrefix?: string) : Promise<void> => {
    if (rule == null) return;
    let propertyIndexer = validationResultPrefix ? `${validationResultPrefix}.${property}` : property;
    if (Array.isArray(rule)) {
        rule.forEach(_ => {
            let validated = (onEvent != undefined && !((_.validateOn & onEvent) === onEvent)) || (!_.disabled && _.validationRule(item));
            if (results[propertyIndexer] == null) results[propertyIndexer] = {};
            results[propertyIndexer][_.id] = { message: validated ? "" : _.validationMessage, success: validated };
        })
    }
    else {
        if (rule.fromType != undefined) {
            let childSchema = await FormSchemaUtil.GetSchemaFromItem(rule.fromType);
            if ((item as any)[property] != null) {
                results = await formValidator.validate((item as any)[property], undefined, childSchema, onEvent, results, property); // TODO: maybe set all events here ('undefined'), to prevent validation messages to dissapear when other properties change (ewi)
            }
        }
        else {
            let validated = (onEvent != undefined && !((rule.validateOn & onEvent) === onEvent)) || (!rule.disabled && rule.validationRule(item));
            if (results[propertyIndexer] == null) results[propertyIndexer] = {};
            results[propertyIndexer][rule.id] = { message: validated ? "" : rule.validationMessage, success: validated };
        }
    }
}

export const formValidator = {

    // TODO: handle nested validation on complex objects, more smooth (ewi)
    // TODO: handle validation differently than using 'onEvent'?! (ewi)
    validate: async <T extends IFormItem>(item: T, prop: string | undefined, schema: IFormSchema<T> | undefined, onEvent: ValidationEventType | undefined, existingResults: IValidationResult, validationResultPrefix?: string) : Promise<IValidationResult> => {
        let validation = schema?.options?.validation;
        if (validation == null) return existingResults;
        if (validation.ignoreValidation) return existingResults;
        let rules = validation.validationRules;
        if (rules == null) return existingResults;

        let results: IValidationResult = existingResults ?? {};

        // specific prop needs validation
        if (prop !== undefined) {
            let rule = rules[prop];
            await validateRule(item, prop, rule, onEvent, results, validationResultPrefix);
        }
        else {
            for (const key of Object.keys(rules)) {
                let rule = rules[key];
                await validateRule(item, key, rule, onEvent, results, validationResultPrefix);
            }
        }

        return results;
    }
}
