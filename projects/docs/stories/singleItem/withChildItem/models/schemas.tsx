import { IFormItemOptions, IFormSchema, ISchemaProvider, propertyGroupOptionsFactory, propertyOptionsFactory, ValidationEventType, ValidationMark } from "@wiberg/formbuilder";
import React from "react";
import { IAnotherFormItem, IMyFormItemChild } from "./interfaces";


export const myFormItemChildSchemaProvider: ISchemaProvider<IAnotherFormItem> = {
    key: "myFormItemChildSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IAnotherFormItem>> => {
        return {
            options: {
                groups: {
                    groupOne: propertyGroupOptionsFactory.groupOptions({ displayName: "Group 1" }),
                    groupTwo: propertyGroupOptionsFactory.groupOptions({ displayName: "Group 2", groupProps: { collapsed: true } })
                },
                validation: {
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: IMyFormItemChild) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: IMyFormItemChild) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        child: { id: "nest", validateOn: ValidationEventType.Blur | ValidationEventType.Manual, validationMessage: "", nestedValidation: { schemaProvider: anotherFormItemSchemaProvider } }
                    }
                },
                properties: { 
                    name: propertyOptionsFactory.string({ displayName: "This name", group: "groupOne", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.number({ displayName: "This age", group: "groupTwo", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    child: propertyOptionsFactory.formItem({ displayName: "Another 'FormItem' as child", description: "This is a description", config: { schemaConfig: { registeredSchemaKey: "anotherFormItemSchemaProvider" } }, listItemOptions: { customValueRender: item => <>{(item.child as IAnotherFormItem)?.name}</> } } ),
                } 
            } as IFormItemOptions<IMyFormItemChild>
        } as IFormSchema<IAnotherFormItem>;
    }
}


export const anotherFormItemSchemaProvider: ISchemaProvider<IAnotherFormItem> = {
    key: "anotherFormItemSchemaProvider",
    getSchema: async () : Promise<IFormSchema<IAnotherFormItem>> => {
        return {
            options: {
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        name: { id: "namelength", validationMark: ValidationMark.Required, validationRule: (item: IAnotherFormItem) => (item.name?.length ?? 0) > 3, validationMessage: "Your name must be over 3 characters", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: {
                    name: propertyOptionsFactory.string({ displayName: "This name", group: "groupOne", config: { resizable: true } }),
                    awesome: propertyOptionsFactory.boolean({ displayName: "Are you awesome, sir?", group: "groupTwo", config: { asToggle: false, textIfTrue: "Si senor", textIfFalse: "Nopes, not really" }})
                } 
            } as IFormItemOptions<IAnotherFormItem>
        } as IFormSchema<IAnotherFormItem>;
    }
}
