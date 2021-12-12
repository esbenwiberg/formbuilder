import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { ValidationEventType } from "../../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../../formbuilder/models/validation/ValidationMark";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MyTabGroupedFormItem } from "./MyGroupedFormItem";
import { PropertyGroupOptionsFactory } from "../../../../formbuilder/utils/PropertyGroupOptionsFactory";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";

export class MyTabGroupedFormItemSchemaProvider extends SchemaProvider<MyTabGroupedFormItem> {

    public key = "MyTabGroupedFormItem";
    public itemType = () => MyTabGroupedFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyTabGroupedFormItem> = {
            options: {
                groups: {
                    groupOne: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 1", groupProps: { collapsed: false } }),
                    groupTwo: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 2", groupProps: { collapsed: true } })
                },
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: MyTabGroupedFormItem) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: MyTabGroupedFormItem) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        awesome: { id: "awesomeoverthirty", validationRule: (item: MyTabGroupedFormItem) => !item.awesome || ((item.age ?? 0) > 30), validationMessage: "Only people over 30, can be awesome", validateOn: ValidationEventType.Change | ValidationEventType.Manual },
                        test: { id: "longerthanthree", validationRule: (item: MyTabGroupedFormItem) => item.test != null && item.test.length > 3, validationMessage: "value should be longer than '3' characters", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    awesomeDesc: propertyOptionsFactory.stringPropertyOption({ displayName: "Why are you awesome?", hide: (item: MyTabGroupedFormItem) => !item.awesome, group: "groupTwo" }),
                } 
            } as IFormItemOptions<MyTabGroupedFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}