import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { MyNavGroupedFormItem } from "./MyNavGroupedFormItem";
import { MyNavGroupContainer, myNavGroupRender } from "./MyNavGroupRender";

export const navGroupRenderOptions: IFormBuilderProps<MyNavGroupedFormItem> = {
    itemType: MyNavGroupedFormItem,
    item: { id: "test1", name: 'Esbend', age: 42, awesome: false, test: undefined } as MyNavGroupedFormItem,
    groupContainer: MyNavGroupContainer,
    groupRender: myNavGroupRender
}