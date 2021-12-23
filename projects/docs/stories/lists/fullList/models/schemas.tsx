import { TextField } from "@fluentui/react";
import { ISchemaProvider, IFormSchema, propertyGroupOptionsFactory, ValidationMark, ValidationEventType, propertyOptionsFactory, FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode, IFormBuilderListProps, IFormItemOptions } from "@wiberg/formbuilder";
import React from "react";
import CustomComponent from "./CustomComponent";
import { IFullListFormChildItem, IFullListFormItem } from "./interfaces";

export const fullListFormItemSchemaProvider: ISchemaProvider<IFullListFormItem> = {
    key: "fullListFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IFullListFormItem>> => {
        return {
            options: {
                groups: {
                    groupOne: propertyGroupOptionsFactory.groupOptions({ displayName: "Basic" }),
                    groupTwo: propertyGroupOptionsFactory.groupOptions({ displayName: "Misc", groupProps: { collapsed: true } }),
                    endpoints: propertyGroupOptionsFactory.groupOptions({ displayName: "Endpoints", groupProps: { collapsed: true } }),
                },
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        firstname: { id: "over3chars", validationMark: ValidationMark.Required, validationRule: (item: IFullListFormItem) => item.firstname != undefined && item.firstname.length > 3, validationMessage: "Your name must be longer than 3 characters", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: IFullListFormItem) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        awesome: { id: "highoverthirty", validationRule: (item: IFullListFormItem) => !item.awesome || ((item.age ?? 0) > 30), validationMessage: "Only people over 30, can be awesome", validateOn: ValidationEventType.Change | ValidationEventType.Manual },
                        start: { id: "dateshizzle", validationRule: (item: IFullListFormItem) => item.start != null && item.start >= new Date(2021, 9, 1), validateOn: ValidationEventType.Blur | ValidationEventType.Change | ValidationEventType.Manual, validationMessage: "Start should be after '2021-10-1'" }
                    }
                },
                properties: {
                    firstname: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true, customValueRender: (item, onChange) => <>{<TextField value={item.firstname+""} onChange={(ev, val) => onChange({...item, ...{ firstname: val }})} />}</> } }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome?", group: "groupTwo", config: { asToggle: true, textIfTrue: "Oh yearh", textIfFalse: "Nonono" }}),
                    custom: propertyOptionsFactory.customComponentPropertyOption({ displayName: "This is rendered by a custom component", group: "groupOne", config: { component: CustomComponent, test: "This is a static variable" }}),
                    start: propertyOptionsFactory.datePropertyOption({ displayName: "Start", group: "groupOne", config: { displayFormat: (date?: Date) => date?.toDateString() ?? "", minDate: (item: IFullListFormItem) => new Date() }, listItemOptions: { customValueRender: item => <>{item.start?.toDateString()}</> } }),
                    fakeListColumn: propertyOptionsFactory.stringPropertyOption({ displayName: "Fake list column", group: "groupOne", hide: (item: IFullListFormItem) => true, listItemOptions: { customValueRender: item => <>{<div onClick={() => alert(item.age)} style={{ cursor: "pointer", backgroundColor: (item.age ?? 0) > 15 ? "green" : "red", height: "100%"}}></div> }</> }} ),
                    endpoints: propertyOptionsFactory.formItemPropertyOption<IFullListFormItem>({ 
                        displayName: "Endpoints", 
                        group: "endpoints",
                        config: { schemaConfig: { schemaProvider: fullListChildFormItemSchemaProvider as any } },
                        listItemOptions: { customValueRender: (item: IFullListFormItem) => <>{item.endpoints?.length ?? 0}</> } as any, // TODO: this 'as any' should'nt be needed? (ewi) (in 'MyFormItemSchemaProvider' it works!)
                        listProps: { 
                            config: {
                                itemIdentifier: (item: IFullListFormChildItem) => item.endpoint as string,
                            },
                            editorConfig: { title: (item: IFullListFormChildItem) => `Edit: ${item?.endpoint}`, type: FormBuilderListEditorType.Dialog },
                            searchConfig: { searchableFields: ["name", "url"], searchEnabled: true, searchPlaceHolder: "Filter endpoints.." },
                            menuConfig: {
                                actions: (newItem, editItem, deleteItems) => (
                                    [
                                        { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
                                        { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => deleteItems() },
                                    ]
                                )
                            }
                        } as IFormBuilderListProps<IFullListFormChildItem>,
                    }),
                } 
            } as IFormItemOptions<IFullListFormItem>
        } as IFormSchema<IFullListFormItem>;
    }
}


export const fullListChildFormItemSchemaProvider: ISchemaProvider<IFullListFormChildItem> = {
    key: "fullListChildFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IFullListFormChildItem>> => {
        return {
            options: {
                validation: {
                    validationRules: {
                        url: {
                            id: "validurl",
                            validateOn: ValidationEventType.Change | ValidationEventType.Blur | ValidationEventType.Manual,
                            validationMessage: "Not correct specified url",
                            validationRule: item => {
                                if (item.url == null) return false;
                                const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi);
                                return regex.test(item.url);
                            },
                            validationMark: ValidationMark.Required
                        }
                    }
                },
                properties: {
                    endpoint: propertyOptionsFactory.stringPropertyOption({ displayName: "Endpoint", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true } }),
                    url: propertyOptionsFactory.stringPropertyOption({ displayName: "Url", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true } })
                } 
            } as IFormItemOptions<IFullListFormChildItem>
        } as IFormSchema<IFullListFormChildItem>;
    }
}