import { IFormItem } from "../../../../formbuilder/interfaces/form/IFormItem";

export interface IMyIdValueListFormItem extends IFormItem {
    id: number;
    name: string;
    userId: string;
    userAsString: string;
    typeId: string;
    typeAsString: string;
}