import { IFormItem } from "@wiberg/formbuilder";

export interface IMyIdValueListFormItem extends IFormItem {
    id: number;
    name: string;
    userId: string;
    userIdAsString: string;
    typeId: string;
    typeAsString: string;
}