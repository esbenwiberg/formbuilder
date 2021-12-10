import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "../../modules/IFormItem";
import { IFormGroupOptions } from "./IFormGroupOptions";
import { IFormItemPropertyOptions } from "./IFormItemPropertyOptions";
import { IValidationConfig } from "../validation/IValidationConfig";

export interface IFormItemOptions<T extends IFormItem> {
    groups?: { [name: string] : IFormGroupOptions };
    properties: { [name: string] : IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig> };
    validation?: IValidationConfig<T>;
}