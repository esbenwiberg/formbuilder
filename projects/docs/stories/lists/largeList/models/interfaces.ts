import { IFormItem } from "@wiberg/formbuilder";

export interface ILargeListFormItem extends IFormItem {
    id: number;
    name: string;
    age: number;
    awesome: boolean;
    start: Date;
}