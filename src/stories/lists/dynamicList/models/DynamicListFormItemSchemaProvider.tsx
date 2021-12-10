import { PluginSchemaFetch } from "./PluginSchemaFetch";
import { PluginSchemaParser } from "./PluginSchemaParser";
import { DynamicListFormItem } from "./DynamicListFormItem";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";

export class DynamicListFormItemSchemaProvider extends SchemaProvider<DynamicListFormItem> {

    public key = "DynamicListFormItem";
    public itemType = () => DynamicListFormItem

    public getSchema = async (dynamicKey?: string) : Promise<IFormSchema<DynamicListFormItem> | undefined> => {

        const jsonSchema = await PluginSchemaFetch(dynamicKey);
        const schema = PluginSchemaParser(jsonSchema);
        return schema;
    }
}