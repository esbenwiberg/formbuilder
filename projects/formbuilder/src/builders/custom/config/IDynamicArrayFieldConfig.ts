import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormBuilderListMenuConfig } from "../../../interfaces/lists/IFormBuilderListMenuConfig";
import { IPropertyTypes } from "../../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicArrayFieldConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	multiSelect?: boolean;
	listMenuConfig?: IFormBuilderListMenuConfig<any>;
	propertyType?: keyof IPropertyTypes;
}