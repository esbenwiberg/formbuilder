import { FormBuilderListEditorType, FormListColumnsPickType } from "../../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { LargeListFormItem } from "./LargeListFormItem";

const date = new Date();

export const largeListFormOptions: IFormBuilderProps<LargeListFormItem> = {
    itemType: LargeListFormItem,
    item: Array.from(Array(100000).keys()).map(_ => {
        return { id: _, name: _.toString(), age: _ % 100, awesome: _  % 2 == 0, start: new Date(date.setDate(_)) } as LargeListFormItem;
    }),
    listProps: {
        config: { 
            itemIdentifier: item => item.id?.toString(),
            disableItemInvoke: true,
            multiSelect: true,
            shimmerLines: 100
        },
        columnConfig: {
            columnsPicks: {
                pickType: FormListColumnsPickType.Without,
                columns: [ "id" ]
            }
        },
        editorConfig: {
            title: item => `Edit ${item.name}`,
            type: FormBuilderListEditorType.Panel
        },
        // menuConfig: {
        //     actions: (newItem, editItem, deleteItems) => (
        //         [
        //             { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
        //             { title: "Edit", iconName: "Edit", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => editItem() },
        //             { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => deleteItems() }
        //         ]
        //     )
        // },
        searchConfig: {
            searchEnabled: true,
            searchableFields: [
                "name"
            ],
            searchPlaceHolder: "Search by name.."
        }
    }
}
