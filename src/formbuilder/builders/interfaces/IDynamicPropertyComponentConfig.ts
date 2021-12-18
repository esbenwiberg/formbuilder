import { IFormItem } from "../../interfaces/form/IFormItem";
import { IFormSchema } from "../../interfaces/schema/IFormSchema";

export interface IDynamicPropertyComponentConfig<T extends IFormItem> {
    // just a marker interface
    [key: string]: string | keyof IDynamicPropertyComponentConfig<T> | any | undefined;
    //** USE WITH CAUTION!! Is hardly ever needed (only for super dynamic stuff) */
    overrideSchema?: IFormSchema<T>;
}