import { IFormItemOptions, IFormSchema, ISchemaProvider, propertyOptionsFactory } from "@wiberg/formbuilder";
import React from "react";
import { IMyFormItem } from "./interfaces";

export const myFormItemSchemaProvider: ISchemaProvider<IMyFormItem> = {
    key: "myformitemschemaprovider",
    getSchema: async () : Promise<IFormSchema<IMyFormItem>> => {
        return {
            options: {
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age" }),
                    // test: { displayName: "test", propertyType: customPropertyTypes.horse } as Partial<IFormItemPropertyOptions<IMyFormItem, IDynamicTextFieldConfig<IMyFormItem>> //TODO: move to antoher example (keeping it here for remembering) :)
                }
            } as IFormItemOptions<IMyFormItem>
        } as IFormSchema<IMyFormItem>;
    }
}
