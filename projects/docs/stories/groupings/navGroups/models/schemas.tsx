import { ISchemaProvider, IFormSchema, propertyGroupOptionsFactory, propertyOptionsFactory, IFormItemOptions } from "@wiberg/formbuilder";
import React from "react";
import { IMyNavGroupedFormItem } from "./interfaces";

export const myNavGroupedFormItemSchemaProvider: ISchemaProvider<IMyNavGroupedFormItem> = {
    key: "myNavGroupedFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IMyNavGroupedFormItem>> => {
        return {
            options: {
                groups: {
                    groupOne: propertyGroupOptionsFactory.groupOptions({ displayName: "Basic" }),
                    groupTwo: propertyGroupOptionsFactory.groupOptions({ displayName: "Misc", groupProps: { collapsed: true } }),
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    awesomeDesc: propertyOptionsFactory.stringPropertyOption({ displayName: "Why are you awesome?", hide: (item: IMyNavGroupedFormItem) => !item.awesome, group: "groupTwo" }),
                } 
            } as IFormItemOptions<IMyNavGroupedFormItem>
        } as IFormSchema<IMyNavGroupedFormItem>;
    }
}