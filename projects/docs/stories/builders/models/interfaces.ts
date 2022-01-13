import { IFormItem } from "@wiberg/formbuilder";

export interface IMyFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
}
