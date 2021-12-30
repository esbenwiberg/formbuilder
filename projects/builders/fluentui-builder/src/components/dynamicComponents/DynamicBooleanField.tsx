import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Checkbox, Toggle } from '@fluentui/react';
import { fluentUiValidationMessageElement } from '../fluentUiValidationMessageElement';
import React from "react";
import { IFormItem, IPropertyRenderProps, IDynamicPropertyComponentConfig, IDynamicBooleanConfig } from '@wiberg/formbuilder';
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicPropertyComponentConfig<T>, boolean | undefined> { 
	hideLabel?: boolean;
	config?: IDynamicBooleanConfig<T>;
}

export const DynamicBooleanField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<boolean | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    const onChange = (ev: any, value: boolean | undefined) => {
		setValue(value);
        props.onChange(value);
    }

    return (
		<>
			{
				props.config?.asToggle
					? 	<Toggle 
							// key={ props.key }
							onText={ props.config?.textIfTrue ?? "On" }
							offText={ props.config?.textIfFalse ?? "Off" }
							onChange={onChange} 
							defaultChecked={ value }
							disabled={ props.disabled }
						/>
					: 	<Checkbox 
							// key={ props.key }
							label={!!value ? props.config?.textIfTrue : props.config?.textIfFalse }
							onChange={onChange} 
							defaultChecked={ value }
							disabled={ props.disabled }
						/>
			}
			{
				props.errorMessage &&
					fluentUiValidationMessageElement(props.errorMessage)	
			}
		</>
	)
}
