import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface IFullListFormItem extends IFormItem {
    id: string;
    firstname: string;
    age: number;
    awesome: boolean;
    custom: string;
    start: Date;
    endpoints: Array<IFullListFormChildItem>;
}

export interface IFullListFormChildItem extends IFormItem {
    endpoint: string;
    url: string;
}