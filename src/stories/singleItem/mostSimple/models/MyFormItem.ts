import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MyFormItemChildSchemaProvider } from "./MyFormItemSchemaProvider";

@IFormItem.register(MyFormItemChildSchemaProvider)
export class MyFormItem {
    public id?: string;
    public name?: string;
    public age?: number;
}