import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormBuilderListProps } from "../../components/FormBuilder";
import { IFormItem } from "../form/IFormItem";
import { IFormGroupOptions } from "../options/IFormGroupOptions";
import { IFormItemPropertyOptions } from "../options/IFormItemPropertyOptions";

export interface IFormSchema<T extends IFormItem> {
    /** all the groups for an item's properties */
    groups?: { [name: string] : IFormGroupOptions };
    /** the properties this schema should use */
    properties: { [name: string] : IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>> }; // TODO: keyof T | string (nopes, don't do that because of fake properties)
    listOptions?: IFormBuilderListProps<T>; //TODO: REFACTOR: remove this!!
}
