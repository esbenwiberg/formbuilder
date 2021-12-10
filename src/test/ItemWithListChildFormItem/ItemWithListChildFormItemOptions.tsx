import { IFormBuilderProps } from "../../formbuilder/components/FormBuilder";
import { MyFormItemChild } from "./MyFormItemChild";

export const itemWithChildListFormItemOptions: IFormBuilderProps<MyFormItemChild> = {
    itemType: MyFormItemChild,
    item: { id: "test1", name: 'Esbend', age: 42, childs: [{ idid: "1.1", name: "Esben", awesome: true }, { idid: "1.2", name: "Michael", awesome: false }] } as MyFormItemChild 
}
