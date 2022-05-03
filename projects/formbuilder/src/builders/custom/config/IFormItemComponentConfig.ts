import { ISchemaConfig } from "../../../components/FormBuilder";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormGrouping } from "../../../interfaces/IFormGrouping";
import { RequireOnlyOne } from "../../../interfaces/types/Partials";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";
import { ISchemaProvider } from "../../../interfaces/schema/ISchemaProvider";
import React from "react";

export interface IFormItemComponentConfig<T extends IFormItem> extends IDynamicPropertyComponentConfig<T> {
	schemaConfig: RequireOnlyOne<IFormItemComponentSchemaConfig<T>, "registeredSchemaKey" | "schemaProvider" | "dynamicSchema">;
	groupContainer?: React.FC<{groupings: Array<IFormGrouping>}>;
	groupRender?: React.FC<{grouping: IFormGrouping}>;
	[key: string]: any | undefined;
}

export interface IFormItemComponentSchemaConfig<T extends IFormItem> extends ISchemaConfig<T> {
    registeredSchemaKey?: string;
    schemaProvider?: ISchemaProvider<T>;
	dynamicSchema?: (item: T) => RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
}