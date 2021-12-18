import { IDynamicComponentConfig } from "../builders/custom/config/IDynamicComponentConfig";
import { IFormItemComponentConfig } from "../builders/custom/config/IFormItemComponentConfig";
import { IDynamicArrayFieldConfig } from "../builders/custom/config/IDynamicArrayFieldConfig";
import { IFormItemPropertyOptions } from "../interfaces/options/IFormItemPropertyOptions";
import { IDynamicBooleanConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicBooleanConfig";
import { IDynamicDateFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicDateFieldConfig";
import { IDynamicJsonFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicJsonfieldConfig";
import { IDynamicPredefinedArrayFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicPredefinedArrayFieldConfig";
import { IDynamicTextFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicTextfieldConfig";
import { AtLeast } from "../interfaces/types/Partials";
import { IFormItem } from "../interfaces/form/IFormItem";

export const propertyOptionsFactory = {
    stringPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>> => {
        options.propertyType = "string";
        return options;
    },

    numberPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig<T>>> => {
        options.propertyType = "number";
        // TODO: why no work (ewi)
        // options.config ??= {};
        if (!options.config) options.config = {};
        options.config.type = "number";
        return options;
    },

    datePropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicDateFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicDateFieldConfig<T>>> => {
        options.propertyType = "date";
        return options;
    },

    booleanPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicBooleanConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicBooleanConfig<T>>> => {
        options.propertyType = "boolean";
        return options;
    },

    customComponentPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicComponentConfig<T>, "component">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicComponentConfig<T>>> => {
        options.propertyType = "custom";
        return options;
    },

    formItemPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IFormItemComponentConfig<T>, "schemaConfig">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IFormItemComponentConfig<T>>> => {
        options.propertyType = "formItem";
        return options;
    },

    jsonPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig<T>>> => {
        options.propertyType = "json";
        return options;
    },

    predefinedArrayPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicPredefinedArrayFieldConfig<T>, "predefinedOptions">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicPredefinedArrayFieldConfig<T>>> => {
        options.propertyType = "predefinedArray";
        return options;
    },

    arrayPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig<T>>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig<T>>> => {
        options.propertyType = "array";
        return options;
    }
}