import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { IFormListColumnInfo } from "../../interfaces/lists/IFormListColumnInfo";
import { IFormItemPropertyOptions } from "../../interfaces/options/IFormItemPropertyOptions";
import { IFormListProps } from "./IFormListProps";

export interface IFormListRenderProps<T extends IFormItem> extends IFormListProps<T> {
    onItemChange: (item: T) => void;
    
    filteredItems: Array<T>;
    selectedItems: Array<T>;
    
    deleteItems: (pre?: (items: Array<T>) => boolean | void) => boolean | void;
    columnValueRender?: (propInfo: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>>) => ((item: T, onChange: (item: IFormItem) => void) => string | JSX.Element | undefined) | undefined;

    columns: Array<IFormListColumnInfo>;

    updateItems: (items: Array<T>) => void;
    updateFilteredItems: (items: Array<T>) => void;
    updateSelectedItems: (items: Array<T>) => void;
    sortColumn: (column: IFormListColumnInfo) => void;
}