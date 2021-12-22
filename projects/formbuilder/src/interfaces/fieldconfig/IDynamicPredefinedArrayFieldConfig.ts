import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { RequireOnlyOne } from "../types/Partials";

export interface IDynamicPredefinedArrayItem {
	key: string | number;
	text: string;
}

export interface IDynamicPredefinedArrayFieldValuesConfig {
	options?: Array<IDynamicPredefinedArrayItem>;
	optionsAsync?: () => Promise<Array<IDynamicPredefinedArrayItem>>;
}

export interface IDynamicPredefinedArrayFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	multiSelect?: boolean;
	predefinedOptions?: RequireOnlyOne<IDynamicPredefinedArrayFieldValuesConfig>
}