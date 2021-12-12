import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { PropertyGroupOptionsFactory } from "../../../../formbuilder/utils/PropertyGroupOptionsFactory";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { MyNavGroupedFormItem } from "./MyNavGroupedFormItem";

export class MyNavGroupedFormItemSchemaProvider extends SchemaProvider<MyNavGroupedFormItem> {

    public key = "MyNavGroupedFormItem";
    public itemType = () => MyNavGroupedFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyNavGroupedFormItem> = {
            options: {
                groups: {
                    groupOne: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Basic" }),
                    groupTwo: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Misc", groupProps: { collapsed: true } }),
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    awesomeDesc: propertyOptionsFactory.stringPropertyOption({ displayName: "Why are you awesome?", hide: (item: MyNavGroupedFormItem) => !item.awesome, group: "groupTwo" }),
                } 
            } as IFormItemOptions<MyNavGroupedFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}