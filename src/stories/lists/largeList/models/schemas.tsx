import React from "react";
import { IFormItemOptions } from "../../../../formbuilder/interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/interfaces/schema/IFormSchema";
import { ISchemaProvider } from "../../../../formbuilder/interfaces/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { ILargeListFormItem } from "./interfaces";

export const largeListFormItemSchemaProvider: ISchemaProvider<ILargeListFormItem> = {
    key: "largeListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<ILargeListFormItem>> => {
        return {
            options: {
                properties: {
                    id: propertyOptionsFactory.stringPropertyOption({ displayName: "This id", description: "This is an explanation of what this property does.." }),
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age"}),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    start: propertyOptionsFactory.datePropertyOption({ displayName: "Start", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "" }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } })
                } 
            } as IFormItemOptions<ILargeListFormItem>
        } as IFormSchema<ILargeListFormItem>;
    }
}
