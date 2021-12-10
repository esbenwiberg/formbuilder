import { IFormItemOptions } from "../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { PropertyOptionsFactory } from "../../formbuilder/utils/PropertyOptionsFactory";
import { PluginFormItem } from "./PluginFormItem";

export class PluginSchemaProvider extends SchemaProvider<PluginFormItem> {

    public override key = "PluginFormItem";
    public override itemType = () => PluginFormItem

    public getSchema = async () : Promise<IFormSchema<PluginFormItem>> => {
        var schema: IFormSchema<PluginFormItem> = {
            options: {
                properties: { // TODO: group as reference, for easier renaming of groups (ewi)
                    id: PropertyOptionsFactory.stringPropertyOption({ displayName: "This id" }),
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    description: PropertyOptionsFactory.stringPropertyOption({ displayName: "This description" }),
                } 
            } as IFormItemOptions<PluginFormItem>
        }

        return schema as IFormSchema<PluginFormItem>;
    }
}