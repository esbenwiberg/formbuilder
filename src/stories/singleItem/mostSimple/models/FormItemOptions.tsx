import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { MyFormItem } from "./MyFormItem";

export const simpleFormItemOptions: IFormBuilderProps<MyFormItem> = {
    itemType: MyFormItem,
    item: { id: "test1", name: 'Esbend', age: 42 } as MyFormItem,
}
