import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MySimpleListFormItemSchemaProvider } from "./MySimpleListFormItemSchemaProvider";

@IFormItem.register(MySimpleListFormItemSchemaProvider)
export class MySimpleListFormItem {
    public id?: string;
    public name?: string;
    public age?: number;
    public awesome?: boolean;
    public custom?: string;
    public start?: Date;
}