import { IFormItemOptions } from "../../formbuilder/models/options/IFormItemOptions";
import { IFormSchema } from "../../formbuilder/models/schema/IFormSchema";
import { SchemaProvider } from "../../formbuilder/models/schema/ISchemaProvider";
import { ValidationEventType } from "../../formbuilder/models/validation/ValidationEventType";
import { ValidationMark } from "../../formbuilder/models/validation/ValidationMark";
import { IFormItem } from "../../formbuilder/modules/IFormItem";
import { propertyOptionsFactory } from "../../formbuilder/utils/PropertyOptionsFactory";
import { AnotherFormItem } from "./AnotherFormItem";


export class AnotherFormItemSchemaProvider extends SchemaProvider<AnotherFormItem> {

    public override key = "AnotherFormItem";
    public override itemType = () => AnotherFormItem

    public getSchema = async () : Promise<IFormSchema<IFormItem>> => {
        var schema: IFormSchema<AnotherFormItem> = {
            options: {
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        name: { id: "namelength", validationMark: ValidationMark.Required, validationRule: (item: AnotherFormItem) => (item.name?.length ?? 0) > 3, validationMessage: "Your name must be over 3 characters", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: { 
                    name: propertyOptionsFactory.stringPropertyOption({ displayName: "This name", group: "groupOne", config: { resizable: true } }),
                    awesome: propertyOptionsFactory.booleanPropertyOption({ displayName: "Are you awesome, sir?", group: "groupTwo", config: { asToggle: false, textIfTrue: "Si senor", textIfFalse: "Nopes, not really" }})
                } 
            } as IFormItemOptions<AnotherFormItem>
        }

        return schema as IFormSchema<IFormItem>;
    }
}