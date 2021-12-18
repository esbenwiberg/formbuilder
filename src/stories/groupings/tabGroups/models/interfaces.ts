import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface IMyTabGroupedFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
    awesome?: boolean;
}