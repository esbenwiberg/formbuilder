import { IFormItem } from "@wiberg/formbuilder";

export interface IPluginFormItem extends IFormItem {
    id: string;
    name: string;
    description: string;
}

export interface IDynamicListFormItem extends IFormItem {
    // no props needed (all is fetched on the fly)
    [key: string]: string | keyof IDynamicListFormItem | any | undefined;
}