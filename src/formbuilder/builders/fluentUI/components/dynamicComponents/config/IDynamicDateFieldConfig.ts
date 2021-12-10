import { DayOfWeek, FirstWeekOfYear } from "@fluentui/react";
import { ICalendarStrings } from "@fluentui/react";
import { IFormItem } from "../../../../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicDateFieldConfig extends IDynamicPropertyComponentConfig {
	firstDayOfWeek?: DayOfWeek;
	firstWeekOfYear?: FirstWeekOfYear;
	displayFormat?: (date?: Date | undefined) => string;
	localizationStrings?: ICalendarStrings;
	minDate?: (parent: IFormItem) => Date;
	maxDate?: (parent: IFormItem) => Date;
	restrictedDates?: (parent: IFormItem) => Array<Date> | undefined;
}