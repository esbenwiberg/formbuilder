import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface IMyNavGroupedFormItem extends IFormItem {
    id: string;
    name: string;
    age: number;
    awesome?: boolean;
}