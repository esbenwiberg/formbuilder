import { IFormItem } from "../../modules/IFormItem";
import { IFormSchema } from "./IFormSchema";

export interface ISchemaProvider {
    key: string;
    itemType: () => IFormItem;
}

export abstract class SchemaProvider<T extends IFormItem> {
    abstract key: string;
    abstract itemType: () => IFormItem;
    abstract getSchema: (dynamicKey?: string) => Promise<IFormSchema<T> | undefined>;
}