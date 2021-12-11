import React from "react";
import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { PropertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { MyFormItem } from "./MyFormItem";

export class MyFormItemChildSchemaProvider extends SchemaProvider<MyFormItem> {

    public key = "MyFormItem";
    public itemType = () => MyFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        return {
            options: {
                properties: {
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    age: PropertyOptionsFactory.numberPropertyOption({ displayName: "This age" }),
                } 
            } as IFormItemOptions<MyFormItem>
        } as IFormSchema<IFormItem>;
    }
}