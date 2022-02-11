import { IFormItem } from "../../interfaces/form/IFormItem";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { IFormItemOptions } from "../../interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { ISchemaProvider } from "../../interfaces/schema/ISchemaProvider";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { formSchemaUtil } from "./FormSchemaUtil";
import { mergeDeep } from "./MergeObjects";

export const fetchSchemaFromMap = async <T extends IFormItem>(schemaMapKey: string, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
    let schema = await formSchemaUtil.getSchemaFromMap<T>(schemaMapKey, dynamicKey);
    return mergeSchema(schema, formItemConfigOverrides, propertyOverrides, dynamicKey);
};

export const fetchSchema = async <T extends IFormItem>(schemaProvider: ISchemaProvider<T>, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
    let schema = await schemaProvider.getSchema(dynamicKey);
    return mergeSchema(schema, formItemConfigOverrides, propertyOverrides, dynamicKey);
};

export const mergeSchema = <T extends IFormItem>(schema: IFormSchema<T> | undefined, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides, dynamicKey?: string) : IFormSchema<T> | undefined => {
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