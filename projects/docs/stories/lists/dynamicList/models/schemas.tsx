import { ISchemaProvider, IFormSchema, propertyOptionsFactory, IFormItemOptions } from "@wiberg/formbuilder";
import React from "react";
import { IDynamicListFormItem, IPluginFormItem } from "./interfaces";
import { PluginSchemaFetch } from "./PluginSchemaFetch";
import { PluginSchemaParser } from "./PluginSchemaParser";

export const pluginFormItemSchemaProvider: ISchemaProvider<IPluginFormItem> = {
    key: "pluginFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IPluginFormItem>> => {
        return {
            options: {
                properties: {
                    id: propertyOptionsFactory.stringPropertyOption({ displayName: "This id" }),
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name" }),
                    description: propertyOptionsFactory.stringPropertyOption({ displayName: "This description" }),
                } 
            } as IFormItemOptions<IPluginFormItem>
        } as IFormSchema<IPluginFormItem>;
    }
}


export const dynamicFormItemSchemaProvider: ISchemaProvider<IDynamicListFormItem> = {
    key: "dynamicFormItemSchemaProvider",
    getSchema: async (dynamicKey?: string) : Promise<IFormSchema<IDynamicListFormItem>> => {
        const jsonSchema = await PluginSchemaFetch(dynamicKey);
        const schema = PluginSchemaParser(jsonSchema);
        return schema;
    }
}