import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { MyDynamicSchemaProvider } from "./MyDynamicSchemaProvider";

@IFormItem.register(MyDynamicSchemaProvider)
export class MyDynamicFormItem {
    public id?: string;
    public name?: string;
    public key?: string;
}