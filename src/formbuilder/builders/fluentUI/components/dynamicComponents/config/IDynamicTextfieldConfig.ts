import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicTextFieldConfig extends IDynamicPropertyComponentConfig {
	type?: "text" | "number";
	multiline?: boolean;
	resizable?: boolean;
	allowNegativeNumbers?: boolean;
}