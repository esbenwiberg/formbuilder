import { ISchemaConfig } from "../../../components/FormBuilder";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormGrouping } from "../../../interfaces/IFormGrouping";
import { RequireOnlyOne } from "../../../interfaces/types/Partials";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export interface IFormItemComponentConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	schemaConfig: RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
	groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
	groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
	[key: string]: any | undefined;
}