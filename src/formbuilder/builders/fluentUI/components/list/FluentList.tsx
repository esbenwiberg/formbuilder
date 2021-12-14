 import { Dialog, DialogFooter, PrimaryButton, DefaultButton, CommandBar, ShimmeredDetailsList, SelectionMode, DetailsListLayoutMode, ConstrainMode, IColumn, Label, Selection, ICommandBarItemProps } from "@fluentui/react";
import { PropsWithChildren, ReactElement, useState, useEffect, useRef, useCallback } from "react";
import { useStateRef } from "../../../../hooks/useStateRef";
import { IFormBuilderListMenuItemSelectionMode, IFormListColumnsPickType as FormListColumnsPickType } from "../../../../components/config/IFormBuilderListConfig";
import { FormRef } from "../../../../components/Form";
import { IFormListRenderProps } from "../../../../components/FormList";
import { Searcher } from "./components/search/Searcher";
import { lang } from "../../../../models/language/Language";
import { IFormItemPropertyOptions } from "../../../../models/options/IFormItemPropertyOptions";
import { ValidationResult } from "../../../../models/validation/ValidationResult";
import { IFormItem } from "../../../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../../interfaces/IDynamicPropertyComponentConfig";
import { FluentDialog } from "./FluentDialog";
import React from "react";

