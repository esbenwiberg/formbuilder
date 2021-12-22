import { IFormItem } from "@wiberg/formbuilder";

export interface IMyTabGroupedFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
    awesome?: boolean;
}