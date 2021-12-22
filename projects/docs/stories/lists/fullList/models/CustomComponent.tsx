import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import React from "react";
import { IFormItem, IDynamicPropertyComponentConfig, IPropertyRenderProps, IDynamicComponentConfig } from '@wiberg/formbuilder';
 
interface IProps<T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>> extends IPropertyRenderProps<T, C, string | number | undefined> { 
	config?: IDynamicComponentConfig<T>;
}

const CustomComponent = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(props: PropsWithChildren<IProps<T, C>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    return  <div key="jkasldfjsa" style={{border: "solid 0.5px blue", padding: "20px 20px 20px 50px"}}>
				<p>{value}</p>
				<hr/>
				<p>{props.config?.test}</p>
			</div>
}

export default CustomComponent;