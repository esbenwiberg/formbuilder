import { IFormBuilderListMenuConfig } from "../../../components/config/IFormBuilderListConfig";
import { PropertyType } from "../../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicArrayFieldConfig extends IDynamicPropertyComponentConfig {
	multiSelect?: boolean;
	listMenuConfig?: IFormBuilderListMenuConfig<any>;
	propertyType?: PropertyType;
}