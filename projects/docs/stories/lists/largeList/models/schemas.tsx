import { IFormItemOptions, IFormSchema, ISchemaProvider, propertyOptionsFactory } from "@wiberg/formbuilder";
import React from "react";
import { ILargeListFormItem } from "./interfaces";

export const largeListFormItemSchemaProvider: ISchemaProvider<ILargeListFormItem> = {
    key: "largeListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<ILargeListFormItem>> => {
        return {
            options: {
                properties: {
                    id: propertyOptionsFactory.string({ displayName: "This id", description: "This is an explanation of what this property does.." }),
                    name: propertyOptionsFactory.string({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.number({ displayName: "This age"}),
                    awesome: propertyOptionsFactory.boolean({ displayName: "Are you awesome?", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    start: propertyOptionsFactory.date({ displayName: "Start", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "" }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } })
                } 
            } as IFormItemOptions<ILargeListFormItem>
        } as IFormSchema<ILargeListFormItem>;
    }
}
