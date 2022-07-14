// import { lang } from "../../models/language/Language";
// import { IFormSchema } from "../../interfaces/schema/IFormSchema";
// import { formbuilder } from "../..";
// import { IFormItem } from "../../interfaces/form/IFormItem";

// export const formSchemaUtil = {
//     getSchemaFromMap: async <T extends IFormItem>(schemaMapKey: string, dynamicKey?: string) : Promise<IFormSchema<T> | undefined> => {
//         let schemaProvider = formbuilder.getSchemaProvider(schemaMapKey) as any;
//         if (schemaProvider == null) {
//             console.error(`${lang.texts.areas.common.schemaNotFound} Make sure to register your schema provider using the 'formbuilder.registerSchemaProvider' function.`);
//             return undefined;
//         }
//         return await schemaProvider.getSchema(dynamicKey);
//     }
// }
export {};