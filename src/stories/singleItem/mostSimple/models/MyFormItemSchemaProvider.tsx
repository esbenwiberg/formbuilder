import React from "react";
import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { MyFormItem } from "./MyFormItem";

export class MyFormItemChildSchemaProvider extends SchemaProvider<MyFormItem> {

    public key = "MyFormItem";
    public itemType = () => MyFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        return {
            options: {
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age" }),
                } 
            } as IFormItemOptions<MyFormItem>
        } as IFormSchema<IFormItem>;
    }
}