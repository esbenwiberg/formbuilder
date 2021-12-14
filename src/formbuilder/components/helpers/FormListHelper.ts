import { FormListColumnsPickType, IFormBuilderListMenuItemSelectionMode, IFormListColumnsPicks } from "../config/IFormBuilderListConfig";

const copyAndSort = <T>(items: T[], property: string, isSortedDescending?: boolean): T[] => {
    let key = property as keyof T;
    // key = (key as any).replace("column-", ""); // replace prefix from column key
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

const filterColumns = (propKeys: Array<string>, options: IFormListColumnsPicks | undefined) : Array<string> => {
    if (options?.columns == null || options?.pickType == null) return propKeys;
    if (options.pickType == FormListColumnsPickType.Only)
        return propKeys.filter(_ => options?.columns.includes(_));
    else if (options.pickType == FormListColumnsPickType.Without)
        return propKeys.filter(_ => !options?.columns.includes(_));
    else return propKeys;
}

const isMenuItemDisabled = (selectionMode: IFormBuilderListMenuItemSelectionMode, selectedItemsLength: number) : boolean => {

    let disabled = true;
    if ((selectionMode & IFormBuilderListMenuItemSelectionMode.None) === IFormBuilderListMenuItemSelectionMode.None)
        disabled = selectedItemsLength !== 0;
    if ((selectionMode & IFormBuilderListMenuItemSelectionMode.Single) === IFormBuilderListMenuItemSelectionMode.Single)
        disabled = disabled && selectedItemsLength !== 1;
    if ((selectionMode & IFormBuilderListMenuItemSelectionMode.Multi) === IFormBuilderListMenuItemSelectionMode.Multi)
        disabled = disabled && selectedItemsLength < 2;

    return disabled;
}

export const formListHelper = { copyAndSort, filterColumns, isMenuItemDisabled };