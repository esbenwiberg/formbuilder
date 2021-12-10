import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { MyIdValueListFormItemSchemaProvider } from "./MyIdValueListFormItemSchemaProvider";

@IFormItem.register(MyIdValueListFormItemSchemaProvider)
export class MyIdValueListFormItem {
    public id?: string;
    public name?: string;
    public userId?: string;
    public userAsString?: string;
    public typeId?: string;
    public typeAsString?: string;
}