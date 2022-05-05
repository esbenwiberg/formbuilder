import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicTextFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	type?: "text" | "number" | "password";
	multiline?: boolean;
	resizable?: boolean;
	allowNegativeNumbers?: boolean;
}