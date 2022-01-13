import { IFormItem, IPropertyRenderProps, IDynamicTextFieldConfig } from '@wiberg/formbuilder';
import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ISpecialFieldConfig } from './specialFieldConfig';
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, ISpecialFieldConfig<T>, string | number | undefined> { 
    config?: ISpecialFieldConfig<T>;
}

export const SpecialNumberField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [value, setValue] = useState<number>(props.value as number);
	useEffect(() => setValue(props.value as number), [props.value])

    const onChange = (ev: any) => {
        const asNumber = +ev.target.value;
        setValue(asNumber);
    }

    const update = () => {
        const doubleUp = value * 2;
        setValue(doubleUp);
        props.onChange(doubleUp);
    }

    return (
        <input 
            value={value}
            onChange={onChange}
            onBlur={update}
            style={{ backgroundColor: props.config?.color }}
            type="number"
        >
        </input>
    )
}