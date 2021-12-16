export interface IValidationRuleResult {
    /** whether validation is a success */
    success: boolean;
    /** the validation message */
    message: string;
}

export type IValidationResult = {[prop: string] : {[ruleId: string] : IValidationRuleResult } };