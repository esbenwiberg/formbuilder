import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicJsonFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	resizable?: boolean;
}