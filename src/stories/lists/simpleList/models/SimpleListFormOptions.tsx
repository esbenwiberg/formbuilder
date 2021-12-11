import { FormBuilderListEditorType } from "../../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { MySimpleListFormItem } from "./MySimpleListFormItem";

export const simpleListFormOptions: IFormBuilderProps<MySimpleListFormItem> = {
    itemType: MySimpleListFormItem,
    item: [
        { id: "1", name: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as MySimpleListFormItem,
        { id: "2", name: 'Other', age: 12, awesome: false, custom: "Come on!"  } as MySimpleListFormItem
    ],
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item.id as string,
            multiSelect: true, 
            onItemsChange: items => console.log("FROM OUTSIDE", items),
            shimmerLines: 5
        },
        columnConfig: {
            columnOrder: ["name", "awesome", "custom"],
            customColumns: []
        },
        editorConfig: {
            title: item => `Edit '${item?.name}'`,
            description: "Here's a little description for ya'",
            type: FormBuilderListEditorType.Dialog
        }
    }
}
