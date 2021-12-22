import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "../form/IFormItem";
import { DayOfWeek, FirstWeekOfYear } from "./dates/DateInterfaces";

export interface IDynamicDateFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	firstDayOfWeek?: DayOfWeek;
	firstWeekOfYear?: FirstWeekOfYear;
	displayFormat?: (date?: Date | undefined) => string;
	localizationStrings?: {[key: string] : string | string[] };
	minDate?: (parent: T) => Date;
	maxDate?: (parent: T) => Date;
	restrictedDates?: (parent: IFormItem) => Array<Date> | undefined;
}