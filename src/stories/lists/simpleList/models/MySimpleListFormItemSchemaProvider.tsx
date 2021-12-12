import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { PropertyGroupOptionsFactory } from "../../../../formbuilder/utils/PropertyGroupOptionsFactory";
import { ValidationEventType } from "../../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../../formbuilder/models/validation/ValidationMark";
import { MySimpleListFormItem } from "./MySimpleListFormItem";
import React from "react";

export class MySimpleListFormItemSchemaProvider extends SchemaProvider<MySimpleListFormItem> {

    public key = "MySimplteListFormItem";
    public itemType = () => MySimpleListFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MySimpleListFormItem> = {
            options: {
                groups: {
                    groupOne: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 1" }),
                    groupTwo: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 2", groupProps: { collapsed: true } })
                },
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: MySimpleListFormItem) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: MySimpleListFormItem) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        awesome: { id: "highoverthirty", validationRule: (item: MySimpleListFormItem) => !item.awesome || ((item.age ?? 0) > 30), validationMessage: "Only people over 30, can be awesome", validateOn: ValidationEventType.Change | ValidationEventType.Manual },
                        start: { id: "dateshizzle", validationRule: (item: MySimpleListFormItem) => item.start != null && item.start >= new Date(2021, 9, 1), validateOn: ValidationEventType.Blur | ValidationEventType.Change | ValidationEventType.Manual, validationMessage: "Start should be after '2021-10-1'" }
                    }
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    start: propertyOptionsFactory.datePropertyOption({ displayName: "Start", group: "groupOne", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "", minDate: (item: MySimpleListFormItem) => new Date() }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } })
                } 
            } as IFormItemOptions<MySimpleListFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}