import { IFormItem } from "../form/IFormItem";

export interface IFormBuilderListMenuConfig<T extends IFormItem> {
    //** Only use the preprocessor on 'editItem' when 'IFormBuilderListConfig' has disabled 'item invoke' (otherwaise this will cause inconsistency, as the preprocesser isn't called there) */
    actions?: (newItem: (pre?: (item: T) => void | boolean) => void, editItem: (pre?: (item: T) => void | boolean) => void, deleteItems: (pre?: (items: Array<T>) => void | boolean) => void) => Array<IFormBuilderListMenuItem<T>>;
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

