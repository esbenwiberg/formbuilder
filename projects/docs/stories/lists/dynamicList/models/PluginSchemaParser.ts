import { IPropertyTypes, IFormItemPropertyOptions, IDynamicPropertyComponentConfig, propertyOptionsFactory, IFormSchema, IDynamicArrayFieldConfig, IDynamicPredefinedArrayFieldConfig, ValidationEventType, ValidationMark, IValidationRule, mergeDeep, json, FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode } from "@wiberg/formbuilder";
import { IDynamicListFormItem } from "./interfaces";
import { IJsonPropertySchema, IJsonMemberSchema } from "./JsonPropertySchema";

const mappings: Record<string, keyof IPropertyTypes> = {
    "String": "string",
    "Int32": "number",
    "Boolean": "boolean",
    "List": "formItem",
    "Object": "json", 
    "ExpandoObject": "json",
    "Enum": "predefinedArray"
}

const propertyOptions = (propertyType: keyof IPropertyTypes, propertyName: string) : Partial<IFormItemPropertyOptions<IDynamicListFormItem, IDynamicPropertyComponentConfig<IDynamicListFormItem>>> => {
    switch (propertyType) {
        case "string":
            return propertyOptionsFactory.string<IDynamicListFormItem>({ displayName: propertyName });
        case "number":
            return propertyOptionsFactory.number<IDynamicListFormItem>({ displayName: propertyName });
        case "boolean":
            return propertyOptionsFactory.boolean<IDynamicListFormItem>({ displayName: propertyName });
        case "json":
            return propertyOptionsFactory.json<IDynamicListFormItem>({ displayName: propertyName });
        case "predefinedArray":
            return propertyOptionsFactory.predefinedArray<IDynamicListFormItem>({ displayName: propertyName, config: { predefinedOptions: { options: [] } } });
        case "array":
            return propertyOptionsFactory.array<IDynamicListFormItem>({ displayName: propertyName, config: {  } });
    }
    return {};
}

const getName = (name: string) : string => {
    if (name == null || name == "") return "Noname";
    return name;
}

// TODO: refactor the shit out of this (ewi)
const parseSingleProperty = (jsonPropertySchema: IJsonPropertySchema, formSchema: IFormSchema<IDynamicListFormItem>, nested?: boolean) : void => {
    const name: string = getName(jsonPropertySchema.Name);
    let type = mappings[jsonPropertySchema.Type];

    const isList = jsonPropertySchema.Type === "List";
    // list of simple objects (ie. string, number, boolean)
    if (isList && (jsonPropertySchema as IJsonMemberSchema).Properties === undefined && !jsonPropertySchema.ElementType?.Properties?.length) {
        type = "array";
    }

    // complex type in a list (or maybe unsupported type)
    if (type == null && nested) {
        (jsonPropertySchema as IJsonMemberSchema).Properties?.forEach(_ => parseSingleProperty(_, formSchema, true));
        return;
    }

    const options = propertyOptions(type, name);
    
    let skipValidation = false;
    // complex type on root
    if (Object.keys(options).length == 0) {
        // options = propertyOptions(PropertyType.FormItem, jsonPropertySchema.Name);
        type = "formItem";
        skipValidation = true; // skip validation for complex type's root
    }

    // more array
    if (type == "array") {
        const dynamicArrayConfig = (options as IFormItemPropertyOptions<IDynamicListFormItem, IDynamicArrayFieldConfig<IDynamicListFormItem>>).config;
        if (dynamicArrayConfig != null)
            dynamicArrayConfig.propertyType = mappings[jsonPropertySchema.ElementType.Type];
    }

    // handle enums
    if (type == "predefinedArray") {
        const arrayOptions = options as IFormItemPropertyOptions<IDynamicListFormItem, IDynamicPredefinedArrayFieldConfig<IDynamicListFormItem>>;
        if (arrayOptions.config !== undefined) {
            arrayOptions.config.predefinedOptions = {
                options: Object.keys(jsonPropertySchema.Values).map(_ => {
                    return { key: (jsonPropertySchema.Values as any)[_], text: _ } as { key: number, text: string };
                })
            }
        }
    }

    formSchema.options.properties[name] = options as any;

    // handle lists
    if (type == "formItem") {
        if (isList) {
            const listFormSchema = { options: { properties: { }, validation: { validationRules: { } } } } as IFormSchema<IDynamicListFormItem>;
            const listSchema = jsonPropertySchema.ElementType;
            
            listSchema.Properties.forEach(_ => parseSingleProperty(_, listFormSchema, true));
            const listPropName = jsonPropertySchema.Name;

            // validation
            const validationRules = {} as  any;
            validationRules[listPropName] = {
                id: listPropName,
                validateOn: ValidationEventType.Manual,
                validationMessage: `${listPropName} is required`,
                validationRule: item => item[listPropName] != null && item[listPropName].lenght > 0,
                validationMark: ValidationMark.Required
            } as IValidationRule<any>;
            formSchema.options.validation = mergeDeep(validationRules, formSchema.options.validation); // merge with existing validation
            
            // list schema
            formSchema.options.properties[listPropName] = {
                displayName: listPropName,
                propertyType: "formItem",
                config: {
                    schemaConfig: { registeredSchemaKey: "dynamicFormItemSchemaProvider" },
                    overrideSchema: listFormSchema as IFormSchema<IDynamicListFormItem>
                },
                listItemOptions: {
                    customValueRender: nested ? (item, onChange) => item[listPropName]?.length : undefined,
                    isResizable: true
                },
                listProps: {
                    config: {
                        itemIdentifier: (item => json.tryStringify(item)),
                        multiSelect: true
                    },
                    editorConfig: {
                        title: () => "Edit",
                        type: FormBuilderListEditorType.Dialog
                    },
                    menuConfig: {
                        actions: (newItem, editItem, deleteItems) => (
                            [
                                { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
                                { title: "Edit", iconName: "Edit", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => editItem() },
                                { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => deleteItems() }
                            ]
                        ),
                    }
                }
            }
        }
        else {
            (jsonPropertySchema as IJsonMemberSchema).Properties.forEach(_ => parseSingleProperty(_, formSchema, true));
        }
    }

    // add required validation
    if (!skipValidation && !jsonPropertySchema.IsNullable && formSchema.options?.validation?.validationRules != null) {
        formSchema.options.validation.validationRules[name] = { id: "required", validationMark: ValidationMark.Required, validationRule: (item: IDynamicListFormItem) => item[name] != null &&  item[name] != "", validationMessage: `'${name}' is required`, validateOn: ValidationEventType.Manual }
    }
}

export const PluginSchemaParser = (jsonSchema: any) : IFormSchema<IDynamicListFormItem> | undefined => {
    if (jsonSchema == null) return undefined;
    const formSchema = { options: { properties: { }, validation: { validationRules: { } } } } as IFormSchema<IDynamicListFormItem>;

    const memberSchema: IJsonMemberSchema = jsonSchema.Request as IJsonMemberSchema;

    const map = mappings[memberSchema.Type];
    // complex type (or maybe unsupported type)
    if (map == null) {
        memberSchema.Properties.forEach(_ => parseSingleProperty(_, formSchema));
    }
    // simple type
    else {
        parseSingleProperty(memberSchema, formSchema);
    }
    return formSchema;
}