import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { MyFormItemCustomPropRenderSchemaProvider } from "./MyFormItemCustomPropRenderSchemaProvider";

@IFormItem.register(MyFormItemCustomPropRenderSchemaProvider)
export class MyFormItemCustomPropRender {
    public id?: string;
    public name?: string;
    public age?: number;
    public custom?: string;
}