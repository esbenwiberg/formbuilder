import { IFormItem } from "../form/IFormItem";

export interface IFormBuilderListMenuConfig<T extends IFormItem> {
    //** Only use the preprocessor on 'editItem' when 'IFormBuilderListConfig' has disabled 'item invoke' (otherwaise this will cause inconsistency, as the preprocesser isn't called there) */
    actions?: (newItem: (pre?: (item: T) => boolean | void | Promise<boolean | void>) => void, editItem: (pre?: (item: T) => boolean | void | Promise<boolean | void>) => void, deleteItems: (pre?: (items: Array<T>) => boolean | void | Promise<boolean | void>) => void) => Array<IFormBuilderListMenuItem<T>>;
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

