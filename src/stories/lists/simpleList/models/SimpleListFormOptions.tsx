import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { MySimpleListFormItem } from "./MySimpleListFormItem";

export const simpleListFormOptions: IFormBuilderProps<MySimpleListFormItem> = {
    itemType: MySimpleListFormItem,
    item: [
        { id: "1", name: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as MySimpleListFormItem,
        { id: "2", name: 'Other', age: 12, awesome: false, custom: "Come on!"  } as MySimpleListFormItem
    ],
    listProps: {
        config: { 
            itemIdentifier: item => item.id as string
        }
    }
}
