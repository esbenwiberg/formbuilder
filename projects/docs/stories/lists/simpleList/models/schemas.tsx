import { IFormItemOptions, IFormSchema, ISchemaProvider, propertyOptionsFactory } from "@wiberg/formbuilder";
import React from "react";
import { ISimpleListFormItem } from "./interfaces";

export const simpleListFormItemSchemaProvider: ISchemaProvider<ISimpleListFormItem> = {
    key: "simpleListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<ISimpleListFormItem>> => {
        return {
            options: {
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age"}),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    start: propertyOptionsFactory.datePropertyOption({ displayName: "Start", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "", minDate: (item: ISimpleListFormItem) => new Date() }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } })
                } 
            } as IFormItemOptions<ISimpleListFormItem>
        } as IFormSchema<ISimpleListFormItem>;
    }
}
