import { ISchemaConfig } from "../../components/FormBuilder";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { IPropertyOverrides } from "../../interfaces/IPropertyOverrides";
import { IFormItemOptions } from "../../interfaces/options/IFormItemOptions";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { fetchSchema } from "../common/SchemaFetch";

export const schemaFromConfig = async <T extends IFormItem>(schemaConfig: ISchemaConfig<T>, formItemConfigOverrides?: RecursivePartial<IFormItemOptions<T>>, propertyOverrides?: IPropertyOverrides<T>, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
    let schema: IFormSchema<T> | undefined = undefined;
    if (schemaConfig.schemaProvider != null)
        schema = await fetchSchema<T>(schemaConfig.schemaProvider, formItemConfigOverrides, propertyOverrides, dynamicKey);
    return schema;
}