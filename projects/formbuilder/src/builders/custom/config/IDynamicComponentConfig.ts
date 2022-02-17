import { PropsWithChildren, ReactElement } from "react";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IPropertyRenderProps } from "../../../interfaces/IPropertyRenderProps";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicComponentConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	// componentName: string | undefined;
	component: <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(props: PropsWithChildren<IPropertyRenderProps<T, C, any | undefined>>) => ReactElement | null;
	componentProps?: { [key: string]: any | undefined };
	[key: string]: any | undefined;
}