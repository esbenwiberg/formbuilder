import { IPropertyTypes } from "../../..";
import { IFormBuilderListMenuConfig } from "../../../components/config/IFormBuilderListConfig";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicArrayFieldConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	multiSelect?: boolean;
	listMenuConfig?: IFormBuilderListMenuConfig<any>;
	propertyType?: keyof IPropertyTypes;
}