import { IFormItemOptions, IFormItemPropertyOptions, IFormSchema, ISchemaProvider, propertyOptionsFactory } from "@wiberg/formbuilder";
import React from "react";
import { customPropertyTypes } from "./builder/customPropertyType";
import { ISpecialFieldConfig } from "./builder/specialFieldConfig";
import { IMyFormItem } from "./interfaces";

export const myFormItemSchemaProvider: ISchemaProvider<IMyFormItem> = {
    key: "myformitemschemaprovider",
    getSchema: async () : Promise<IFormSchema<IMyFormItem>> => {
        return {
            options: {
                properties: {
                    id: { propertyType: customPropertyTypes.specialText, displayName: "Id", config: { color: "aquamarine" } } as IFormItemPropertyOptions<IMyFormItem, ISpecialFieldConfig<IMyFormItem>>,
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "Name" }),
                    age: { propertyType: customPropertyTypes.specialNumber, displayName: "Age", config: { color: "cornflowerblue" } } as IFormItemPropertyOptions<IMyFormItem, ISpecialFieldConfig<IMyFormItem>>
                }
            } as IFormItemOptions<IMyFormItem>
        }
    }
}
