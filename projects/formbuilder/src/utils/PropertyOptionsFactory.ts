import { IDynamicComponentConfig } from "../builders/custom/config/IDynamicComponentConfig";
import { IFormItemComponentConfig } from "../builders/custom/config/IFormItemComponentConfig";
import { IDynamicArrayFieldConfig } from "../builders/custom/config/IDynamicArrayFieldConfig";
import { IFormItemPropertyOptions } from "../interfaces/options/IFormItemPropertyOptions";
import { AtLeast } from "../interfaces/types/Partials";
import { IFormItem } from "../interfaces/form/IFormItem";
import { IDynamicDateFieldConfig } from "../interfaces/fieldconfig/IDynamicDateFieldConfig";
import { IDynamicTextFieldConfig } from "../interfaces/fieldconfig/IDynamicTextfieldConfig";
import { IDynamicBooleanConfig } from "../interfaces/fieldconfig/IDynamicBooleanConfig";
import { IDynamicJsonFieldConfig } from "../interfaces/fieldconfig/IDynamicJsonfieldConfig";
import { IDynamicPredefinedArrayFieldConfig } from "../interfaces/fieldconfig/IDynamicPredefinedArrayFieldConfig";

export const propertyOptionsFactory = {
    string: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>> => {
        options.propertyType = "string";
        return options;
    },

    number: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>> => {
        options.propertyType = "number";
        // TODO: why no work (ewi)
        // options.config ??= {};
        if (!options.config) options.config = {};
        options.config.type = "number";
        return options;
    },

    date: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicDateFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicDateFieldConfig<T>>> => {
        options.propertyType = "date";
        return options;
    },

    boolean: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicBooleanConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicBooleanConfig<T>>> => {
        options.propertyType = "boolean";
        return options;
    },

    customComponent: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicComponentConfig<T>, "component">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicComponentConfig<T>>> => {
        options.propertyType = "custom";
        return options;
    },

    formItem: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IFormItemComponentConfig<T>, "schemaConfig">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IFormItemComponentConfig<T>>> => {
        options.propertyType = "formItem";
        return options;
    },

    json: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig<T>>> => {
        options.propertyType = "json";
        return options;
    },

    predefinedArray: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicPredefinedArrayFieldConfig<T>, "predefinedOptions">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicPredefinedArrayFieldConfig<T>>> => {
        options.propertyType = "predefinedArray";
        return options;
    },

    array: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig<T>>> => {
        options.propertyType = "array";
        return options;
    }
}