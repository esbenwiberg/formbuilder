import { IFormGrouping } from "../../interfaces/IFormGrouping";
import { IFormSchema } from "../../models/schema/IFormSchema";
import { ValidationOverride } from "../../models/validation/ValidationOverride";
import { IFormItem } from "../../modules/IFormItem";
import { IFormBuilderListProps } from "../FormBuilder";

export interface IFormListProps<T extends IFormItem> {
    itemType: new () => T;
    items: Array<T>;
    schema: IFormSchema<T>;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    listProps: IFormBuilderListProps<T>;
    keyPrefix?: string;
}