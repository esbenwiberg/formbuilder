import { IFormItemOptions } from "../../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../../formbuilder/models/schema/ISchemaProvider";
import { IFormItem } from "../../../../formbuilder/modules/IFormItem";
import { MyIdValueListFormItem } from "./MyIdValueListFormItem";
import { propertyOptionsFactory } from "../../../../formbuilder/utils/PropertyOptionsFactory";

export class MyIdValueListFormItemSchemaProvider extends SchemaProvider<MyIdValueListFormItem> {

    public key = "MySimplteListFormItem";
    public itemType = () => MyIdValueListFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyIdValueListFormItem> = {
            options: {
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    userId: propertyOptionsFactory.stringPropertyOption({ displayName: "This user", listItemOptions: { customValueRender: (item: MyIdValueListFormItem) => item.userAsString } }),
                    typeId: propertyOptionsFactory.stringPropertyOption({ displayName: "This type", listItemOptions: { customValueRender: (item: MyIdValueListFormItem) => item.typeAsString } })
                } 
            } as IFormItemOptions<MyIdValueListFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}