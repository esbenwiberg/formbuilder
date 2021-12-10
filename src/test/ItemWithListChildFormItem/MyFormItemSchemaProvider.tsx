import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { MyFormItemChild } from "./MyFormItemChild";
import { PropertyOptionsFactory } from "../../formbuilder/utils/PropertyOptionsFactory";
import { PropertyGroupOptionsFactory } from "../../formbuilder/utils/PropertyGroupOptionsFactory";
import { AnotherFormItem } from "./AnotherFormItem";
import { ValidationEventType } from "../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../formbuilder/models/validation/ValidationMark";
import { FormBuilderListEditorType } from "../../formbuilder/components/config/IFormBuilderListConfig";
import React from "react";

export class MyFormItemChildSchemaProvider extends SchemaProvider<MyFormItemChild> {

    public key = "MyFormItemChild";
    public itemType = () => MyFormItemChild

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyFormItemChild> = {
            options: {
                groups: {
                    groupOne: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 1" }),
                    groupTwo: PropertyGroupOptionsFactory.GroupOptions({ displayName: "Group 2", groupProps: { collapsed: true } })
                },
                validation: {
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: MyFormItemChild) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: MyFormItemChild) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        child: { id: "nest", validationRule: () => true, validateOn: ValidationEventType.Blur | ValidationEventType.Manual, validationMessage: "", fromType: AnotherFormItem },
                    }
                },
                properties: { 
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: PropertyOptionsFactory.numberPropertyOption({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    childs: PropertyOptionsFactory.formItemPropertyOption({ 
                        displayName: "Another 'FormItem' as a child array", 
                        config: { itemType: AnotherFormItem },
                        listItemOptions: { customValueRender: (item: MyFormItemChild) => <>{item.childs?.length ?? 0}</> },
                        listProps: { 
                            config: { 
                                itemIdentifier: (item: AnotherFormItem) => item.idid as string },
                                editorConfig: { title: (item: AnotherFormItem) => `Edit: ${item?.name}`, type: FormBuilderListEditorType.Dialog },
                                searchConfig: { searchableFields: ["name"], searchEnabled: true, searchPlaceHolder: "Filter child items by name.." }
                            }
                         }),
                } 
            } as IFormItemOptions<MyFormItemChild>
        }

        return schema as IFormSchema<IFormItem>;
    }
}