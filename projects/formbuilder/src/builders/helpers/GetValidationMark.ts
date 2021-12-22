import { IFormItem, IItemRenderProps, ValidationMark } from "../.."
import { getPropertyValidationMark } from "../../utils/common/PropertyValidationMark"

export const getValidationMarkForProperty = <T extends IFormItem>(itemRenderProps: IItemRenderProps<T>, propertyName: string) : ValidationMark => {
    return getPropertyValidationMark(itemRenderProps?.schema?.validation?.validationRules && itemRenderProps.schema.validation.validationRules[propertyName]);
}