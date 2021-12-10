import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { TextField } from '@fluentui/react';
import { IPropertyRenderProps } from '../../../../interfaces/IPropertyRenderProps';
import { IFormItem } from '../../../../modules/IFormItem';
import { IDynamicTextFieldConfig } from './config/IDynamicTextfieldConfig';
import React from "react";
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicTextFieldConfig, string | number | undefined> { 
    config?: IDynamicTextFieldConfig;
}

const OnKeyDown = (e: any, type: string | undefined, allowNegativeNumbers?: boolean) => {
	// disable 'e' in number fields
	if (type === "number" && e.keyCode === 69) e.preventDefault();
	// disable '-' and '+' in number fields
	if (type === "number" && (e.keyCode === 187 || (!allowNegativeNumbers && e.keyCode === 189))) e.preventDefault();
}

export const DynamicTextfield = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    const onChange = (ev: any, value: string | number | undefined) => {
		setValue(value);
        props.onChange((props.config?.type === "number" ? Number(value) : value) as string | number)
    }

    return  <TextField 
				// key={ props.key }
				defaultValue={ (value ?? "") as string }
				onKeyDown={ (event: any) => OnKeyDown(event, props.config?.type, props.config?.allowNegativeNumbers) }
				onChange={ onChange }
				disabled={ props.disabled }
				type={ props.config?.type || "text" }
				multiline={props.config?.multiline}
				resizable={props.config?.resizable}
				onBlur={() => props.onBlur(props.value)}
				errorMessage={props.errorMessage}
			/>
}

// TODO: why do this fuck up? form item seems to reset sporadically, when memo is used (ewi)
// because of callback functions cahnged on re-render (ewi)
// try to use usecallback?


// const preventUpdate = (prev: any, next: any) => {
//     return prev.value === next.value
//       && prev.errorMessage === next.errorMessage;
// }
// export const DynamicTextfield = memo(DynamicTextfieldComp, preventUpdate) as typeof DynamicTextfieldComp;