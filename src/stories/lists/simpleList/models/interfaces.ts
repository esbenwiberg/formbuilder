import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface ISimpleListFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
    awesome: boolean;
    custom: string;
    start: Date;
}
