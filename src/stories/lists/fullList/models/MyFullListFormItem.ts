import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MyFullListFormChildItem } from "./MyFullListFormChildItem";
import { MyFullListFormItemSchemaProvider } from "./MyFullListFormItemSchemaProvider";

@IFormItem.register(MyFullListFormItemSchemaProvider)
export class MyFullListFormItem {
    public id?: string;
    public firstname?: string;
    public age?: number;
    public awesome?: boolean;
    public custom?: string;
    public start?: Date;
    public endpoints?: Array<MyFullListFormChildItem>;
}