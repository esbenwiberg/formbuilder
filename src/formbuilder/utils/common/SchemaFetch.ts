import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { IFormItemOptions } from "../../models/options/IFormItemOptions";
import { IFormSchema } from "../../models/schema/IFormSchema";
import { IFormItem } from "../../modules/IFormItem";
import { FormSchemaUtil } from "./FormSchemaUtil";
import { mergeDeep } from "./MergeObjects";

export const fetchSchema = async <T extends IFormItem>(itemType: new () => IFormItem, formItemConfigOverrides?: Partial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides, dynamicKey?: string) : Promise<IFormSchema<IFormItem> | undefined> => {
    let schema = await FormSchemaUtil.GetSchemaFromItem(itemType, dynamicKey);
    if (schema == null) return undefined;
    // merge with overrides
    let merged: IFormItemOptions<T> = mergeDeep<IFormItemOptions<T>>(schema?.options, formItemConfigOverrides);
    // property overrides
    let disabledOverrides = propertyOverrides?.disabledProps;
    let hiddenOverrides = propertyOverrides?.hiddenProps;
    Object.keys(merged.properties).forEach(_ => {
        if (disabledOverrides != null) {
            let disable = false;
            if (Array.isArray(disabledOverrides) && disabledOverrides.indexOf(_) >= 0)
                disable = true;
            else
                disable = !!disabledOverrides;
            if (disable) merged.properties[_].disable = () => true;
        }
        if (hiddenOverrides != null && hiddenOverrides.indexOf(_) >= 0) {
            merged.properties[_].hide = () => true;
        }
    })
    
    schema.options = merged as any;
    return schema;
};