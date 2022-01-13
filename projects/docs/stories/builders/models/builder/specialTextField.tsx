import { IFormItem, IPropertyRenderProps, IDynamicTextFieldConfig } from '@wiberg/formbuilder';
import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ISpecialFieldConfig } from './specialFieldConfig';
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, ISpecialFieldConfig<T>, string | number | undefined> { 
    config?: ISpecialFieldConfig<T>;
}

export const SpecialTextField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    const onChange = (ev: any) => {
		setValue(ev.target.value);
        props.onChange(ev.target.value);
    }

    return (
		<input 
			value={value}
			onChange={onChange}
			style={{ backgroundColor: props.config?.color }}
            type="text"
		>
		</input>
	)
}