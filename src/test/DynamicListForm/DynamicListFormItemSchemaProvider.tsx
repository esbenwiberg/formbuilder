import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { PluginSchemaFetch } from "./PluginSchemaFetch";
import { PluginSchemaParser } from "./PluginSchemaParser";
import { DynamicListFormItem } from "./DynamicListFormItem";

export class DynamicListFormItemSchemaProvider extends SchemaProvider<DynamicListFormItem> {

    public override key = "DynamicListFormItem";
    public override itemType = () => DynamicListFormItem

    public getSchema = async (dynamicKey?: string) : Promise<IFormSchema<DynamicListFormItem> | undefined> => {

        var jsonSchema = await PluginSchemaFetch(dynamicKey);
        var schema = PluginSchemaParser(jsonSchema);
        return schema;
    }
}