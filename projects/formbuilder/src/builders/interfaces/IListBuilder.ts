import { IFormItem } from "../../interfaces/form/IFormItem";
import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { IValidationResult } from "../../models/validation/IValidationResult";
import { IDynamicPropertyComponentConfig } from "./IDynamicPropertyComponentConfig";

export interface IPropertyBuilderResult {
    found: boolean;
    element: JSX.Element | undefined;
}

export interface IListBuilder {
    id: string;
    build: <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(item: T, property: string, schema: IFormItemPropertyOptions<T, C>, onChange: (value: any) => void, onBlur: (property: string, value: any) => void, validationResults: IValidationResult, validationResultPrefix?: string) => IPropertyBuilderResult;
}