import { IFormItem } from "../../modules/IFormItem";
import { IFormItemOptions } from "../options/IFormItemOptions";

export interface IFormSchema<T extends IFormItem> {
    options: IFormItemOptions<T>;
}