import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { LargeListFormItem } from "./LargeListFormItem";
import React from "react";

export class LargeListFormItemSchemaProvider extends SchemaProvider<LargeListFormItem> {

    public key = "LargeListFormItem";
    public itemType = () => LargeListFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        return {
            options: {
                properties: {
                    id: propertyOptionsFactory.stringPropertyOption({ displayName: "This id", description: "This is an explanation of what this property does.." }),
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age"}),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    start: propertyOptionsFactory.datePropertyOption({ displayName: "Start", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "", minDate: (item: LargeListFormItem) => new Date() }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } })
                } 
            } as IFormItemOptions<LargeListFormItem>
        }
    }
}