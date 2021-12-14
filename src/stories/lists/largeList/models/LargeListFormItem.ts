import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { LargeListFormItemSchemaProvider } from "./LargeListFormItemSchemaProvider";

@IFormItem.register(LargeListFormItemSchemaProvider)
export class LargeListFormItem {
    public id?: number;
    public name?: string;
    public age?: number;
    public awesome?: boolean;
    public start?: Date;
}