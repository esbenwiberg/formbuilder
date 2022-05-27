import { FormBuilderListEditorType, FormListColumnsPickType, IFormBuilderProps } from "@wiberg/formbuilder";
import { ILargeListFormItem } from "./interfaces";
import { largeListFormItemSchemaProvider } from "./schemas";

const date = new Date();

export const largeListFormOptions: IFormBuilderProps<ILargeListFormItem> = {
    schemaConfig: { schemaProvider: largeListFormItemSchemaProvider },
    item: Array.from(Array(100000).keys()).map(_ => {
        return { id: _, name: _.toString(), age: _ % 100, awesome: _  % 2 == 0, start: new Date(date.setDate(_)) } as ILargeListFormItem;
    }),
    listProps: {
        config: { 
            itemIdentifier: item => item.id?.toString(),
            disableItemInvoke: true,
            multiSelect: true
        },
        shimmerConfig: {
            shimmerLines: 100,
            autoShimmerOnEmptyList: true
        },
        columnConfig: {
            columnsPicks: {
                pickType: FormListColumnsPickType.Without,
                columns: [ "id" ]
            }
        },
        editorConfig: {
            title: item => `Edit ${item.name}`,
            containerOptions: {
                type: FormBuilderListEditorType.Panel
            },
            dismissImmediately: true
        },
        searchConfig: {
            searchEnabled: true,
            searchableFields: [
                "name"
            ],
            searchPlaceHolder: "Search by name.."
        }
    }
}
