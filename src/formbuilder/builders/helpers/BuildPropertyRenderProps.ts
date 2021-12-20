import { IDynamicPropertyComponentConfig, IFormItem, IFormItemPropertyOptions, IItemRenderProps, IPropertyRenderProps } from "../..";
import { validationUtil } from "../../utils/common/ValidationUtil";

export const buildPropertyRenderInfo = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(renderProps: IItemRenderProps<T>,  schema: IFormItemPropertyOptions<T, C>, propertyName: string) : { props: IPropertyRenderProps<T, C, any>, key: string } => {
    let { item, onChange, onBlur, validationResults, validationResultPrefix } = renderProps;

    let validationIndexer = validationResultPrefix ? `${validationResultPrefix}.${propertyName}` : propertyName;
    let key = `prop-${validationResultPrefix ?? ""}${propertyName}`;

    let props: IPropertyRenderProps<T, C, any> = {
        key: schema.key ?? key,
        value: (item as any)[propertyName],
        options: schema,
        onChange: (value: any) => onChange(propertyName ,value),
        onBlur: (value: any) => onBlur(propertyName, value),
        disabled: schema.disable ? schema.disable(item) : false,
        errorMessage: validationUtil.getResultAsString(validationResults[validationIndexer]),
        parent: item
    }

    return { props, key };
}