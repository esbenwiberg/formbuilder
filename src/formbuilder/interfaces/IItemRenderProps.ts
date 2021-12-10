import { IFormItemOptions } from "../models/options/IFormItemOptions";
import { IValidationResult } from "../models/validation/IValidationResult";
import { IFormItem } from "../modules/IFormItem";
import { IPropertyOverrides } from "./IPropertyOverrides";

export interface IItemRenderProps<T extends IFormItem> {
    item: T;
    schema: IFormItemOptions<T>;
    onChange: (prop: string, value: any) => void;
    onBlur: (property: string, value: any) => void;
    propertyOverrides?: IPropertyOverrides;
    validationResults: IValidationResult;
    validationResultPrefix?: string;
    parentItem?: Readonly<IFormItem>;
}