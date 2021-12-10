import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { DynamicListFormItemSchemaProvider } from "./DynamicListFormItemSchemaProvider";

@IFormItem.register(DynamicListFormItemSchemaProvider)
export class DynamicListFormItem {
   // no props needed (all is fetched on the fly)
   [key: string]: string | keyof DynamicListFormItemSchemaProvider | any | undefined;
}