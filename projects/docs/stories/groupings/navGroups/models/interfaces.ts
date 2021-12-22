import { IFormItem } from "@wiberg/formbuilder";

export interface IMyNavGroupedFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
    awesome?: boolean;
}