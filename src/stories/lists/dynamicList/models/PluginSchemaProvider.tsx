import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { PropertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { PluginFormItem } from "./PluginFormItem";

export class PluginSchemaProvider extends SchemaProvider<PluginFormItem> {

    public key = "PluginFormItem";
    public itemType = () => PluginFormItem

    public getSchema = async () : Promise<IFormSchema<PluginFormItem>> => {
        const schema: IFormSchema<PluginFormItem> = {
            options: {
                properties: {
                    id: PropertyOptionsFactory.stringPropertyOption({ displayName: "This id" }),
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    description: PropertyOptionsFactory.stringPropertyOption({ displayName: "This description" }),
                } 
            } as IFormItemOptions<PluginFormItem>
        }

        return schema as IFormSchema<PluginFormItem>;
    }
}