import { IValidationRule } from "../../models/validation/IValidationRules";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { IValidationResult } from "../../models/validation/IValidationResult";
import { ValidationEventType } from "../../models/validation/ValidationEventType";
import { IFormItem } from "../../interfaces/form/IFormItem";

const validateRule = async <T extends IFormItem>(item: T, property: string, rule: IValidationRule<T> | Array<IValidationRule<T>>, onEvent: ValidationEventType | undefined, results: IValidationResult, validationResultPrefix?: string) : Promise<void> => {
    if (rule == null) return;
    let propertyIndexer = validationResultPrefix ? `${validationResultPrefix}.${property}` : property;
    if (Array.isArray(rule)) {
        rule.forEach((_, idx) => {
            let validated = (onEvent != undefined && !((_.validateOn & onEvent) === onEvent)) || (!_.disabled && _.validationRule?.(item));
            if (results[propertyIndexer] == null) results[propertyIndexer] = {};
            results[propertyIndexer][idx] = { message: validated ? "" : _.validationMessage, success: !!validated };
        })
    }
    else {
        if (rule.nestedValidation != undefined) {
            let childSchema = rule.nestedValidation.schemaProvider != null
                ? await rule.nestedValidation.schemaProvider()
                : rule.nestedValidation.schema;

            if ((item as any)[property] != null) {
                results = await formValidator.validate((item as any)[property], undefined, childSchema, onEvent, results, property); // TODO: maybe set all events here ('undefined'), to prevent validation messages to dissapear when other properties change (ewi)
            }
        }
        else {
            let validated = (onEvent != undefined && !((rule.validateOn & onEvent) === onEvent)) || (!rule.disabled && rule.validationRule?.(item));
            if (results[propertyIndexer] == null) results[propertyIndexer] = {};
            results[propertyIndexer]["single"] = { message: validated ? "" : rule.validationMessage, success: !!validated };
        }
    }
}

export const formValidator = {

    // TODO: handle nested validation on complex objects, more smooth (ewi)
    // TODO: handle validation differently than using 'onEvent'?! (ewi)
    validate: async <T extends IFormItem>(item: T, prop: string | undefined, schema: IFormSchema<T> | undefined, onEvent: ValidationEventType | undefined, existingResults: IValidationResult, validationResultPrefix?: string) : Promise<IValidationResult> => {
        
        const properties = schema?.properties ?? {};
        
        let results: IValidationResult = existingResults ?? {};

        // specific prop needs validation
        if (prop !== undefined) {
            let rule = properties[prop]?.validation;
            if (!rule) return results;
            await validateRule(item, prop, rule, onEvent, results, validationResultPrefix);
        }
        else {
            for (const key of Object.keys(properties)) {
                let rule = properties[key]?.validation;
                if (!rule) return results;
                await validateRule(item, key, rule, onEvent, results, validationResultPrefix);
            }
        }

        return results;
    }
}