import { IFormBuilderProps } from "@wiberg/formbuilder";
import { IMyFormItem } from "./interfaces";
import { myFormItemSchemaProvider } from "./schemas";

export const simpleFormItemOptions: IFormBuilderProps<IMyFormItem> = {
    item: { id: "id1", name: 'Esben', age: 38 } as IMyFormItem,
    schemaConfig: {
        schemaProvider: myFormItemSchemaProvider
    }
}
