export interface IFormListColumnInfo {
    key: string;
    name: string;
    fieldName?: string;
    minWidth: number;
    maxWidth?: number;
    isSorted?: boolean;
    isSortedDescending?: boolean;
    isResizable?: boolean;
    onRender?: (item?: any, index?: number, column?: IFormListColumnInfo) => any;
    isFiltered?: boolean;
}