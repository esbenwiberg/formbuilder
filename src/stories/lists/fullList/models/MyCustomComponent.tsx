import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import React from "react";
import { IDynamicComponentConfig } from '../../../../formbuilder/builders/custom/config/IDynamicComponentConfig';
import { IDynamicPropertyComponentConfig } from '../../../../formbuilder/builders/interfaces/IDynamicPropertyComponentConfig';
import { IPropertyRenderProps } from '../../../../formbuilder/interfaces/IPropertyRenderProps';
import { IFormItem } from '../../../../formbuilder/modules/IFormItem';
 
interface IProps<T extends IFormItem, C extends IDynamicPropertyComponentConfig> extends IPropertyRenderProps<T, C, string | number | undefined> { 
	config?: IDynamicComponentConfig;
}

const MyCustomComponent = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(props: PropsWithChildren<IProps<T, C>>) : ReactElement | null => {

	const [value, setValue] = useState<string | number | undefined>(props.value);
	useEffect(() => setValue(props.value), [props.value])

    return  <div key="jkasldfjsa" style={{border: "solid 0.5px blue", padding: "20px 20px 20px 50px"}}>
				<p>{value}</p>
				<hr/>
				<p>{props.config?.test}</p>
			</div>
}

export default MyCustomComponent;