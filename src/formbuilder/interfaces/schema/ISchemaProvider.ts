import { IFormItem } from "../form/IFormItem";
import { IFormSchema } from "./IFormSchema";

export interface ISchemaProvider<T extends IFormItem> {
    key: string;
    getSchema: (dynamicKey?: string) => Promise<IFormSchema<T> | undefined>;
}
