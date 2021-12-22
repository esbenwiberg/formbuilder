import { ISchemaConfig } from "../../components/FormBuilder";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { IFormItemOptions } from "../../interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { fetchSchema, fetchSchemaFromMap } from "../common/SchemaFetch";

export const schemaFromConfig = async <T extends IFormItem>(schemaConfig: ISchemaConfig<T>, formItemConfigOverrides?: Partial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
    let schema: IFormSchema<T> | undefined = undefined;
    if (schemaConfig.schemaProvider != null)
        schema = await fetchSchema<T>(schemaConfig.schemaProvider, formItemConfigOverrides, propertyOverrides, dynamicKey);
    else if (schemaConfig.registeredSchemaKey != null) {
        schema = await fetchSchemaFromMap<T>(schemaConfig.registeredSchemaKey, formItemConfigOverrides, propertyOverrides, dynamicKey);
        if (schema == null) throw Error("Schema not found in registered schemas. Please remember to register your schema by using 'formbuilder.registerSchema' or by supplying the schemaprovider directly in the formbuilder props using the 'schemaConfig' prop");
    }
    return schema;
}