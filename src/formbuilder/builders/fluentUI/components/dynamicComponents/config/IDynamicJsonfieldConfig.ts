import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicJsonFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	resizable?: boolean;
}