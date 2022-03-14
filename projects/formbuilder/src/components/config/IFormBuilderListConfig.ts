import React from "react";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { RequireOnlyOne } from "../../interfaces/types/Partials";
import { ValidationResult } from "../../models/validation/ValidationResult";
import { ISchemaConfig } from "../FormBuilder";

export interface IFormBuilderListConfig<T extends IFormItem> {
    itemIdentifier: (item: T) => string;
    onItemsChange?: (items: Array<T>) => void;
    // listRender?: React.ElementType;
    multiSelect?: boolean;
    shimmerLines?: number;
    disableItemInvoke?: boolean;
}

export enum FormListColumnsPickType { Only, Without }
export interface IFormListColumnsPicks<T> {
    columns: Array<keyof T>;
    pickType: FormListColumnsPickType;
}

export interface IFormBuilderListColumns<T> {
    columnOrder?: Array<keyof T>;
    // customColumns?: Array<any>;
    columnsPicks?: IFormListColumnsPicks<T>;
    resizableColumns?: Array<keyof T> | true;
    columnWidths?: Array<{column: string, width: number}> | number;
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
    schemaConfig?: RequireOnlyOne<ISchemaConfig<T>, "registeredSchemaKey" | "schemaProvider">;
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