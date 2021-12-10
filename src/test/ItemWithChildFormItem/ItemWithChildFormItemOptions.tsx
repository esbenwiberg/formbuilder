import { IFormBuilderProps } from "../../formbuilder/components/FormBuilder";
import { AnotherFormItem } from "./AnotherFormItem";
import { MyFormItemChild } from "./MyFormItemChild";

export const itemWithChildFormItemOptions: IFormBuilderProps<MyFormItemChild> = {
    itemType: MyFormItemChild,
    item: { id: "test1", name: 'Esbend', age: 42, child: { id: "1.1", name: "Esben", awesome: true } as AnotherFormItem } as MyFormItemChild,
}
