import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { PropertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { MyNavGroupedFormItem } from "./MyNavGroupedFormItem";


export class MyNavGroupedFormItemSchemaProvider extends SchemaProvider<MyNavGroupedFormItem> {

    public key = "MyNavGroupedFormItem";
    public itemType = () => MyNavGroupedFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyNavGroupedFormItem> = {
            options: {
              
                properties: {
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: PropertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo2", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: PropertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    awesomeDesc: PropertyOptionsFactory.stringPropertyOption({ displayName: "Why are you awesome?", hide: (item: MyNavGroupedFormItem) => !item.awesome, group: "groupTwo" }),
                } 
            } as IFormItemOptions<MyNavGroupedFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}