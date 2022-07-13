import { IDynamicPropertyComponentConfig } from "../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormBuilderListProps } from "../components/FormBuilder";
import { IFormItem } from "../interfaces/form/IFormItem";
import { IFormGroupOptions } from "../interfaces/options/IFormGroupOptions";
import { IFormItemPropertyOptions } from "../interfaces/options/IFormItemPropertyOptions";

export interface IFormSchema2<T extends IFormItem> {
    /** all the groups for an item's properties */
    groups?: { [name: string] : IFormGroupOptions };
    /** the properties this schema should use */
    properties: { [name: string] : IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>> }; // TODO: keyof T | string (nopes, don't do that because of fake properties)
    /** if needed as a list, this config is used - can also be configured directly on the 'FormBuilder' component */
    listOptions?: IFormBuilderListProps<T>;
}