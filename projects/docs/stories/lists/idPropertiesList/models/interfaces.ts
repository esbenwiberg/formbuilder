import { IFormItem } from "@wiberg/formbuilder";

export interface IMyIdValueListFormItem extends IFormItem {
    id: number;
    name: string;
    userId: string;
    userAsString: string;
    typeId: string;
    typeAsString: string;
}