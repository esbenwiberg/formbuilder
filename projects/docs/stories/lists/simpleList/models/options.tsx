import { IFormBuilderProps } from "@wiberg/formbuilder";
import { ISimpleListFormItem } from "./interfaces";
import { simpleListFormItemSchemaProvider } from "./schemas";

export const simpleListFormOptions: IFormBuilderProps<ISimpleListFormItem> = {
    schemaConfig: { schemaProvider: simpleListFormItemSchemaProvider },
    item: [
        { id: "1", name: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as ISimpleListFormItem,
        { id: "2", name: 'Other', age: 12, awesome: false, custom: "Come on!"  } as ISimpleListFormItem
    ],
    listProps: {
        config: { 
            itemIdentifier: item => item.id
        }
    }
}
