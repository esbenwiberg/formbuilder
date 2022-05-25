import { FormBuilderListEditorType, FormListColumnsPickType, IFormBuilderListMenuItemSelectionMode, IFormBuilderProps, ValidationOverride } from "@wiberg/formbuilder";
import { MyTabGroupContainer, MyTabGroupRender } from "./grouping";
import { IFullListFormItem } from "./interfaces";
import { fullListFormItemSchemaProvider } from "./schemas";
import { FluentFormShimmer } from '@wiberg/fluentui-builder';

const date = new Date();

const newItemPreProcess = (item: IFullListFormItem) : void => { 
    item.firstname = "TEST";
    item.endpoints = [];
}

const deleteItemsPreProcess = (items: Array<IFullListFormItem>) : Promise<boolean> => new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
        resolve(items.findIndex(_ => _.firstname === "Esben") < 0)
    }, 2000);
});



export const fullListFormOptions: IFormBuilderProps<IFullListFormItem> = {
    schemaConfig: { schemaProvider: fullListFormItemSchemaProvider },
    item: null,
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item?.id as string,
            multiSelect: true, 
            onItemsChange: items => console.log("FROM OUTSIDE", items)
        },
        shimmerConfig: {
            shimmerLines: 5,
            autoShimmerOnEmptyList: true
        },
        columnConfig: {
            columnOrder: ["firstname", "awesome", "custom"],
            columnsPicks: {
                columns: ["awesome"],
                pickType: FormListColumnsPickType.Without
            },
            resizableColumns: true
        },
        editorConfig: {
            title: (item, creation) => creation ? "New item" : `Edit '${item?.firstname}'`,
            description: "Here's a little description for ya'",
            containerOptions: {
                type: FormBuilderListEditorType.Panel,
                contentWrapper: {
                    renderDelay: 50
                }
            }
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
                    { title: "Click here!", iconName: "NumberField", selectionMode: IFormBuilderListMenuItemSelectionMode.Multi, action: items => alert(items.length) },
                    { title: "Age", iconName: "NumberField", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: items => alert(items.map(_ => _.age).join(", ")) },
                ]
            ),
        }
    },
    groupContainer: MyTabGroupContainer,
    groupRender: MyTabGroupRender,
    validationOverride: ValidationOverride.None
}
