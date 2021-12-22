import { DayOfWeek, FirstWeekOfYear } from "@fluentui/react";
import { ICalendarStrings } from "@fluentui/react";
import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "../form/IFormItem";

export interface IDynamicDateFieldConfig<T> extends IDynamicPropertyComponentConfig<T> {
	firstDayOfWeek?: DayOfWeek;
	firstWeekOfYear?: FirstWeekOfYear;
	displayFormat?: (date?: Date | undefined) => string;
	localizationStrings?: ICalendarStrings;
	minDate?: (parent: T) => Date;
	maxDate?: (parent: T) => Date;
	restrictedDates?: (parent: IFormItem) => Array<Date> | undefined;
}