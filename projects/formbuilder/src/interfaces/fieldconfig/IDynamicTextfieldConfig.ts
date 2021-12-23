import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicTextFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	type?: "text" | "number";
	multiline?: boolean;
	resizable?: boolean;
	allowNegativeNumbers?: boolean;
}