import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { Checkbox, Toggle } from '@fluentui/react';
import { IPropertyRenderProps } from '../../../../interfaces/IPropertyRenderProps';
import { IFormItem } from '../../../../modules/IFormItem';
import { IDynamicPropertyComponentConfig } from '../../../interfaces/IDynamicPropertyComponentConfig';
import { fluentUiValidationMessageElement } from '../fluentUiValidationMessageElement';
import { IDynamicBooleanConfig } from './config/IDynamicBooleanConfig';
import React from "react";
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicPropertyComponentConfig, boolean | undefined> { 
	hideLabel?: boolean;
	config?: IDynamicBooleanConfig;
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


// const preventUpdate = (prev: any, next: any) => {
//     return prev.value === next.value
//       && prev.errorMessage === next.errorMessage;
// }
// export const DynamicBooleanField = memo(DynamicBooleanFieldComp, preventUpdate) as typeof DynamicBooleanFieldComp;