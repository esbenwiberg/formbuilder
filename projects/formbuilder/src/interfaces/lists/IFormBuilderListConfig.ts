import { IFormItem } from "../form/IFormItem";

export interface IFormBuilderListConfig<T extends IFormItem> {
    itemIdentifier: (item: T) => string;
    onItemsChange?: (items: Array<T>) => void;
    // listRender?: React.ElementType;
    multiSelect?: boolean;
    disableItemInvoke?: boolean;
}
