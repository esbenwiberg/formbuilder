import { RequireOnlyOne } from "../../../../../interfaces/types/Partials";
import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

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