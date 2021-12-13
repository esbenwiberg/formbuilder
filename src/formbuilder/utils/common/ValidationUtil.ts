import { IValidationResult, IValidationRuleResult } from "../../models/validation/IValidationResult";

export const validationUtil = {
    getResultAsString: (result: {[ruleId: string] : IValidationRuleResult }) => {
        if (result == null) return undefined;
        return Object.keys(result).filter(_ => !result[_].success).map(_ => result[_].message).join(" | ");
    },

    validated: (results: IValidationResult) => {
        for (const propKey of Object.keys(results)) {
            for (const ruleKey of  Object.keys(results[propKey])) {
                let result = results[propKey][ruleKey];
                if (Array.isArray(result)) {
                    if (result.some((_: IValidationRuleResult) => !_.success)) return false;
                }
                else {
                    if (!result.success) return false;
                }
            }
        }
        return true;
    }
}