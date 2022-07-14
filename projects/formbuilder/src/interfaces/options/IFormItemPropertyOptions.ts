import { IPropertyTypes } from "../../models/property/PropertyType";
import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItemListItemOptions } from "./IFormItemListItemOptions";
import { IFormBuilderListProps } from "../../components/FormBuilder";
import { IFormItem } from "../form/IFormItem";
import { IValidation } from "../../_new/IValidation";
import { IValidationConfig } from "../../models/validation/IValidationConfig";
import { IValidationRule } from "../../models/validation/IValidationRules";

export interface IFormItemPropertyOptions<T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>> {
    /** the key of the property */
    key?: string
    /** the property's diplay name */
    displayName: string;
    /** the typoe of the property */
    propertyType: keyof IPropertyTypes;
    /** the property's description */
    description?: string;
    /** function used to define if the property should be hidden */
    hide?: (item: T) => boolean | undefined;
    /** function used to define if the property should be disabled */
    disable?: (item: T) => boolean;
    /** determines whether the label should be hidden */
    hideLabel?: boolean;
    /** dynamic config depending on which type of property it is */
    config?: C | undefined;
    /** the internal name of the group this property should be in */
    group?: string;
    /** options used for rendering the value in a list column (primarily used for dates, complex objects and array values) */
    listItemOptions?: IFormItemListItemOptions<T>;
    /** this should be used when a property is a list. these settings determines how the property list should act */
    listProps?: IFormBuilderListProps<IFormItem & any>;
    /** event that fires on property value change (used to change other property values when changing a property value) (or when you need to change a dynamic schema based on a property value) */
    onChanged?: (item: T) => { refreshDynamicSchema?: boolean };
    /** validation for the property (can either return a string or use a custom validator) */
    validation?: IValidationRule<T> | Array<IValidationRule<T>>;
}
