import { IFormListColumnsPicks } from "./lists/IFormBuilderListColumns";

export interface IPropertyOverrides<T> {
    /** array of properties to disable - or 'true' for all */
    disabledProps?: Array<string> | boolean;
    /** array of properties to hide */
    hiddenProps?: IFormListColumnsPicks<T>;
}