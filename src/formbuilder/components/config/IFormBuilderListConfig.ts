import React from "react";
import { ValidationResult } from "../../models/validation/ValidationResult";
import { IFormItem } from "../../modules/IFormItem";

export interface IFormBuilderListConfig<T extends IFormItem> {
    itemIdentifier: (item: T) => string;
    onItemsChange?: (items: Array<T>) => void;
    listRender?: React.ElementType;
    multiSelect?: boolean;
    shimmerLines?: number;
    disableItemInvoke?: boolean;
}

export enum IFormListColumnsPickType { Only, Without }
export interface IFormListColumnsPicks {
    columns: Array<string>;
    pickType: IFormListColumnsPickType;
}

export interface IFormBuilderListColumns {
    columnOrder?: Array<string>;
    customColumns?: Array<any>;
    columnsPicks?: IFormListColumnsPicks;
}

export enum IFormBuilderListMenuItemSelectionMode {
    None = 1 << 0, // 1
    Single = 1 << 1, // 2
    Multi = 1 << 2, // 4
}
export interface IFormBuilderListMenuItem<T extends IFormItem> {
    title: string;
    selectionMode: IFormBuilderListMenuItemSelectionMode;
    action: (items: Array<T>) => boolean | void;
    subMenuItems?: Array<IFormBuilderListMenuItem<T>>;
    disabled?: (selectedItems: Array<T>) => boolean;
    iconName?: string;
}

export interface IFormBuilderListMenuConfig<T extends IFormItem> {
    //** Only use the preprocessor on 'editItem' when 'IFormBuilderListConfig' has disabled 'item invoke' (otherwaise this will cause inconsistency, as the preprocesser isn't called there) */
    actions?: (newItem: (pre?: (item: T) => void | boolean) => void, editItem: (pre?: (item: T) => void | boolean) => void, deleteItems: (pre?: (items: Array<T>) => void | boolean) => void) => Array<IFormBuilderListMenuItem<T>>;
}

export interface IFormBuilderListSearchConfig {
    searchEnabled?: boolean;
	searchableFields: Array<string>;
    searchPlaceHolder?: string;
}

export interface IDynamicSchemaConfig<T> extends IFormItem {
    dynamicKey: (item: T) => string;
    customFormType?: new () => IFormItem;
    useEmptyItem?: boolean;
}
export enum FormBuilderListEditorType { Dialog, Panel };
export interface IFormBuilderListEditorConfig<T> {
    title: (item: T, newItemMode?: boolean) => string;
    description?: string;
    type: FormBuilderListEditorType;
    dynamicForm?: IDynamicSchemaConfig<T>;
    customFooter?: (save: () => Promise<void>, dismiss: () => Promise<void>, validate: () => Promise<ValidationResult | undefined>, getItem: () => T | any) => JSX.Element;
}