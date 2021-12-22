import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { DatePicker, ICalendarStrings } from '@fluentui/react';
import { fluentUiValidationMessageElement } from '../fluentUiValidationMessageElement';
import React from "react";
import { IFormItem, IPropertyRenderProps, lang, IDynamicDateFieldConfig, FirstWeekOfYear, DayOfWeek } from '@wiberg/formbuilder';

export type DynamicDateFieldConfigValueType = Date | null | undefined;

interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicDateFieldConfig<T>, DynamicDateFieldConfigValueType> { 
    config?: IDynamicDateFieldConfig<T>;
}

export const DynamicDateField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<DynamicDateFieldConfigValueType>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    const onChange = (value: DynamicDateFieldConfigValueType) => {
		setValue(value);
        props.onChange(value);
    }

    return  <>
                <DatePicker
                    // key={props.key}
                    placeholder={props.disabled ? "" : lang.texts.areas.form.dateDefaultPlaceholder }
                    firstDayOfWeek={ props.config?.firstDayOfWeek ?? DayOfWeek.Monday }
                    showWeekNumbers={true}
                    firstWeekOfYear={ props.config?.firstWeekOfYear ?? FirstWeekOfYear.FirstFourDayWeek }
                    showMonthPickerAsOverlay={true}
                    isRequired={false}
                    allowTextInput={true}
                    formatDate={ props.config?.displayFormat }
                    value={ value != null && (value as any) != "0001-01-01T00:00:00" ? new Date(value) : undefined }
                    onSelectDate={ onChange }
                    disabled={ props.disabled }
                    minDate={props.config?.minDate ? props.config?.minDate(props.parent) : undefined}
                    maxDate={props.config?.maxDate ? props.config?.maxDate(props.parent) : undefined}
                    calendarProps={ { showGoToToday: true, strings: props.config?.localizationStrings as any as ICalendarStrings, restrictedDates: props.config?.restrictedDates ? props.config?.restrictedDates(props.parent) : undefined } }
                    onBlur={() => props.onBlur(props.value)}
                />
                {
                    !!props.errorMessage &&
                        fluentUiValidationMessageElement(props.errorMessage)
			    }
            </>
}

// const preventUpdate = (prev: any, next: any) => {
//     return prev.value === next.value
//       && prev.errorMessage === next.errorMessage;
// }
// export const DynamicDateField = memo(DynamicDateFieldComp, preventUpdate) as typeof DynamicDateFieldComp;