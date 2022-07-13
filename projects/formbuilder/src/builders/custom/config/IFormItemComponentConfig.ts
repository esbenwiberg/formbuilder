import React from "react";
import { ISchemaConfig } from "../../../components/FormBuilder";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormGrouping } from "../../../interfaces/IFormGrouping";
import { RequireOnlyOne } from "../../../interfaces/types/Partials";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";
import { SchemaProvider } from "../../../interfaces/schema/ISchemaProvider";
import { IFormSchema2 } from "../../../_new/IFormSchema2";
import { IFormSchema } from "../../../interfaces/schema/IFormSchema";

export interface IFormItemComponentConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	schemaConfig: RequireOnlyOne<IFormItemComponentSchemaConfig<T>, "schema" | "schemaProvider" | "dynamicSchema">;
	groupContainer?: React.FC<{groupings: Array<IFormGrouping>}>;
	groupRender?: React.FC<{grouping: IFormGrouping}>;
	[key: string]: any | undefined;
}

export interface IFormItemComponentSchemaConfig<T extends IFormItem> extends ISchemaConfig<T> {
	schema?: IFormSchema<T>;
    schemaProvider?: SchemaProvider<T>;
	dynamicSchema?: (item: T) => RequireOnlyOne<ISchemaConfig<T>, "schema" | "schemaProvider">;
}