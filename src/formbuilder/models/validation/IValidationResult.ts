export interface IValidationRuleResult {
    success: boolean;
    message: string;
}

export type IValidationResult = {[prop: string] : {[ruleId: string] : IValidationRuleResult } };