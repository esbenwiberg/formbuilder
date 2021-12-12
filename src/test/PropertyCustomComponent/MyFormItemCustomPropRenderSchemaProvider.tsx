import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { IFormItemOptions } from "../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { propertyOptionsFactory } from "../../formbuilder/utils/PropertyOptionsFactory";
import { PropertyGroupOptionsFactory } from "../../formbuilder/utils/PropertyGroupOptionsFactory";
import { ValidationEventType } from "../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../formbuilder/models/validation/ValidationMark";
import { MyFormItemCustomPropRender } from "./MyFormItemCustomPropRender";
import MyCustomComponent from "./MyCustomComponent";

export class MyFormItemCustomPropRenderSchemaProvider extends SchemaProvider<MyFormItemCustomPropRender> {

    public override key = "MyFormItemCustomPropRender";
    public override itemType = () => MyFormItemCustomPropRender

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        var schema: IFormSchema<MyFormItemCustomPropRender> = {
            options: {
                validation: {
                    validationRules: {
                        name: { id: "mustbeesben", validationMark: ValidationMark.Required, validationRule: (item: MyFormItemCustomPropRender) => item.name === "Esben", validationMessage: "Your name must be 'Esben'", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                        age: { id: "lessthanforthy", validationMark: ValidationMark.Required, validationRule: (item: MyFormItemCustomPropRender) => (item.age ?? 0) < 40, validationMessage: "You must be less than 40 years old", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: {
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", config: { resizable: true }, description: "This is an explanation of what this property does.." }),
                    age: propertyOptionsFactory.numberPropertyOption({ displayName: "This age", hideLabel: true, config: { allowNegativeNumbers: true } }),
                    custom: propertyOptionsFactory.customComponentPropertyOption({ displayName: "This is rendered by a custom component", config: { component: MyCustomComponent, test: "This is a static variable passed down from the prop config" }}),
                } 
            } as IFormItemOptions<MyFormItemCustomPropRender>
        }

        return schema as IFormSchema<IFormItem>;
    }
}