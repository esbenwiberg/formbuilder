import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface IMyFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
}
