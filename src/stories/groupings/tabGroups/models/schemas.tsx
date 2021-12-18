import React from "react";
import { IFormItemOptions } from "../../../../formbuilder/interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/interfaces/schema/IFormSchema";
import { ISchemaProvider } from "../../../../formbuilder/interfaces/schema/ISchemaProvider";
import { ValidationEventType } from "../../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../../formbuilder/models/validation/ValidationMark";
import { propertyGroupOptionsFactory } from "../../../../formbuilder/utils/PropertyGroupOptionsFactory";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { IMyTabGroupedFormItem } from "./interfaces";

export const myTabGroupedFormItemSchemaProvider: ISchemaProvider<IMyTabGroupedFormItem> = {
    key: "myTabGroupedFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IMyTabGroupedFormItem>> => {
        return {
            options: {
                groups: {
                    groupOne: propertyGroupOptionsFactory.groupOptions({ displayName: "Group 1", groupProps: { collapsed: false } }),
                    groupTwo: propertyGroupOptionsFactory.groupOptions({ displayName: "Group 2", groupProps: { collapsed: true } })
                },
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: IMyTabGroupedFormItem) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: IMyTabGroupedFormItem) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        awesome: { id: "awesomeoverthirty", validationRule: (item: IMyTabGroupedFormItem) => !item.awesome || ((item.age ?? 0) > 30), validationMessage: "Only people over 30, can be awesome", validateOn: ValidationEventType.Change | ValidationEventType.Manual }
                    }
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    awesomeDesc: propertyOptionsFactory.stringPropertyOption({ displayName: "Why are you awesome?", hide: (item: IMyTabGroupedFormItem) => !item.awesome, group: "groupTwo" }),
                } 
            } as IFormItemOptions<IMyTabGroupedFormItem>
        } as IFormSchema<IMyTabGroupedFormItem>;
    }
}
