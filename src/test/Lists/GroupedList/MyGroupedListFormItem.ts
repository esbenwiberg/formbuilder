import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { MyGroupedListFormItemSchemaProvider } from "./MySimpleListFormItemSchemaProvider";

@IFormItem.register(MyGroupedListFormItemSchemaProvider)
export class MyGroupedListFormItem {
    public id?: string;
    public name?: string;
    public age?: number;
    public awesome?: boolean;
    public custom?: string;
    public start?: Date;
}