import { FormBuilderListEditorType } from "../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderProps } from "../../formbuilder/components/FormBuilder";
import { MyDynamicFormItem } from "./MyDynamicFormItem";

export const dynamicFormItemOptions: IFormBuilderProps<MyDynamicFormItem> = {
    itemType: MyDynamicFormItem,
    item: [
        { id: "c39c56ae-35c5-4f43-8304-751101f223c0", name: "RemoveAccessor", key: "render1" } as MyDynamicFormItem,
        { id: "89923037-597e-496e-954e-8e5ed0ce9a40", name: "GetWhiteList", key: "render2" } as MyDynamicFormItem,
        { id: "89923037-597e-496e-954e-8e5ed0ce9a40", name: "GetWhiteList", key: "unknownrender" } as MyDynamicFormItem
    ],
    spinnerProps:{ timeout: 3000 },
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item.id as string,
            multiSelect: true, 
            onItemsChange: items => console.log("FROM OUTSIDE", items),
            shimmerLines: 20
        },
        columnConfig: {
            columnOrder: ["id", "key", "name"]
        },
        editorConfig: {
            title: item => `This form is rendered based on the selected item and the dynamic key`,
            description: "Here's a little description for ya'",
            type: FormBuilderListEditorType.Panel,
            dynamicForm: {
                dynamicKey: (item: MyDynamicFormItem) => item.key as string
            }
        },
        searchConfig: {
            searchEnabled: true,
            searchPlaceHolder: "Type here to filter items..",
            searchableFields: ["name"]
        }
    }
}