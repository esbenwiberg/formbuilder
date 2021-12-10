// import { FormBuilderListEditorType } from "../../formbuilder/components/config/IFormBuilderListConfig"
// import { FormBuilderListProps, IFormBuilderProps } from "../../formbuilder/components/FormBuilder"
// import { ValidationOverride } from "../../formbuilder/models/validation/ValidationOverride";
// import { AnotherFormItem } from "../ItemWithChildFormItem/AnotherFormItem";

// export const overridesOptions: IFormBuilderProps<MyFormItem> = {
//     validationOverride: ValidationOverride.Continue,
//     propertyOverrides: { disabledProps: true, hiddenProps: []},
//     itemType: MyFormItem,
//     item: [
//         { id: "1", name: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), test: "Test", customStuff: "HEJHAT", child: { id: "1.1", name:"Esben", awesome: true } as AnotherFormItem } as MyFormItem,
//         { id: "2", name: 'Giraf', age: 12, awesome: false, customStuff: "Come on!", child: { id: "2.1", name:"Næ", awesome: false } as AnotherFormItem } as MyFormItem
//     ],
//     spinnerProps:{ timeout: 4000 },
//     listProps: {
//         onItemChange: item => console.log(item),
//         config: { 
//             itemIdentifier: item => item.id,
//             multiSelect: true, 
//             onitemsChange: items => console.log("FROM OUTSIDE", items),
//             shimmerLines: 20,
//             readOnly: true
//         },
//         columnConfig: {
//             columnOrder: ["name", "customStuff"],
//             customColumns: []
//         },
//         editorConfig: {
//             title: item => `Invoke '${item?.name}'`,
//             description: "Here's a little description for ya'",
//             type: FormBuilderListEditorType.Panel
//         },
//         searchConfig: {
//             searchEnabled: true,
//             searchPlaceHolder: "Type here to filter items..",
//             searchableFields: ["name", "customStuff"]
//         }
//     } as FormBuilderListProps<MyFormItem>,
// };

export {};