import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { formbuilder } from '../utils/FormBuilderInitializer';
import { useStateRef } from '../hooks/useStateRef';
import { IFormItemPropertyOptions } from '../interfaces/options/IFormItemPropertyOptions';
import { IDynamicPropertyComponentConfig } from '../builders/interfaces/IDynamicPropertyComponentConfig';
import { formListHelper } from '../builders/helpers/FormListHelper';
import { IFormListColumnInfo } from '../interfaces/lists/IFormListColumnInfo';
import { IFormListProps } from './interfaces/IFormListProps';
import { IFormListRenderProps } from './interfaces/IFormListRenderProps';
import { IFormItem } from '../interfaces/form/IFormItem';

export type FormListRef<T extends IFormItem> = { getItem: () => Array<T> };

export const FormList = forwardRef(<T extends IFormItem, FormListRef>(props : IFormListProps<T>, ref: FormListRef) => {

    // verify that the formbuilder is set up correctly
    formbuilder.verify();

    const [listProps, setListProps] = useState<IFormListProps<T>>({...props});

    const [items, setItems, itemsRef] = useStateRef(props.items ?? []);
    const [filteredItems, setFilteredItems, filteredItemsRef] = useStateRef(props.items ?? []);
    const [selectedItems, setSelectedItems, selectedItemsRef] = useStateRef<Array<T>>([]);
    const [columns, setColumns, columnRef] = useStateRef<Array<IFormListColumnInfo>>();

    useEffect(() => {
      setItems(props.items);
    }, [props.items])
    
    useImperativeHandle<FormListRef, any>(ref as any, () => ({
        getItem: () => items as Array<T>
    }), [items]);

    useEffect(() => {
        let clone = {...props};
        let callback = clone.listProps.config.onItemsChange;

        clone.listProps.config.onItemsChange = (items) => {
            setItems(items);
            if (callback) callback(items);
        };
        setListProps(clone);
    }, [props.listProps, props.schema])

    useEffect(() => {
        const cols = buildColumns();
        setColumns(cols);
    }, [])

    if (listProps?.schema == null) return null;

    const itemChangeInCollection = (collection: Array<T>, item: T) : Array<T> => {
        let clone = [...collection];
        let itemIndex = clone.findIndex(_ => props.listProps.config.itemIdentifier(_) == props.listProps.config.itemIdentifier(item));
        if (itemIndex < 0)
            clone.unshift(item);
        else
            clone[itemIndex] = {...item};
        return clone;
    }

    const onItemChange = (item: T) : void => {
        if (item == null) return;
        // items
        let changedItems = itemChangeInCollection(itemsRef.current, item);
        setItems(changedItems);
        // filtered
        let changedFilteredItems = itemChangeInCollection(filteredItemsRef.current, item);
        setFilteredItems(changedFilteredItems);
        // selected
        let changedSelectedItems = itemChangeInCollection(selectedItemsRef.current, item);
        setSelectedItems(changedSelectedItems);

        if (props.listProps.onItemChange) props.listProps.onItemChange({...item});
        if (props.listProps.config.onItemsChange) props.listProps.config.onItemsChange([...changedItems]);
    }

    const columnValueRender = (propInfo: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>>) : ((item: T, onChange: (item: IFormItem) => void) => string | JSX.Element | undefined) | undefined => {
        let valueRender = propInfo?.listItemOptions?.customValueRender as any;
        if (valueRender == undefined) return undefined;
        else {
            return (item: T) => valueRender(item, ((item: T) => onItemChange(item as T)));
        }
    }

    const deleteItems = (pre?: (items: Array<T>) => boolean | void) => {
        let sItems = [...selectedItems];
        // pre event (can cancel the operation)
        if (pre) {
            let result = pre(sItems);
            if (result === false) return;
        }

        let itemsLeft: T[] = [];
        let filteredItemsLeft: T[] = [];
        // not all items
        if (items.length != sItems.length) {

            itemsLeft = items.filter(_ => sItems.indexOf(_) < 0);
            filteredItemsLeft = filteredItems.filter(_ => sItems.indexOf(_) < 0);
        }

        setItems(itemsLeft);
        setFilteredItems(filteredItemsLeft);
        
        setSelectedItems([]);
        if (props.listProps.config.onItemsChange) props.listProps.config.onItemsChange([...itemsLeft]);
    }

    const buildColumns = () : Array<IFormListColumnInfo> => {
        let propertyOptions = props.schema.options.properties;
        let columnOptions = props.listProps.columnConfig?.columnsPicks;
        let propKeys = Object.keys(propertyOptions);
        let filteredPropKeys = formListHelper.filterColumns(propKeys, columnOptions);
        let columns = filteredPropKeys.map(_ => {
            let propInfo = propertyOptions[_];
            let col = {
                key: _,
                fieldName: _,
                name: propInfo.displayName,
                onRender: columnValueRender(propInfo),
                minWidth: propInfo.listItemOptions?.minWidth,
                isResizable: propInfo.listItemOptions?.isResizable
            } as IFormListColumnInfo;
            return col;
        });

        let sortOrder = props.listProps.columnConfig?.columnOrder as Array<string>;
        if (sortOrder != null)
            return columns.sort((a, b) => {
                if (sortOrder.indexOf(a.fieldName as string) == -1) return 1;
                if (sortOrder.indexOf(b.fieldName as string) == -1) return -1;
                return sortOrder.indexOf(a.fieldName as string) - sortOrder.indexOf(b.fieldName as string)
            });
        else
            return columns;
    }

    const sortColumn = (column: IFormListColumnInfo) : void => {
        if (column == null) return;
        const newColumns: IFormListColumnInfo[] = columns.slice();
        const currColumn: IFormListColumnInfo = columnRef.current.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IFormListColumnInfo) => {
            if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
            } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
            }
        });
        
        const property = currColumn.fieldName!;
        const newItems = formListHelper.copyAndSort<T>(filteredItems, property, currColumn.isSortedDescending);
        setColumns(newColumns);
        setFilteredItems(newItems);
    }

    const ListContainer: React.ComponentType<IFormListRenderProps<T>> = formbuilder.formItemRender.list();

	return (
        <div className="formbuilder-listcontainer" key={`${props.keyPrefix}`} >
            <ListContainer
                {...listProps} 
                items={items} 
                filteredItems={filteredItems} 
                selectedItems={selectedItems}
                onItemChange={onItemChange ?? ((item: T) => {})}
                deleteItems={deleteItems}
                columnValueRender={columnValueRender}
                columns={columns ?? []}
                updateItems={setItems}
                updateFilteredItems={setFilteredItems}
                updateSelectedItems={setSelectedItems}
                sortColumn={sortColumn}
            />
        </div>
    )
})

