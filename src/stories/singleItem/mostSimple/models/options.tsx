import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { IMyFormItem } from "./interfaces";
import { myFormItemSchemaProvider } from "./schemas";

export const simpleFormItemOptions: IFormBuilderProps<IMyFormItem> = {
    item: { id: "test1", name: 'Esbend', age: 42 } as IMyFormItem,
    schemaConfig: {
        schemaProvider: myFormItemSchemaProvider
    }
}
