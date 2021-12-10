import { IFormGrouping } from "../../../interfaces/IFormGrouping";
import { IFormItem } from "../../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IFormItemComponentConfig extends IDynamicPropertyComponentConfig {
	itemType: new () => IFormItem;
	groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
	groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
	[key: string]: any | undefined;
}