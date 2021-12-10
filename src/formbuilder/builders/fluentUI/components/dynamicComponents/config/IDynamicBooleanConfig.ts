import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicBooleanConfig extends IDynamicPropertyComponentConfig {
    asToggle?: boolean;
	textIfTrue?: string;
	textIfFalse?: string;
}