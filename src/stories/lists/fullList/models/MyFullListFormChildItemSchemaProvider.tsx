import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { ValidationEventType } from "../../../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../../../formbuilder/models/validation/ValidationMark";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";
import { MyFullListFormChildItem } from "./MyFullListFormChildItem";

export class MyFullListFormChildItemSchemaProvider extends SchemaProvider<MyFullListFormChildItem> {

    public key = "MyFullListFormItem";
    public itemType = () => MyFullListFormChildItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyFullListFormChildItem> = {
            options: {
                validation: {
                    validationRules: {
                        url: {
                            id: "validurl",
                            validateOn: ValidationEventType.Change | ValidationEventType.Blur | ValidationEventType.Manual,
                            validationMessage: "Not correct specified url",
                            validationRule: item => {
                                if (item.url == null) return false;
                                const regex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi);
                                return regex.test(item.url);
                            },
                            validationMark: ValidationMark.Required
                        }
                    }
                },
                properties: {
                    endpoint: propertyOptionsFactory.stringPropertyOption({ displayName: "Endpoint", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true } }),
                    url: propertyOptionsFactory.stringPropertyOption({ displayName: "Url", config: { resizable: true }, description: "This is an explanation of what this property does..", listItemOptions: { isResizable: true } })
                } 
            } as IFormItemOptions<MyFullListFormChildItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}