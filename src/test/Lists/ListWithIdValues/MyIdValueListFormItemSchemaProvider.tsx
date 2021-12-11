import { IFormItem } from "../../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../../formbuilder/models/schema/ISchemaProvider";
import { PropertyOptionsFactory } from "../../../formbuilder/utils/PropertyOptionsFactory";
import { MyIdValueListFormItem } from "./MyIdValueListFormItem";

export class MyIdValueListFormItemSchemaProvider extends SchemaProvider<MyIdValueListFormItem> {

    public key = "MySimplteListFormItem";
    public itemType = () => MyIdValueListFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        const schema: IFormSchema<MyIdValueListFormItem> = {
            options: {
                properties: {
                    name: PropertyOptionsFactory.stringPropertyOption({ displayName: "This name", description: "This is an explanation of what this property does.." }),
                    userId: PropertyOptionsFactory.stringPropertyOption({ displayName: "This user", listItemOptions: { customValueRender: (item: MyIdValueListFormItem) => item.userAsString } }),
                    typeId: PropertyOptionsFactory.stringPropertyOption({ displayName: "This type", listItemOptions: { customValueRender: (item: MyIdValueListFormItem) => item.typeAsString } })
                } 
            } as IFormItemOptions<MyIdValueListFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}