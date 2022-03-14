import { FormBuilderListEditorType, IFormBuilderProps } from "@wiberg/formbuilder";
import { IMyIdValueListFormItem } from "./interfaces";
import { idValueListFormItemSchemaProvider } from "./schemas";

export const listWithIdsFormOptions: IFormBuilderProps<IMyIdValueListFormItem> = {
    schemaConfig: { schemaProvider: idValueListFormItemSchemaProvider },
    item: [
        { id: 1, name: 'Esben', userId: "e959c336-f50d-43da-822f-a3107a01e99f", userAsString: "ewi", typeId: "241854fc-39ea-4bc5-9f9f-650d7cbfe20e", typeAsString: "Admin" } as IMyIdValueListFormItem,
        { id: 2, name: 'Other', userId: "8ac4b128-25ee-4ff9-a5f4-012fc163995d", userAsString: "oth", typeId: "9ca1e9ba-636c-46f8-89f3-cee502d39fb5", typeAsString: "SuperUser" } as IMyIdValueListFormItem
    ],
    listProps: {
        onItemChange: item => console.log(item),
        config: { 
            itemIdentifier: item => item.id.toString(),
        },
        shimmerConfig: {
            shimmerLines: 2,
            autoShimmerOnEmptyList: true
        },
        editorConfig: {
            title: item => `Edit '${item?.name}'`,
            type: FormBuilderListEditorType.Panel
        }
    }
}
