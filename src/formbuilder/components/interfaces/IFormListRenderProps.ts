import { IDynamicPropertyComponentConfig } from "../../builders/interfaces/IDynamicPropertyComponentConfig";
import { IFormListColumnInfo } from "../../interfaces/lists/IFormListColumnInfo";
import { IFormItemPropertyOptions } from "../../models/options/IFormItemPropertyOptions";
import { IFormItem } from "../../modules/IFormItem";
import { IFormListProps } from "./IFormListProps";

export interface IFormListRenderProps<T extends IFormItem> extends IFormListProps<T> {
    onItemChange: (item: T) => void;
    
    filteredItems: Array<T>;
    selectedItems: Array<T>;
    
    deleteItems: (pre?: (items: Array<T>) => boolean | void) => boolean | void;
    columnValueRender?: (propInfo: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig>) => ((item: T, onChange: (item: IFormItem) => void) => string | JSX.Element | undefined) | undefined;

    columns: Array<IFormListColumnInfo>;

    updateItems: (items: Array<T>) => void;
    updateFilteredItems: (items: Array<T>) => void;
    updateSelectedItems: (items: Array<T>) => void;
    sortColumn: (column: IFormListColumnInfo) => void;
}