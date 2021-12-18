import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicBooleanConfig<T> extends IDynamicPropertyComponentConfig<T> {
    asToggle?: boolean;
	textIfTrue?: string;
	textIfFalse?: string;
}