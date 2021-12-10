import { IFormBuilderProps } from "../../../formbuilder/components/FormBuilder";
import { MyTabGroupedFormItem } from "./MyGroupedFormItem";
import { MyTabGroupContainer, myTabGroupRender } from "./MyTabGroupRender";

export const tabGroupRenderOptions: IFormBuilderProps<MyTabGroupedFormItem> = {
    itemType: MyTabGroupedFormItem,
    item: { id: "test1", name: 'Esbend', age: 42, awesome: false, test: undefined } as MyTabGroupedFormItem,
    groupContainer: MyTabGroupContainer,
    groupRender: myTabGroupRender
}