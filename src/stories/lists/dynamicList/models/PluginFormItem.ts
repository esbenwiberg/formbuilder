import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { PluginSchemaProvider } from "./PluginSchemaProvider";

@IFormItem.register(PluginSchemaProvider)
export class PluginFormItem {
    public id?: string;
    public name?: string;
    public description?: string;
}