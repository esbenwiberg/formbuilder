import { lang } from "../models/language/Language";
import { IFormSchema } from "../models/schema/IFormSchema";
import { IFormItem } from "../modules/IFormItem";

export class FormSchemaUtil {
    public static GetSchemaFromItem = async <T extends IFormItem>(type: new () => T, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
        let schemaType = IFormItem.getSchemaProvider(type) as any;
        if (schemaType == null) {
            console.error(`${lang.texts.areas.common.schemaNotFound} Make sure to register your schema provider using the '@IFormItem.register' method.`);
            return undefined;
        }
        let schema = new schemaType.provider();
        return await schema.getSchema(dynamicKey);
    }
}