import { FormBuilderListEditorType, FormListColumnsPickType, IFormBuilderListMenuItemSelectionMode, IFormBuilderProps, ValidationOverride } from "@wiberg/formbuilder";
import { MyTabGroupContainer, myTabGroupRender } from "./grouping";
import { IFullListFormItem } from "./interfaces";
import { fullListFormItemSchemaProvider } from "./schemas";

const date = new Date();

const newItemPreProcess = (item: IFullListFormItem) : void => { 
    item.firstname = "TEST";
    item.endpoints = [];
}

const deleteItemsPreProcess = (items: Array<IFullListFormItem>) : boolean => (items.findIndex(_ => _.firstname === "Esben") < 0);



export const fullListFormOptions: IFormBuilderProps<IFullListFormItem> = {
    schemaConfig: { schemaProvider: fullListFormItemSchemaProvider },
    item: null,
    propertyOverrides: { disabledProps: true },
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item?.id as string,
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
