import { IFormBuilderProps } from "@wiberg/formbuilder";
import { MyTabGroupContainer, MyTabGroupRender } from "./grouping";
import { IMyTabGroupedFormItem } from "./interfaces";
import { myTabGroupedFormItemSchemaProvider } from "./schemas";


export const tabGroupRenderOptions: IFormBuilderProps<IMyTabGroupedFormItem> = {
    schemaConfig: { schemaProvider: myTabGroupedFormItemSchemaProvider },
    item: { id: "test1", name: 'Esbend', age: 42, awesome: false, test: "hey yo" } as IMyTabGroupedFormItem,
    groupContainer: MyTabGroupContainer,
    groupRender: MyTabGroupRender
}
