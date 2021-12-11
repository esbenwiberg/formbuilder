import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { AnotherFormItemSchemaProvider } from "./AnotherFormItemSchemaProvider";

@IFormItem.register(AnotherFormItemSchemaProvider)
export class AnotherFormItem {
    public id?: string;
    public name?: string;
    public awesome?: boolean;
}