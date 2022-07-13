import { FormListColumnsPickType } from "../..";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { IFormItemOptions } from "../../interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { SchemaProvider } from "../../interfaces/schema/ISchemaProvider";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { mergeDeep } from "./MergeObjects";
// import { formSchemaUtil } from "./FormSchemaUtil";

// export const fetchSchemaFromMap = async <T extends IFormItem>(schemaMapKey: string, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides<T>, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
//     let schema = await formSchemaUtil.getSchemaFromMap<T>(schemaMapKey, dynamicKey);
//     return mergeSchema(schema, formItemConfigOverrides, propertyOverrides, dynamicKey);
// };

export const fetchSchema = async <T extends IFormItem>(schemaProvider: SchemaProvider<T>, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides<T>, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
    let schema = await schemaProvider(dynamicKey);
    return mergeSchema(schema, formItemConfigOverrides, propertyOverrides, dynamicKey);
};

export const mergeSchema = <T extends IFormItem>(schema: IFormSchema<T> | undefined, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides<T>, dynamicKey?: string) : IFormSchema<T> | undefined => {
    if (schema == null) return undefined;
    // merge with overrides
    let merged: IFormItemOptions<T> = mergeDeep<IFormItemOptions<T>>(schema, formItemConfigOverrides);
    // property overrides
    let disabledOverrides = propertyOverrides?.disabledProps;
    let hiddenOverrides = propertyOverrides?.hiddenProps;
    Object.keys(merged.properties).forEach(_ => {
        if (disabledOverrides != null) {
            let disable = merged.properties[_].disable;
            if (Array.isArray(disabledOverrides) ){
                
                if (disabledOverrides.indexOf(_) >= 0) {
                    disable = () => true;
                }
            }
            else {
                disable = () => !!disabledOverrides;
            }

            merged.properties[_].disable = disable;
        }
        
        if (hiddenOverrides != null) {
            const found = hiddenOverrides.columns.indexOf(_) >= 0;
            if (hiddenOverrides.pickType == FormListColumnsPickType.Only) {
                merged.properties[_].hide = () => found;
            }
            else if (hiddenOverrides.pickType == FormListColumnsPickType.Without) {
                merged.properties[_].hide = () => !found;
            }
        }
    })
    
    return merged;
};