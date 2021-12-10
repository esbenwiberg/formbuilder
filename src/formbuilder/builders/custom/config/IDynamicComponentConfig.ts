import { PropsWithChildren, ReactElement } from "react";
import { IPropertyRenderProps } from "../../../interfaces/IPropertyRenderProps";
import { IFormItem } from "../../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IDynamicComponentConfig extends IDynamicPropertyComponentConfig {
	// componentName: string | undefined;
	component: <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(props: PropsWithChildren<IPropertyRenderProps<T, C, any | undefined>>) => ReactElement | null;
	[key: string]: any | undefined;
}