import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { PropertyOptionsFactory } from "../../formbuilder/utils/PropertyOptionsFactory";
import { MyDynamicFormItem } from "./MyDynamicFormItem";

export class MyDynamicSchemaProvider extends SchemaProvider<MyDynamicFormItem> {

    public key = "MyDynamicFormItem";
    public itemType = () => MyDynamicFormItem

    public getSchema = async (dynamicKey?: string) : Promise<IFormSchema<IFormItem>> => {

        const schema1: IFormSchema<MyDynamicFormItem> = {
            options: {
                properties: { // TODO: group as reference, for easier renaming of groups (ewi)
                    id: PropertyOptionsFactory.stringPropertyOption({ displayName: "This id", disable: () => true, description: "This is an explanation of what this property does.." }),
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    key: PropertyOptionsFactory.stringPropertyOption({ displayName: "This key", disable: () => false, description: "This is an explanation of what this property does..", onChanged: (item: MyDynamicFormItem) => { return { refreshDynamicSchema: item.key == "render2" }} })
                } 
            } as IFormItemOptions<MyDynamicFormItem>
        }

        const schema2: IFormSchema<MyDynamicFormItem> = {
            options: {
                properties: { // TODO: group as reference, for easier renaming of groups (ewi)
                    // id: PropertyOptionsFactory.stringPropertyOption({ displayName: "This id 2", disable: () => true, description: "This is an explanation of what this property does.." }),
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name 2", description: "This is an explanation of what this property does.." }),
                    key: PropertyOptionsFactory.stringPropertyOption({ displayName: "This key 2", disable: () => false, description: "This is an explanation of what this property does..", onChanged: (item: MyDynamicFormItem) => { return { refreshDynamicSchema: item.key == "render1" }} })
                } 
            } as IFormItemOptions<MyDynamicFormItem>
        }

        // defaults to the first schema
        if (dynamicKey == undefined) return schema1;

        return new Promise<IFormSchema<IFormItem>>((resolve, reject) => {

            // fake api call
            setTimeout(() => {
                console.log("dynamicKey", dynamicKey);
                
                if (dynamicKey == "render1") {
                    resolve(schema1);
                }
                else if (dynamicKey == "render2") {
                    resolve(schema2);
                }
                else if (dynamicKey == undefined) {
                    resolve(schema1);
                }
                else {
                    reject();
                }
            }, 500);
        });
    }
}