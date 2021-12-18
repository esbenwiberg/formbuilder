import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface ILargeListFormItem extends IFormItem {
    id: number;
    name: string;
    age: number;
    awesome: boolean;
    start: Date;
}