import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { IValidationResult } from "../../models/validation/IValidationResult";
import { IFormItem } from "../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "./IDynamicPropertyComponentConfig";

export interface IPropertyBuilderResult {
    found: boolean;
    element: JSX.Element | undefined;
}

export interface IListBuilder {
    id: string;
    build: <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(item: T, property: string, schema: IFormItemPropertyOptions<T, C>, onChange: (value: any) => void, onBlur: (property: string, value: any) => void, validationResults: IValidationResult, validationResultPrefix?: string) => IPropertyBuilderResult;
}