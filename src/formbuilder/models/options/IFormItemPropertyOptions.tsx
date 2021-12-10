import { IFormItem } from "../../modules/IFormItem";
import { PropertyType } from "../property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItemListItemOptions } from "./IFormItemListItemOptions";
import { IFormBuilderListProps } from "../../components/FormBuilder";

export interface IFormItemPropertyOptions<T extends IFormItem, C extends IDynamicPropertyComponentConfig> {
    key?: string
    displayName: string;
    propertyType: PropertyType;
    description?: string;
    hide?: (item: T) => boolean | undefined;
    disable?: (item: T) => boolean;
    hideLabel?: boolean;
    config?: C | undefined;
    group?: string;
    listItemOptions?: IFormItemListItemOptions<T>;
    listProps?: IFormBuilderListProps<T>;
    onChanged?: (item: T) => { refreshDynamicSchema?: boolean };
}