import { IconButton, PrimaryButton } from "@fluentui/react";
import { IFormBuilderProps, FormBuilderListEditorType, ValidationResult, IFormBuilderListProps } from "@wiberg/formbuilder";
import { IPluginFormItem } from "./interfaces";
import { schemas } from "./PluginSchemaFetch";
import { dynamicFormItemSchemaProvider, pluginFormItemSchemaProvider } from "./schemas";

export const dynamicListFormOptions: IFormBuilderProps<IPluginFormItem> = {
    schemaConfig: { schemaProvider: pluginFormItemSchemaProvider },
    item: schemas.map(_ => {
        return { id: _.Id, name: _.Name, description: _.Url } as IPluginFormItem;
    }),
    loadingProps:{ timeout: 3000 },
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item.id as string,
            multiSelect: true, 
            onItemsChange: items => console.log("FROM OUTSIDE", items),
            shimmerConfig: {
                shimmerLines: 20,
                autoShimmerOnEmptyList: true
            }
        },
        columnConfig: {
            columnOrder: ["name", "customStuff"],
            customColumns: []
        },
        editorConfig: {
            title: item => `Invoke '${item?.name}'`,
            description: "Here's a little description for ya'",
            type: FormBuilderListEditorType.Panel,
            dynamicForm: {
                dynamicKey: (item: IPluginFormItem) => item.id as string,
                schemaConfig: { schemaProvider: dynamicFormItemSchemaProvider },
                useEmptyItem: true
            },
            customFooter: (save, dismiss, validate, getItem) => (
                <>
                    <PrimaryButton 
                        text="Invoke" 
                        onClick={async () => {
                            const validationResult = await validate();
                            if (validationResult != ValidationResult.Success) return;
                            const item = getItem();
                            alert(JSON.stringify(item));
                            dismiss();
                        }}
                    />
                    <IconButton iconProps={{iconName:"Cancel"}} onClick={() => dismiss()} />
                </>
            )
        },
        searchConfig: {
            searchEnabled: true,
            searchPlaceHolder: "Type here to filter items..",
            searchableFields: ["name", "customStuff"]
        }
    } as IFormBuilderListProps<IPluginFormItem>
}
