import { useRef, forwardRef } from "react";
import { Dialog, DialogFooter, Panel, PanelType } from '@fluentui/react';
import { FormBuilderListEditorType, IDynamicSchemaConfig, IFormBuilderListEditorConfig } from '../../../../components/config/IFormBuilderListConfig';
import { Form } from '../../../../components/Form';
import { IFormListProps } from '../../../../components/FormList';
import { IFormItem } from '../../../../modules/IFormItem';
import React from "react";

export interface IFluentDialogProps<T extends IFormItem> {
	item: T;
	editorConfig?: IFormBuilderListEditorConfig<T>;
	newItemMode: boolean;
	keyPrefix: string;
	dialogType?: FormBuilderListEditorType;
	show: (show: boolean) => void;
	onRenderFooterContent: () => JSX.Element;
	formListProps: IFormListProps<T>;
}

export const FluentDialog = forwardRef(<T extends IFormItem, FormRef>(props : IFluentDialogProps<T>, ref: FormRef) => {

	return (
		props.editorConfig?.type == FormBuilderListEditorType.Dialog
                    ?
                        <Dialog
                            key={`${props.keyPrefix}-listitemdialog`}
                            minWidth={800}
                            hidden={false}
                            title={ props.editorConfig?.title(props.item, props.newItemMode) }
                            onDismiss={ () => props.show(false) }
                            dialogContentProps={ {
                                subText: props.editorConfig?.description
                            }}
                            modalProps={{
                                isBlocking: true
                            }}
                        >
                            <>
                                <Form
                                    key={`${props.keyPrefix}-listitemdialogform`}
                                    ref={ref as any}
                                    {...props.formListProps as IFormListProps<any>}
                                    validationResult={undefined} // reset to avoid saving "old" validation results when cancelling
                                    item={props.editorConfig?.dynamicForm?.useEmptyItem
                                        ? {}
                                        : props.item ?? {}}
                                    dynamicSchema={
                                        props.editorConfig?.dynamicForm == null
                                            ? undefined
                                            :   {
                                                    // semi-override dynamickey function, due to item reset, if using 'useEmptyItem'
                                                    dynamicKey: (item: T) => props.editorConfig?.dynamicForm?.dynamicKey(item != null && Object.keys(item).length ? item : props.item),
                                                    customFormType: props.editorConfig?.dynamicForm?.customFormType
                                                } as IDynamicSchemaConfig<IFormItem>
                                    }
                                />
                                <DialogFooter>
                                    { props.onRenderFooterContent() }
                                </DialogFooter>
                            </>
                        </Dialog>
                    :
                        <Panel
                            key={`${props.keyPrefix}-listitempanel`}
                            isOpen={true}
                            onDismiss={ () => props.show(false) }
                            isLightDismiss={false}
                            type={PanelType.medium}
                            className="tp-panel tp-panel-editor"
                            headerText={props.editorConfig?.title(props.item, props.newItemMode)}
                            layerProps={{}}
                            overlayProps={{}}
                            focusTrapZoneProps={{}}
                            isBlocking={true}
                            onOuterClick={ (e: any) => {e.preventDefault(); e.stopPropagation(); return false; }}
                            onRenderFooterContent={props.onRenderFooterContent}
                            isFooterAtBottom={true}
                            styles={{ header: { paddingBottom: "30px" }, footerInner: { borderTop: "1px solid rgb(237, 235, 233)" } }}
                        >
                            <Form
                                key={`${props.keyPrefix}-listitempanelform`}
                                ref={ref as any}
                                {...props.formListProps as IFormListProps<any>}
                                validationResult={undefined} // reset to avoid saving "old" validation results when cancelling
                                item={props.editorConfig?.dynamicForm?.useEmptyItem
                                    ? {}
                                    : props.item ?? {}}
                                dynamicSchema={
                                    props.editorConfig?.dynamicForm == null
                                        ? undefined
                                        :   {
                                                // semi-override dynamickey function, due to item reset, if using 'useEmptyItem'
                                                dynamicKey: (item: T) => props.editorConfig?.dynamicForm?.dynamicKey(item != null && Object.keys(item).length ? item : props.item),
                                                customFormType: props.editorConfig?.dynamicForm?.customFormType
                                            } as IDynamicSchemaConfig<IFormItem>
                                }
                            />
                        </Panel>
	)
})
