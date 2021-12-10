import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { MyTabGroupedFormItemSchemaProvider } from "./MyTabGroupedFormItemSchemaProvider";

@IFormItem.register(MyTabGroupedFormItemSchemaProvider)
export class MyTabGroupedFormItem {
    public id?: string;
    public name?: string;
    public age?: number;
    public awesome?: boolean;
    public test?: string;
}