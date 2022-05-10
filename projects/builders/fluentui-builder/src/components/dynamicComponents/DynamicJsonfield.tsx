import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { TextField } from '@fluentui/react';
import React from "react";
import { IFormItem, IPropertyRenderProps, json, IDynamicJsonFieldConfig } from '@wiberg/formbuilder';

interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicJsonFieldConfig<T>, string | undefined> { 
    config?: IDynamicJsonFieldConfig<T>;
}

export const DynamicJsonfield = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<string | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    const onChange = (ev: any, value: string | undefined) => {
		let jsonObj = json.tryParse<any>(value);
		let jsonStringValue = jsonObj ? json.tryStringify(jsonObj) : undefined;
		setValue(jsonStringValue);
        props.onChange(jsonStringValue);
    }

    return  <TextField 
				defaultValue={ value }
				onChange={ onChange }
				disabled={ props.disabled }
				multiline={true}
				resizable={props.config?.resizable}
				onBlur={() => props.onBlur(props.value)}
				errorMessage={props.errorMessage ? `${props.errorMessage} and string must be of correct JSON format` : undefined }
			/>
}
