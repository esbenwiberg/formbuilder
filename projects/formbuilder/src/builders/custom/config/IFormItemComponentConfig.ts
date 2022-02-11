import { ISchemaConfig } from "../../../components/FormBuilder";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormGrouping } from "../../../interfaces/IFormGrouping";
import { RequireOnlyOne } from "../../../interfaces/types/Partials";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";
import { ISchemaProvider } from "../../../interfaces/schema/ISchemaProvider";

export interface IFormItemComponentConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	schemaConfig: RequireOnlyOne<IFormItemComponentSchemaConfig<T>, "registeredSchemaKey" | "schemaProvider" | "dynamicSchema">;
	groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
	groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
	[key: string]: any | undefined;
}

export interface IFormItemComponentSchemaConfig<T extends IFormItem> extends ISchemaConfig<T> {
    registeredSchemaKey?: string;
    schemaProvider?: ISchemaProvider<T>;
	dynamicSchema?: (item: T) => RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
}