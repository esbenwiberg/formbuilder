import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

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