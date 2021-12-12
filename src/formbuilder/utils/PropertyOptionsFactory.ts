import { IDynamicComponentConfig } from "../builders/custom/config/IDynamicComponentConfig";
import { IFormItemComponentConfig } from "../builders/custom/config/IFormItemComponentConfig";
import { IDynamicArrayFieldConfig } from "../builders/custom/config/IDynamicArrayFieldConfig";
import { IFormItemPropertyOptions } from "../models/options/IFormItemPropertyOptions";
import { PropertyType } from "../models/property/PropertyType";
import { IFormItem } from "../modules/IFormItem";
import { AtLeast } from "./Partials";
import { IDynamicBooleanConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicBooleanConfig";
import { IDynamicDateFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicDateFieldConfig";
import { IDynamicJsonFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicJsonfieldConfig";
import { IDynamicPredefinedArrayFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicPredefinedArrayFieldConfig";
import { IDynamicTextFieldConfig } from "../builders/fluentUI/components/dynamicComponents/config/IDynamicTextfieldConfig";

export const propertyOptionsFactory = {
    stringPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig>> => {
        options.propertyType = PropertyType.String;
        return options;
    },

    numberPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicTextFieldConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicTextFieldConfig>> => {
        options.propertyType = PropertyType.Number;
        // TODO: why no work (ewi)
        // options.config ??= {};
        if (!options.config) options.config = {};
        options.config.type = "number";
        return options;
    },

    datePropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicDateFieldConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicDateFieldConfig>> => {
        options.propertyType = PropertyType.Date;
        return options;
    },

    booleanPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicBooleanConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicBooleanConfig>> => {
        options.propertyType = PropertyType.Boolean;
        return options;
    },

    customComponentPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicComponentConfig, "component">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicComponentConfig>> => {
        options.propertyType = PropertyType.Custom;
        return options;
    },

    formItemPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IFormItemComponentConfig, "itemType">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IFormItemComponentConfig>> => {
        options.propertyType = PropertyType.FormItem;
        return options;
    },

    jsonPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicJsonFieldConfig>> => {
        options.propertyType = PropertyType.Json;
        return options;
    },

    predefinedArrayPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, AtLeast<IDynamicPredefinedArrayFieldConfig, "predefinedOptions">>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicPredefinedArrayFieldConfig>> => {
        options.propertyType = PropertyType.PredefinedArray;
        return options;
    },

    arrayPropertyOption: <T extends IFormItem>(options: AtLeast<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig>, "displayName">) : Partial<IFormItemPropertyOptions<T, IDynamicArrayFieldConfig>> => {
        options.propertyType = PropertyType.Array;
        return options;
    }
}