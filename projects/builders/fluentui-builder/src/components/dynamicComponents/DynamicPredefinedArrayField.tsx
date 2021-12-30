import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react';
import React from "react";
import { IFormItem, IPropertyRenderProps, lang, IDynamicPredefinedArrayItem, IDynamicPredefinedArrayFieldConfig } from '@wiberg/formbuilder';
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicPredefinedArrayFieldConfig<T>, string | number | Array<string> | Array<number> | undefined> { 
    config?: IDynamicPredefinedArrayFieldConfig<T>;
}

export const DynamicPredefinedArrayField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined | Array<string> | Array<number>>(props.value);
	useEffect(() => setValue(props.value), [props.value])

	const [options, setOptions] = useState<Array<IDynamicPredefinedArrayItem>>();

	useEffect(() => {
		// async fetch of values
		let asyncGetter = props.config?.predefinedOptions?.optionsAsync as (item: T) => Promise<Array<IDynamicPredefinedArrayItem>>;
		if (asyncGetter != null) {
			setOptions([{key: -1, text: lang.texts.areas.common.loading}])
			let fetch = async () => {
				try {
					const options = await asyncGetter(props.parent);
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

	const onChange = (option: IDropdownOption | undefined): void => {
		if (option === undefined) return;

		let newValue = undefined;

		if (props.config?.multiSelect) {
			let parsed = value as Array<any> ?? [];
			let clone = [...parsed];

			if (option.selected) 
				clone.push(option.key);
			else {
				const currIndex = clone.indexOf(option.key);
				if (currIndex > -1) {
					clone.splice(currIndex, 1);
				}
			}
			newValue = clone;
		}
		else newValue = option.key;
		
		props.onChange(newValue);
	};

    return <Dropdown
				disabled={ props.disabled }
				multiSelect={props.config?.multiSelect ?? false}
				options={ options ?? [] }
				selectedKey={ props.config?.multiSelect ? undefined : value}
				selectedKeys={ props.config?.multiSelect ? value as Array<any> : undefined }
				onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => onChange(option) }
				errorMessage={props.errorMessage}
			/>
}
