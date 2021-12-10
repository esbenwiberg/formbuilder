import { PrimaryButton, IconButton } from "@fluentui/react"
import { FormBuilderListEditorType } from "../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderListProps, IFormBuilderProps } from "../../formbuilder/components/FormBuilder";
import { ValidationResult } from "../../formbuilder/models/validation/ValidationResult";
import { DynamicListFormItem } from "./DynamicListFormItem";
import { PluginFormItem } from "./PluginFormItem";
import { schemas } from "./PluginSchemaFetch";
import React from "react";

export const dynamicListFormOptions: IFormBuilderProps<PluginFormItem> = {
    itemType: PluginFormItem,
    item: schemas.map(_ => {
        return { id: _.Id, name: _.Name, description: _.Url } as PluginFormItem;
    }),
    spinnerProps:{ timeout: 4000 },
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item.id as string,
            multiSelect: true, 
            onItemsChange: items => console.log("FROM OUTSIDE", items),
            shimmerLines: 20
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
                dynamicKey: (item: PluginFormItem) => item.id as string,
                customFormType: DynamicListFormItem,
                useEmptyItem: true
            },
            customFooter: (save, dismiss, validate, getItem) => (
                <>
                    <PrimaryButton 
                        text="Invoke" 
                        onClick={async () => {
                            let validationResult = await validate();
                            if (validationResult != ValidationResult.Success) return;
                            let item = getItem();
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
    } as IFormBuilderListProps<PluginFormItem>
};
