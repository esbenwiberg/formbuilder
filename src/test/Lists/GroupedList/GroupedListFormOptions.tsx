import { FormBuilderListEditorType } from "../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderProps } from "../../../formbuilder/components/FormBuilder";
import { MyTabGroupContainer, myTabGroupRender } from "../../Groupings/TabGroupRender/MyTabGroupRender";
import { MyGroupedListFormItem } from "./MyGroupedListFormItem";

export const groupedsListFormOptions: IFormBuilderProps<MyGroupedListFormItem> = {
    itemType: MyGroupedListFormItem,
    item: [
        { id: "1", name: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as MyGroupedListFormItem,
        { id: "2", name: 'Other', age: 12, awesome: false, custom: "Come on!"  } as MyGroupedListFormItem
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
            columnOrder: ["name", "awesome", "custom"]
        },
        editorConfig: {
            title: item => `Edit '${item?.name}'`,
            description: "Here's a little description for ya'",
            type: FormBuilderListEditorType.Panel
        },
        searchConfig: {
            searchEnabled: true,
            searchPlaceHolder: "Type here to filter items..",
            searchableFields: ["name", "custom"]
        }
    },
    groupContainer: MyTabGroupContainer,
    groupRender: myTabGroupRender
}