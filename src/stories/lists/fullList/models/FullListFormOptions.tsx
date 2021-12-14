import { FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode, FormListColumnsPickType } from "../../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderProps } from "../../../../formbuilder/components/FormBuilder";
import { ValidationOverride } from "../../../../formbuilder/models/validation/ValidationOverride";
import { MyFullListFormItem } from "./MyFullListFormItem";
import { MyTabGroupContainer, myTabGroupRender } from "./MyTabGroupRender";

const newItemPreProcess = (item: MyFullListFormItem) : void => { 
    item.firstname = "TEST";
    item.endpoints = [];
}

const deleteItemsPreProcess = (items: Array<MyFullListFormItem>) : boolean => (items.findIndex(_ => _.firstname === "Esben") < 0);

export const fullListFormOptions: IFormBuilderProps<MyFullListFormItem> = {
    itemType: MyFullListFormItem,
    item: [
        { id: "1", firstname: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as MyFullListFormItem,
        { id: "2", firstname: 'Other', age: 12, awesome: false, custom: "Come on!"  } as MyFullListFormItem
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
            columnOrder: ["firstname", "awesome", "custom"],
            columnsPicks: {
                columns: ["awesome"],
                pickType: FormListColumnsPickType.Without
            }
        },
        editorConfig: {
            title: (item, creation) => creation ? "New item" : `Edit '${item?.firstname}'`,
            description: "Here's a little description for ya'",
            type: FormBuilderListEditorType.Panel
        },
        searchConfig: {
            searchEnabled: true,
            searchPlaceHolder: "Type here to filter items..",
            searchableFields: ["name", "custom"]
        },
        menuConfig: {
            actions: (newItem, editItem, deleteItems) => (
                [
                    { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem(newItemPreProcess) },
                    { title: "Edit", iconName: "Edit", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => editItem() },
                    { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => deleteItems(deleteItemsPreProcess) },
                    { title: "Click here!", iconName: "NumberField", selectionMode: IFormBuilderListMenuItemSelectionMode.Multi, action: items => alert(items.length) }
                ]
            ),
        }
    },
    groupContainer: MyTabGroupContainer,
    groupRender: myTabGroupRender,
    validationOverride: ValidationOverride.None
}