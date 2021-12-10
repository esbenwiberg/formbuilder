import { IFormItem } from "../../modules/IFormItem";

export interface IFormItemListItemOptions<T> {
    customValueRender?: (item: T, onChange: (item: IFormItem) => void) => JSX.Element | string | undefined;
    minWidth?: number;
    isResizable?: boolean;
}