const FluentList = <T extends IFormItem>(props: PropsWithChildren<IFormListRenderProps<T>>) : ReactElement | null => {

	const editorFormRef = useRef<FormRef<T>>();
    const [items, setItems, itemsRef] = useStateRef(props.items);
    const [filteredItems, setFilteredItems, filteredItemsRef] = useStateRef([...props.items]);
    const [showEditor, setShowEditor] = useState(false);
    const [selectedItems, setSelectedItems, selectedItemsRef] = useStateRef<Array<T>>([]);
    const [columns, setColumns, columnRef] = useStateRef<Array<IColumn>>();
    const [showValidationOverrideConfirm, setShowValidationOverrideConfirm] = useState(false);
    const [enableShimmer, setEnableShimmer] = useState(false);
    const [newItemMode, setNewItemMode] = useState(false);
    const [menuItems, setMenuItems] = useState<Array<ICommandBarItemProps> | undefined>(undefined);

    const [selection] = useState<Selection>(new Selection({
        selectionMode: props.listProps.config.multiSelect ? SelectionMode.multiple : SelectionMode.single,
        getKey: (item: any, index?: number) => props.listProps.config.itemIdentifier(item),
        onSelectionChanged: () => {
            setSelectedItems(selection.getSelection() as Array<T>);
        }
    }));

    useEffect(() => {
        let cols = buildColumns();
        setColumns(cols);
    }, [props.schema])

    useEffect(() => {
        setItems(props.items);
    }, [props.items])

    useEffect(() => {
        if (!!props.listProps.config?.shimmerLines && !!!props.items?.length) {
            setEnableShimmer(true);
            setTimeout(() => {
                setEnableShimmer(false);
            }, 5000);
        }
        else setEnableShimmer(false);
    }, [props.items, props.listProps.config?.shimmerLines])

    // TODO: move out to FormList (ewi)
    const isMenuItemDisabled = (selectionMode: IFormBuilderListMenuItemSelectionMode) : boolean => {

        let disabled = true;
        if ((selectionMode & IFormBuilderListMenuItemSelectionMode.None) === IFormBuilderListMenuItemSelectionMode.None)
            disabled = selectedItems.length !== 0;
        if ((selectionMode & IFormBuilderListMenuItemSelectionMode.Single) === IFormBuilderListMenuItemSelectionMode.Single)
            disabled = disabled && selectedItems.length !== 1;
        if ((selectionMode & IFormBuilderListMenuItemSelectionMode.Multi) === IFormBuilderListMenuItemSelectionMode.Multi)
            disabled = disabled && selectedItems.length < 2;

        return disabled;
    }

    useEffect(() => {
        if (props.listProps.menuConfig?.actions == null) return;
        let actions = props.listProps.menuConfig?.actions(createItem, editItem, deleteItems);
        if (!actions?.length) return; // is it needed to set to empty array as well? (ewi)
        // parse to commandbarProps
        let commandBarItems = actions.map(_ => {
            return {
                key: _.title,
                text: _.title,
                onClick: () => _.action(selectedItems),
                disabled: isMenuItemDisabled(_.selectionMode),
                iconProps: { iconName: _.iconName}

            } as ICommandBarItemProps
        });
        setMenuItems(commandBarItems);

    }, [props.listProps.menuConfig, selectedItems])

    // TODO: make this usable for delete as well (ewi)
    // TODO: move out to FormList (ewi)
    const itemChangeInCollection = (collection: Array<T>, item: T) : Array<T> => {
        let clone = [...collection];
        let itemIndex = clone.findIndex(_ => props.listProps.config.itemIdentifier(_) == props.listProps.config.itemIdentifier(item));
        if (itemIndex < 0)
            clone.unshift(item);
        else
            clone[itemIndex] = {...item};
        return clone;
    }

    // TODO: move out to FormList (ewi)
    const onItemChange = (item: T) : void => {
        if (item == null) return;
        // items
        let changedItems = itemChangeInCollection(itemsRef.current, item);
        setItems(changedItems);
        // // filtered
        let changedFilteredItems = itemChangeInCollection(filteredItemsRef.current, item);
        setFilteredItems(changedFilteredItems);

        if (props.listProps.onItemChange) props.listProps.onItemChange({...item});
        if (props.listProps.config.onItemsChange) props.listProps.config.onItemsChange([...changedItems]);
    }

    // TODO: move out to FormList (ewi)
    const filterColumns = (propKeys: Array<string>) : Array<string> => {
        let options = props.listProps.columnConfig?.columnsPicks;
        if (options?.columns == null) return propKeys;
        if (options.pickType == FormListColumnsPickType.Only)
            return propKeys.filter(_ => options?.columns.includes(_));
        else if (options.pickType == FormListColumnsPickType.Without)
            return propKeys.filter(_ => !options?.columns.includes(_));
        else return propKeys;
    }

    // TODO: move out to FormList (ewi)
    const customValueRender = (propInfo: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig>) : any => {
        let valueRender = propInfo?.listItemOptions?.customValueRender as any;
        if (valueRender == undefined) return undefined;
        else {
            return (item: T) => valueRender(item, ((item: T) => onItemChange(item as T)));
        }
    }

    // TODO: move out to FormList (ewi)
    //       return type and map func
    const buildColumns = () : Array<IColumn> => {
        let propertyOptions = props.schema.options.properties;
        let propKeys = Object.keys(propertyOptions);
        let filteredPropKeys = filterColumns(propKeys);
        let columns = filteredPropKeys.map(_ => {
            let propInfo = propertyOptions[_];
            let col = {
                key: _,
                fieldName: _,
                name: propInfo.displayName,
                onRender: customValueRender(propInfo),
                minWidth: propInfo.listItemOptions?.minWidth,
                isResizable: propInfo.listItemOptions?.isResizable,
                onColumnClick: (ev, col) => {
                    onColumnClick(ev,col)
                }
            } as IColumn;
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

    // TODO: move out to FormList (ewi)
    //       name: sortByColumn
    const onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
        if (columnRef.current == null) return;
        const newColumns: IColumn[] = columnRef.current.slice();
        const currColumn: IColumn = columnRef.current.filter(currCol => column.key === currCol.key)[0];
        newColumns.forEach((newCol: IColumn) => {
          if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
          } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
          }
        });
        
        const newItems = copyAndSort(filteredItemsRef.current, currColumn.fieldName!, currColumn.isSortedDescending);
        setColumns(newColumns);
        setFilteredItems(newItems);
    }

    // TODO: move out to FormList (ewi)
    const copyAndSort = (items: T[], columnKey: string, isSortedDescending?: boolean): T[] => {
        let key = columnKey as keyof T;
        key = (key as any).replace("column-", ""); // replace prefix from column key
        return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
    }

    // TODO: move crud operations out to FormList (ewi)
    //       with alot of other stuff as well
    const createItem = (pre?: (item: T) => boolean | void) => {
        let item = {} as T;
        if (pre) {
            let result = pre(item);
            if (result === false) return;
        }
        selection.setAllSelected(false);
        setSelectedItems([item]);
        setNewItemMode(true);
        setShowEditor(true); 
    }

    const  editItem = (pre?: (item: T) => void | boolean) => {
        let sItem = {...selectedItemsRef.current[0]};
        if (pre) {
            let result = pre(sItem);
            if (result === false) return;
        }
        setSelectedItems([sItem]);
        setTimeout(() => {
            setNewItemMode(false);
            setShowEditor(true);
        }, 400);
    }

    // TODO: show confirmation dialog (can be handled from outside - see LargeList sample) (ewi)
    // TODO: move out to FormList (ewi)
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
        selection.setAllSelected(false);
        if (props.listProps.config.onItemsChange) props.listProps.config.onItemsChange([...itemsLeft]);
    }

    const validateForm = async () : Promise<ValidationResult | undefined> => {
        let validated = await editorFormRef.current?.validateItem();
        return validated;
    }

    const saveForm = async () : Promise<void> => {
        let validated = await validateForm();
        if (validated == ValidationResult.FailedDontBlock) {
            setShowValidationOverrideConfirm(true);
        }
        else if (validated == ValidationResult.Success) {
            onItemChange(editorFormRef.current?.getItem() as T);
            setShowEditor(false);
        }
    }

    const dismissForm = async () : Promise<void> => {
        if (newItemMode) setSelectedItems([]);
        setNewItemMode(false);
        setShowEditor(false)
    }

    const getItem = () : T | any => {
        return editorFormRef.current?.getItem() as T | any;
    }

    const onRenderFooterContent = useCallback(
        () => {
            if (props.listProps?.editorConfig?.customFooter != undefined)
                return props.listProps.editorConfig.customFooter(saveForm, dismissForm, validateForm, getItem);
            else
                return (<div>
                    <PrimaryButton
                        text={newItemMode ? lang.texts.areas.common.create : lang.texts.areas.common.save}
                        styles={{ root: { marginRight: 8 } }}
                        onClick={ saveForm }
                    />
                    <DefaultButton
                        text={lang.texts.areas.common.cancel}
                        onClick={ dismissForm }
                    />
                  </div>)
        },
        [showEditor],
    );

    const handleColumnReorder = (draggedIndex: number, targetIndex: number) => {
        if (columns == null) return;
        const draggedItems = columns[draggedIndex];
        const newColumns: IColumn[] = [...columns];

        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        setColumns(newColumns);
    };


    // TODO: refactor the shit out of everything in this component
    //       take it completely apart, this has been an 'is it even possible' implementation (ewi)
    // TODO: move Panel and Dialog out to files (ewi)
    // TODO: move Form out to file and reuse in Panel and Dialog (ewi)
    return  <>
				{ (showEditor && selectedItems?.length) 
                        &&  <FluentDialog
                                item={ selectedItems[0] }
                                editorConfig={ props.listProps.editorConfig as any }
                                formListProps={ props as any }
                                keyPrefix={ props.keyPrefix ?? "" }
                                newItemMode={ newItemMode }
                                onRenderFooterContent={ onRenderFooterContent }
                                show={ (show: boolean) => setShowEditor(show) }
                                dialogType={ props.listProps.editorConfig?.type }
                                ref={ editorFormRef }
                             />
                }
                <div className="formbuilder-listcontainer-toolbar">
                { props.listProps.searchConfig?.searchEnabled &&
                    <Searcher
                        items={items}
                        onSearch={(filteredItems: Array<T>, searchText: string) => {
                            setFilteredItems(filteredItems);
                            selection.setAllSelected(false);
                            setSelectedItems([]);
                        }}
                        className="tp-searcher"
                        delay={600}
                        searchPlaceHolder={props.listProps.searchConfig.searchPlaceHolder}
                        enableTextHighlight={true}
                        searchFields={ props.listProps.searchConfig.searchableFields }
                        highLightElements={() => Array.from(document.querySelectorAll('.ms-List .ms-DetailsRow-cell:not(.ms-DetailsRow-cellCheck)'))
                                                        .filter(_ => {
                                                            if (props.listProps.searchConfig?.searchableFields == null) return [];
                                                            return props.listProps.searchConfig.searchableFields.findIndex(sf => sf == (_.attributes as any)["data-automation-key"].value) >= 0
                                                        })
                        }
                        filterOnItemsChange
                    />
                }
                { menuItems !== undefined &&
                    <CommandBar items={menuItems} styles={{root:{padding: 0}}} />
                }
                </div>
                <div className={"formbuilder-listcontainer-list"}>
                    {/* <MarqueeSelection selection={selection}> */}
                        <ShimmeredDetailsList
                            columns={ columns }
                            items={ filteredItems }
                            // selectionPreservedOnEmptyClick
                            selection={ selection }
                            enableShimmer={ enableShimmer }
                            shimmerLines={ props.listProps.config.shimmerLines}
                            layoutMode={DetailsListLayoutMode.fixedColumns}
                            constrainMode={ConstrainMode.horizontalConstrained}
                            setKey={'itemId'}
                            // setKey="none"
                            getKey={(item: T) => item != null ? `item-${props.listProps.config.itemIdentifier(item)}` : id.make()}
                            // useReducedRowRenderer
                            onItemInvoked={ 
                                props.listProps.config.disableItemInvoke ? undefined :
                                (item?: T, index?: number | undefined, ev?: Event | undefined) => {
                                    if (item == null) {
                                        setSelectedItems([]);
                                    }
                                    else {
                                        setSelectedItems([item]);
                                    }
                                    editItem();
                                }
                            }
                            columnReorderOptions={ columns?.length ? { handleColumnReorder } : undefined } // only enable if columns are specified and not auto generated by Fluent
                        />
                    {/* </MarqueeSelection> */}
                </div>
                { (!enableShimmer && !!!items?.length) && <Label>No items found</Label> }
                <Dialog
                    hidden={!showValidationOverrideConfirm}
                    title={lang.texts.areas.list.validationRequirementsNotMet.title}
                    onDismiss={ () => setShowValidationOverrideConfirm(false) }
                    dialogContentProps={ {
                        subText: lang.texts.areas.list.validationRequirementsNotMet.desctiption
                    }}
                    modalProps={{
                        isBlocking: true
                    }}
                >
                    <DialogFooter>
                        <PrimaryButton text={lang.texts.areas.list.validationRequirementsNotMet.ok} onClick={() => {
                            setShowValidationOverrideConfirm(false);
                            setShowEditor(false);
                            onItemChange(editorFormRef.current?.getItem() as T);
                        } } />
                        <DefaultButton text={lang.texts.areas.list.validationRequirementsNotMet.cancel} onClick={() => setShowValidationOverrideConfirm(false)} />
                    </DialogFooter>
                </Dialog>
			</>
}

export default FluentList;
