 import { Dialog, DialogFooter, PrimaryButton, DefaultButton, CommandBar, ShimmeredDetailsList, SelectionMode, DetailsListLayoutMode, ConstrainMode, IColumn, Label, Selection, ICommandBarItemProps, Icon, Stack, Spinner } from "@fluentui/react";
import { PropsWithChildren, ReactElement, useState, useEffect, useRef, useCallback } from "react";
import { FluentDialog } from "./FluentDialog";
import React from "react";
import { IFormItem, IFormListRenderProps, FormRef, useStateRef, formListHelper, IFormListColumnInfo, ValidationResult, lang, id, IFormBuilderListMenuItem } from "@wiberg/formbuilder";
import { Searcher } from "../..";

const FluentList = <T extends IFormItem>(props: PropsWithChildren<IFormListRenderProps<T>>) : ReactElement | null => {

	const editorFormRef = useRef<FormRef<T>>();
    const [items, setItems] = useState(props.items);
    const [filteredItems, setFilteredItems] = useState(props.filteredItems);
    const [showEditor, setShowEditor] = useState(false);
    const [columns, setColumns, columnRef] = useStateRef<Array<IColumn>>();
    const [showValidationOverrideConfirm, setShowValidationOverrideConfirm] = useState(false);
    const [enableShimmer, setEnableShimmer] = useState(false);
    const [newItemMode, setNewItemMode] = useState(false);
    const [menuItems, setMenuItems] = useState<Array<ICommandBarItemProps> | undefined>(undefined);
    const [validationFailed, setValidationFailed] = useState(false);

    const [selection] = useState<Selection>(new Selection({
        selectionMode: props.listProps.config.multiSelect ? SelectionMode.multiple : SelectionMode.single,
        getKey: (item: any, index?: number) => props.listProps.config.itemIdentifier(item),
        onSelectionChanged: () => {
            props.updateSelectedItems(selection.getSelection() as Array<T> ?? []);
        }
    }));

    useEffect(() => {
        let cols = buildColumns();
        setColumns(cols);
    }, [props.columns])

    useEffect(() => {
        if (!!props.listProps.config?.shimmerLines && !!!items?.length) {
            setEnableShimmer(true);
            setTimeout(() => setEnableShimmer(false), 5000);
        }
        else {
            setEnableShimmer(false);
        }
    }, [items, props.listProps.config?.shimmerLines])

    useEffect(() => {
        if (props.items?.length) setEnableShimmer(false);
        setItems(props.items);
    }, [props.items])
    
    useEffect(() => {
        setFilteredItems(props.filteredItems);
    }, [props.filteredItems])

    const buildMenuItem = useCallback(
        (item: IFormBuilderListMenuItem<T>) : ICommandBarItemProps => {
            return {
                key: item.title,
                text: item.title,
                onClick: () => item.action(props.selectedItems),
                disabled: props.readOnly || formListHelper.isMenuItemDisabled(item.selectionMode, props.selectedItems?.length),
                iconProps: { iconName: item.iconName },
                subMenuProps: item.subMenuItems == null
                                ? undefined
                                : { items: item.subMenuItems.map(buildMenuItem) }

            } as ICommandBarItemProps
        }, [items, props.selectedItems, props.readOnly]
    )

    useEffect(() => {
        if (props.listProps.menuConfig?.actions == null) return;
        let actions = props.listProps.menuConfig?.actions(createItem, editItem, deleteItems);
        if (!actions?.length) return; // is it needed to set to empty array as well? (ewi)
        // parse to commandbarProps
        let commandBarItems = actions.map(buildMenuItem);
        setMenuItems(commandBarItems);

    }, [props.listProps.menuConfig, props.selectedItems])

    
    const buildColumns = () : Array<IColumn> => {
        return props.columns.map(_ => {
            let col = _ as IColumn;
            col.onColumnClick = () => props.sortColumn(_ as IFormListColumnInfo);
            
            const resizable = props.listProps.columnConfig?.resizableColumns;
            if (resizable === true || (resizable?.findIndex(_ => _ == col.fieldName) ?? -1) >= 0)
                col.isResizable = true;
            
            const widthConfig = props.listProps.columnConfig?.columnWidths;
            if (widthConfig != null) {
                // do not override width from item schema
                if (typeof widthConfig === 'number' && col.minWidth == null) {
                    col.minWidth = widthConfig;
                }
                else if (Array.isArray(widthConfig)) {
                    const config = widthConfig?.find(_ => _.column == col.fieldName);
                    if (config?.width != null)
                        col.minWidth = config.width;
                }
            }

            return col;
        });
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
        props.updateSelectedItems([item]);
        setNewItemMode(true);
        setShowEditor(true); 
    }

    const editItem = (pre?: (item: T) => void | boolean) => {
        let sItem = {...props.selectedItems[0]};
        if (pre) {
            let result = pre(sItem);
            if (result === false) return;
        }
        props.updateSelectedItems([sItem]);
        setTimeout(() => {
            setNewItemMode(false);
            setShowEditor(true);
        }, 200); // TODO: why was this needed ? (ewi)
    }

    const deleteItems = (pre?: (items: Array<T>) => boolean | void) => {
        const success = props.deleteItems(pre);
        if (!success) return;
        selection.setAllSelected(false);
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
        else if (validated == ValidationResult.Failed) {
            setValidationFailed(true);
        }
        else if (validated == ValidationResult.Success) {
            props.onItemChange(editorFormRef.current?.getItem() as T);
            setValidationFailed(false);
            setShowEditor(false);
        }
    }

    const dismissForm = async () : Promise<void> => {
        if (newItemMode) props.updateSelectedItems([]);
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
                return (<Stack horizontal>
                    <PrimaryButton
                        text={newItemMode ? lang.texts.areas.common.create : lang.texts.areas.common.save}
                        styles={{ root: { marginRight: 8 } }}
                        onClick={ saveForm }
                    />
                    <DefaultButton
                        text={lang.texts.areas.common.cancel}
                        onClick={ dismissForm }
                    />
                    {
                        validationFailed && <div style={{paddingLeft: "10px", paddingTop: "2px" }}><Icon iconName="Error" title="Validation errors" styles={{root: { color: "red", fontSize: "20px", cursor: "help" }}} /></div>
                    }
                  </Stack>)
        },
        [showEditor, validationFailed],
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

    return  <>
				{ (showEditor && props.selectedItems?.length) 
                        &&  <FluentDialog
                                item={ props.selectedItems[0] }
                                editorConfig={ props.listProps.editorConfig as any }
                                formListProps={ props as any }
                                keyPrefix={ props.keyPrefix ?? "" }
                                newItemMode={ newItemMode }
                                onRenderFooterContent={ onRenderFooterContent }
                                show={ (show: boolean) => {
                                    setValidationFailed(false);                                    
                                    setShowEditor(show);
                                 } }
                                dialogType={ props.listProps.editorConfig?.type }
                                ref={ editorFormRef }
                             />
                }
                <div className="formbuilder-listcontainer-toolbar">
                { props.listProps.searchConfig?.searchEnabled &&
                    <Searcher
                        items={items}
                        onSearch={(filteredItems: Array<T>, searchText: string) => {
                            props.updateFilteredItems(filteredItems);
                            selection.setAllSelected(false);
                            props.updateSelectedItems([]);
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
                            getKey={(item: T) => `item-${props.listProps.config.itemIdentifier(item) ?? id.make()}`}
                            onItemInvoked={ 
                                props.listProps.config.disableItemInvoke ? undefined :
                                (item?: T, index?: number | undefined, ev?: Event | undefined) => {
                                    if (item == null) {
                                        props.updateSelectedItems([]);
                                    }
                                    else {
                                        props.updateSelectedItems([item]);
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
                            props.onItemChange(editorFormRef.current?.getItem() as T);
                        } } />
                        <DefaultButton text={lang.texts.areas.list.validationRequirementsNotMet.cancel} onClick={() => setShowValidationOverrideConfirm(false)} />
                    </DialogFooter>
                </Dialog>
			</>
}

export default FluentList;
