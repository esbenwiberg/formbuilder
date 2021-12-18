import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";
import { MyNavGroupContainer, myNavGroupRender } from "./grouping";
import { IMyNavGroupedFormItem } from "./interfaces";
import { myNavGroupedFormItemSchemaProvider } from "./schemas";


export const navGroupRenderOptions: IFormBuilderProps<IMyNavGroupedFormItem> = {
    schemaConfig: { schemaProvider: myNavGroupedFormItemSchemaProvider } ,
    item: { id: "test1", name: 'Esbend', age: 42, awesome: false, test: "hey yo" } as IMyNavGroupedFormItem,
    groupContainer: MyNavGroupContainer,
    groupRender: myNavGroupRender
}