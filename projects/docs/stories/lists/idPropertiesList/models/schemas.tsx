import { ISchemaProvider, IFormSchema, propertyOptionsFactory, IFormItemOptions } from "@wiberg/formbuilder";
import React from "react";
import { IMyIdValueListFormItem } from "./interfaces";

export const idValueListFormItemSchemaProvider: ISchemaProvider<IMyIdValueListFormItem> = {
    key: "idValueListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IMyIdValueListFormItem>> => {
        return {
            options: {
                properties: {
                    name: propertyOptionsFactory.string({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    userId: propertyOptionsFactory.string({ displayName: "This user", listItemOptions: { customValueRender: (item: IMyIdValueListFormItem) => item.userIdAsString } }),
                    typeId: propertyOptionsFactory.string({ displayName: "This type", listItemOptions: { customValueRender: (item: IMyIdValueListFormItem) => item.typeAsString } })
                } 
            } as IFormItemOptions<IMyIdValueListFormItem>
        } as IFormSchema<IMyIdValueListFormItem>;
    }
}
