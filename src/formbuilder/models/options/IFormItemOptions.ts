import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "../../modules/IFormItem";
import { IFormGroupOptions } from "./IFormGroupOptions";
import { IFormItemPropertyOptions } from "./IFormItemPropertyOptions";
import { IValidationConfig } from "../validation/IValidationConfig";
import { IFormBuilderListProps } from "../../components/FormBuilder";

export interface IFormItemOptions<T extends IFormItem> {
    /** all the groups for an item's properties */
    groups?: { [name: string] : IFormGroupOptions };
    /** the properties this schema should use */
    properties: { [name: string] : IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig> };
    /** the validation config for the schema */
    validation?: IValidationConfig<T>;
    /** if needed as a list, this config is used - can also be configured directly on the 'FromBuilder' component */
    listOptions?: IFormBuilderListProps<T>;
}