import { IFormItem } from "../form/IFormItem";
import { IFormItemOptions } from "../options/IFormItemOptions";

export interface IFormSchema<T extends IFormItem> {
    options: IFormItemOptions<T>;
}