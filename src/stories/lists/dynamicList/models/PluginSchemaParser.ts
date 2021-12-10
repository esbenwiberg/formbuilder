import { IDynamicArrayFieldConfig } from "../../../../formbuilder/builders/custom/config/IDynamicArrayFieldConfig";
import { IDynamicPredefinedArrayFieldConfig } from "../../../../formbuilder/builders/fluentUI/components/dynamicComponents/config/IDynamicPredefinedArrayFieldConfig";
import { IDynamicPropertyComponentConfig } from "../../../../formbuilder/builders/interfaces/IDynamicPropertyComponentConfig";
import { FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode } from "../../../../formbuilder/components/config/IFormBuilderListConfig";
import { IFormItemPropertyOptions } from "../../../../formbuilder/models/options/IFormItemPropertyOptions";
import { PropertyType } from "../../../../formbuilder/models/property/PropertyType";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { IValidationRule } from "../../../../formbuilder/models/validation/IValidationRules";
import { ValidationEventType } from "../../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../../formbuilder/models/validation/ValidationMark";
import { json } from "../../../../formbuilder/utils/Json";
import { mergeDeep } from "../../../../formbuilder/utils/MergeObjects";
import { PropertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { DynamicListFormItem } from "./DynamicListFormItem";
import { IJsonPropertySchema, IJsonMemberSchema } from "./JsonPropertySchema";


const mappings: Record<string, PropertyType> = {
    "String": PropertyType.String,
    "Int32": PropertyType.Number,
    "Boolean": PropertyType.Boolean,
    "List": PropertyType.FormItem,
    "Object": PropertyType.Json,
    "ExpandoObject": PropertyType.Json,
    "Enum": PropertyType.PredefinedArray
}

const propertyOptions = (propertyType: PropertyType, propertyName: string) : Partial<IFormItemPropertyOptions<DynamicListFormItem, IDynamicPropertyComponentConfig>> => {
    switch (propertyType) {
        case PropertyType.String:
            return PropertyOptionsFactory.stringPropertyOption<DynamicListFormItem>({ displayName: propertyName });
        case PropertyType.Number:
            return PropertyOptionsFactory.numberPropertyOption<DynamicListFormItem>({ displayName: propertyName });
        case PropertyType.Boolean:
            return PropertyOptionsFactory.booleanPropertyOption<DynamicListFormItem>({ displayName: propertyName });
        case PropertyType.Json:
            return PropertyOptionsFactory.jsonPropertyOption<DynamicListFormItem>({ displayName: propertyName });
        case PropertyType.PredefinedArray:
            return PropertyOptionsFactory.predefinedArrayPropertyOption<DynamicListFormItem>({ displayName: propertyName, config: { predefinedOptions: { options: [] } } });
        case PropertyType.Array:
            return PropertyOptionsFactory.arrayPropertyOption<DynamicListFormItem>({ displayName: propertyName, config: {  } });
    }
    return {};
}

const getName = (name: string) : string => {
    if (name == null || name == "") return "Noname";
    return name;
}

// TODO: refactor the shit out of this (ewi)
const parseSingleProperty = (jsonPropertySchema: IJsonPropertySchema, formSchema: IFormSchema<DynamicListFormItem>, nested?: boolean) : void => {
    const name: string = getName(jsonPropertySchema.Name);
    let type = mappings[jsonPropertySchema.Type];

    const isList = jsonPropertySchema.Type === "List";
    // list of simple objects (ie. string, number, boolean)
    if (isList && (jsonPropertySchema as IJsonMemberSchema).Properties === undefined && !jsonPropertySchema.ElementType?.Properties?.length) {
        type = PropertyType.Array;
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
        type = PropertyType.FormItem;
        skipValidation = true; // skip validation for complex type's root
    }

    // more array
    if (type == PropertyType.Array) {
        const dynamicArrayConfig = (options as IFormItemPropertyOptions<DynamicListFormItem, IDynamicArrayFieldConfig>).config;
        if (dynamicArrayConfig != null)
            dynamicArrayConfig.propertyType = mappings[jsonPropertySchema.ElementType.Type];
    }

    // handle enums
    if (type == PropertyType.PredefinedArray) {
        const arrayOptions = options as IFormItemPropertyOptions<DynamicListFormItem, IDynamicPredefinedArrayFieldConfig>;
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
    if (type == PropertyType.FormItem) {
        if (isList) {
            const listFormSchema = { options: { properties: { }, validation: { validationRules: { } } } } as IFormSchema<DynamicListFormItem>;
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
                propertyType: PropertyType.FormItem,
                config: {
                    itemType: DynamicListFormItem,
                    overrideSchema: listFormSchema as IFormSchema<DynamicListFormItem>
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
        formSchema.options.validation.validationRules[name] = { id: "required", validationMark: ValidationMark.Required, validationRule: (item: DynamicListFormItem) => item[name] != null &&  item[name] != "", validationMessage: `'${name}' is required`, validateOn: ValidationEventType.Manual }
    }
}

export const PluginSchemaParser = (jsonSchema: any) : IFormSchema<DynamicListFormItem> | undefined => {
    if (jsonSchema == null) return undefined;
    const formSchema = { options: { properties: { }, validation: { validationRules: { } } } } as IFormSchema<DynamicListFormItem>;

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