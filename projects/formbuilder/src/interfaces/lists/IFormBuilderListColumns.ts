export interface IFormBuilderListColumns<T> {
    columnOrder?: Array<keyof T>;
    // customColumns?: Array<any>;
    columnsPicks?: IFormListColumnsPicks<T>;
    resizableColumns?: Array<keyof T> | true;
    columnWidths?: Array<{column: string, width: number}> | number;
    customSort?: (itemA: T, itemB: T, property: string, isSortedDescending?: boolean) => number;
}

export enum FormListColumnsPickType { Only, Without }
export interface IFormListColumnsPicks<T> {
    columns: Array<keyof T>;
    pickType: FormListColumnsPickType;
}