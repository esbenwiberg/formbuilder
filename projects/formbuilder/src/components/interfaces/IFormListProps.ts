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
    groupContainer?: React.FC<{groupings: Array<IFormGrouping>}>;
    groupRender?: React.FC<{grouping: IFormGrouping}>;
    validationOverride?: ValidationOverride;
    listProps: IFormBuilderListProps<T>;
    keyPrefix?: string;
    readOnly?: boolean;
}