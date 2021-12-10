import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { AnotherFormItem } from "./AnotherFormItem";
import { MyFormItemChildSchemaProvider } from "./MyFormItemSchemaProvider";

@IFormItem.register(MyFormItemChildSchemaProvider)
export class MyFormItemChild {
    public id?: string;
    public name?: string;
    public age?: number;
    public childs?: Array<AnotherFormItem>;
}