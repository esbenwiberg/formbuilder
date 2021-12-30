import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { RequireOnlyOne } from "../types/Partials";

export interface IDynamicPredefinedArrayItem {
	key: string | number;
	text: string;
}

export interface IDynamicPredefinedArrayFieldValuesConfig<T> {
	options?: Array<IDynamicPredefinedArrayItem>;
	optionsAsync?: (item: T) => Promise<Array<IDynamicPredefinedArrayItem>>;
}

export interface IDynamicPredefinedArrayFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	multiSelect?: boolean;
	predefinedOptions?: RequireOnlyOne<IDynamicPredefinedArrayFieldValuesConfig<T>>
}