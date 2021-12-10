import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react';
import { IPropertyRenderProps } from '../../../../interfaces/IPropertyRenderProps';
import { IFormItem } from '../../../../modules/IFormItem';
import { IDynamicPredefinedArrayItem, IDynamicPredefinedArrayFieldConfig } from './config/IDynamicPredefinedArrayFieldConfig';
import { lang } from '../../../../models/language/Language';
import React from "react";
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicPredefinedArrayFieldConfig, string | number | undefined> { 
    config?: IDynamicPredefinedArrayFieldConfig;
}

export const DynamicPredefinedArrayField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

	const [options, setOptions] = useState<Array<IDynamicPredefinedArrayItem>>();

	useEffect(() => {
		// async fetch of values
		let asyncGetter = props.config?.predefinedOptions?.optionsAsync as () => Promise<Array<IDynamicPredefinedArrayItem>>;
		if (asyncGetter != null) {
			setOptions([{key: -1, text: lang.texts.areas.common.loading}])
			let fetch = async () => {
				try {
					const options = await asyncGetter();
					setOptions(options);
				}
				catch (error) {
					setOptions([{key: -1, text: lang.texts.areas.form.dropdownFailedFetch}]);
					console.error(error);
				}
			};
			fetch();
		}
		// use static values
		else
			setOptions(props.config?.predefinedOptions?.options);
	}, [props.config?.predefinedOptions])

    return <Dropdown
				disabled={ props.disabled }
				// multiSelect={props.config?.multiSelect ?? false}
				options={ options ?? [] }
				selectedKey={value}
				// selectedKeys={ props.config?.multiSelect ? props.Value as Array<any> || [] : undefined }
				onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => props.onChange(option?.key) }
				errorMessage={props.errorMessage}
			/>
}
