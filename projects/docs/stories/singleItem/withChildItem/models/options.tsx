import { FormListColumnsPickType, IFormBuilderProps } from "@wiberg/formbuilder";
import { IAnotherFormItem, IMyFormItemChild } from "./interfaces";
import { myFormItemChildSchemaProvider } from "./schemas";

export const itemWithChildFormItemOptions: IFormBuilderProps<IMyFormItemChild> = {
    schemaConfig: { schemaProvider: myFormItemChildSchemaProvider },
    item: { id: "test1", name: 'Esbend', age: 42, child: { id: "1.1", name: "Esben", awesome: true } as IAnotherFormItem } as IMyFormItemChild,
}
