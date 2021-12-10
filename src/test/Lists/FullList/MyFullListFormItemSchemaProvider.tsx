import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../formbuilder/models/schema/ISchemaProvider";
import { PropertyOptionsFactory } from "../../../formbuilder/utils/PropertyOptionsFactory";
import { PropertyGroupOptionsFactory } from "../../../formbuilder/utils/PropertyGroupOptionsFactory";
import { ValidationEventType } from "../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../formbuilder/models/validation/ValidationMark";
import { MyFullListFormItem } from "./MyFullListFormItem";
import { TextField } from "@fluentui/react";
import { MyFullListFormChildItem } from "./MyFullListFormChildItem";
import { FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode } from "../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormBuilderListProps } from "../../../formbuilder/components/FormBuilder";
import MyCustomComponent from "../../PropertyCustomComponent/MyCustomComponent";
import React from "react";

export class MyFullListFormItemSchemaProvider extends SchemaProvider<MyFullListFormItem> {

    public key = "MyFullListFormItem";
    public itemType = () => MyFullListFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyFullListFormItem> = {
            options: {
                groups: {
                    groupOne: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Basic" }),
                    groupTwo: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Misc", groupProps: { collapsed: true } }),
                    endpoints: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Endpoints", groupProps: { collapsed: true } }),
                },
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        firstname: { id: "over3chars", validationMark: ValidationMark.Required, validationRule: (item: MyFullListFormItem) => item.firstname != undefined && item.firstname.length > 3, validationMessage: "Your name must be longer than 3 characters", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: MyFullListFormItem) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        awesome: { id: "highoverthirty", validationRule: (item: MyFullListFormItem) => !item.awesome || ((item.age ?? 0) > 30), validationMessage: "Only people over 30, can be awesome", validateOn: ValidationEventType.Change | ValidationEventType.Manual },
                        start: { id: "dateshizzle", validationRule: (item: MyFullListFormItem) => item.start != null && item.start >= new Date(2021, 9, 1), validateOn: ValidationEventType.Blur | ValidationEventType.Change | ValidationEventType.Manual, validationMessage: "Start should be after '2021-10-1'" }
                    }
                },
                properties: {
                    firstname: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true, customValueRender: (item, onChange) => <>{<TextField value={item.firstname+""} onChange={(ev, val) => onChange({...item, ...{ firstname: val }})} />}</> } }),
                    age: PropertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: PropertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    custom: PropertyOptionsFactory.customComponentPropertyOption({ displayName: "This is rendered by a custom component", group: "groupOne", config: { component: MyCustomComponent, componentName: "MyCustomComponent", test: "This is a static variable" }}),
                    start: PropertyOptionsFactory.datePropertyOption({ displayName: "Start", group: "groupOne", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "", minDate: (item: MyFullListFormItem) => new Date() }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } }),
                    fakeListColumn: PropertyOptionsFactory.stringPropertyOption({ displayName: "Fake list column", group: "groupOne", hide: () => true, listItemOptions: { customValueRender: item => <>{<div onClick={() => alert(item.age)} style={{ cursor: "pointer", backgroundColor: (item.age ?? 0) > 15 ? "green" : "red", height: "100%"}}></div> }</> }} ),
                    endpoints: PropertyOptionsFactory.formItemPropertyOption({ 
                        displayName: "Endpoints", 
                        group: "endpoints",
                        config: { itemType: MyFullListFormChildItem },
                        listItemOptions: { customValueRender: (item: MyFullListFormItem) => <>{item.endpoints?.length ?? 0}</> } as any, // TODO: this 'as any' should'nt be needed? (ewi) (in 'MyFormItemSchemaProvider' it works!)
                        listProps: { 
                            config: {
                                itemIdentifier: (item: MyFullListFormChildItem) => item.endpoint as string,
                            },
                            editorConfig: { title: (item: MyFullListFormChildItem) => `Edit: ${item?.endpoint}`, type: FormBuilderListEditorType.Dialog },
                            searchConfig: { searchableFields: ["name", "url"], searchEnabled: true, searchPlaceHolder: "Filter endpoints.." },
                            menuConfig: {
                                actions: (newItem, editItem, deleteItems) => (
                                    [
                                        { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
                                        { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => deleteItems() },
                                    ]
                                )
                            }
                        } as IFormBuilderListProps<MyFullListFormChildItem>,
                    }),
                } 
            } as IFormItemOptions<MyFullListFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}