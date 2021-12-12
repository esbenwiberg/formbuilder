import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { PluginFormItem } from "./PluginFormItem";

export class PluginSchemaProvider extends SchemaProvider<PluginFormItem> {

    public key = "PluginFormItem";
    public itemType = () => PluginFormItem

    public getSchema = async () : Promise<IFormSchema<PluginFormItem>> => {
        const schema: IFormSchema<PluginFormItem> = {
            options: {
                properties: {
                    id: propertyOptionsFactory.stringPropertyOption({ displayName: "This id" }),
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    description: propertyOptionsFactory.stringPropertyOption({ displayName: "This description" }),
                } 
            } as IFormItemOptions<PluginFormItem>
        }

        return schema as IFormSchema<PluginFormItem>;
    }
}