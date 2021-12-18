import { IFormItem } from "../form/IFormItem";

export interface IFormItemListItemOptions<T> {
    /** if the property needs to render the property value differently in a list column */
    customValueRender?: (item: T, onChange: (item: IFormItem) => void) => JSX.Element | string | undefined;
    /** the min width of the propery's column in a list */
    minWidth?: number;
    /** if the property's column in a list is resizable */
    isResizable?: boolean;
}