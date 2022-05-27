import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormGroupOptions } from "./IFormGroupOptions";
import { IFormItemPropertyOptions } from "./IFormItemPropertyOptions";
import { IValidationConfig } from "../../models/validation/IValidationConfig";
import { IFormBuilderListProps } from "../../components/FormBuilder";
import { IFormItem } from "../form/IFormItem";

export interface IFormItemOptions<T extends IFormItem> {
    /** all the groups for an item's properties */
    groups?: { [name: string] : IFormGroupOptions };
    /** the properties this schema should use */
    properties: { [name: string] : IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>> }; // TODO: keyof T | string
    /** the validation config for the schema */
    validation?: IValidationConfig<T>;
    /** if needed as a list, this config is used - can also be configured directly on the 'FormBuilder' component */
    listOptions?: IFormBuilderListProps<T>;
}