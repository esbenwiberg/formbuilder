import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { MyNavGroupedFormItemSchemaProvider } from "./MyTabGroupedFormItemSchemaProvider";

@IFormItem.register(MyNavGroupedFormItemSchemaProvider)
export class MyNavGroupedFormItem {
    public id?: string;
    public name?: string;
    public age?: number;
    public awesome?: boolean;
    public test?: string;
}