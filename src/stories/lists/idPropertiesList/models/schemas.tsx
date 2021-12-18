import React from "react";
import { IFormItemOptions } from "../../../../formbuilder/interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/interfaces/schema/IFormSchema";
import { ISchemaProvider } from "../../../../formbuilder/interfaces/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { IMyIdValueListFormItem } from "./interfaces";

export const idValueListFormItemSchemaProvider: ISchemaProvider<IMyIdValueListFormItem> = {
    key: "idValueListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IMyIdValueListFormItem>> => {
        return {
            options: {
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    userId: propertyOptionsFactory.stringPropertyOption({ displayName: "This user", listItemOptions: { customValueRender: (item: IMyIdValueListFormItem) => item.userAsString } }),
                    typeId: propertyOptionsFactory.stringPropertyOption({ displayName: "This type", listItemOptions: { customValueRender: (item: IMyIdValueListFormItem) => item.typeAsString } })
                } 
            } as IFormItemOptions<IMyIdValueListFormItem>
        } as IFormSchema<IMyIdValueListFormItem>;
    }
}
