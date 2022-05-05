import { ISchemaConfig } from "../../components/FormBuilder";
import { IFormItem } from "../form/IFormItem";
import { RequireOnlyOne } from "../types/Partials";

export interface IDynamicSchemaConfig<T> extends IFormItem {
    dynamicKey: (item: T) => string;
    schemaConfig?: RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
    useEmptyItem?: boolean;
}
