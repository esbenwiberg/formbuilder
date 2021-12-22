import { IFormItem } from "@wiberg/formbuilder";

export interface IMyFormItemChild extends IFormItem {
    id: string;
    name: string;
    age: number;
    child: IAnotherFormItem;
}

export interface IAnotherFormItem extends IFormItem {
    id: string;
    name: string;
    awesome?: boolean;
}