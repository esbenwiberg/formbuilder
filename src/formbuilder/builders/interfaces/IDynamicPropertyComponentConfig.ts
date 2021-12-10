import { IFormSchema } from "../../models/schema/IFormSchema";

export interface IDynamicPropertyComponentConfig {
    // just a marker interface
    [key: string]: string | keyof IDynamicPropertyComponentConfig | any | undefined;
    //** USE WITH CAUTION!! Is hardly ever needed (only for super dynamic stuff) */
    overrideSchema?: IFormSchema<any>;
}