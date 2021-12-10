import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MyFullListFormChildItemSchemaProvider } from "./MyFullListFormChildItemSchemaProvider";

@IFormItem.register(MyFullListFormChildItemSchemaProvider)
export class MyFullListFormChildItem {
    public endpoint?: string;
    public url?: string;
}