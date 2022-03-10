import { IFormItem } from "../../interfaces/form/IFormItem";
import { IFormGrouping } from "../../interfaces/IFormGrouping";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { RequireOnlyOne } from "../../interfaces/types/Partials";
import { ValidationOverride } from "../../models/validation/ValidationOverride";
import { IFormBuilderListProps, ISchemaConfig } from "../FormBuilder";

export interface IFormListProps<T extends IFormItem> {
    schemaConfig: RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
    items: Array<T>;
    schema: IFormSchema<T>;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    listProps: IFormBuilderListProps<T>;
    keyPrefix?: string;
    readOnly?: boolean;
}