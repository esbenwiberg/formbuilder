import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { AnotherFormItemSchemaProvider } from "./AnotherFormItemSchemaProvider";

@IFormItem.register(AnotherFormItemSchemaProvider)
export class AnotherFormItem {
    public idid?: string;
    public name?: string;
    public awesome?: boolean;
}