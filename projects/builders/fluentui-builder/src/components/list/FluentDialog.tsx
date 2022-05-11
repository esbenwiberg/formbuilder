import { useRef, forwardRef } from "react";
import { Dialog, DialogFooter, Panel, PanelType } from '@fluentui/react';
import React from "react";
import { Form, FormBuilderListEditorType, IDynamicSchemaConfig, IFormBuilderListEditorConfig, IFormItem, IFormListProps } from "@wiberg/formbuilder";
import { FluentDialogContentWrapper } from "./components/FluentDialogContentWrapper";

export interface IFluentDialogProps<T extends IFormItem> {
	item: T;
	editorConfig?: IFormBuilderListEditorConfig<T>;
	newItemMode: boolean;
	keyPrefix: string;
	show: (show: boolean) => void;
	onRenderFooterContent: () => JSX.Element;
	formListProps: IFormListProps<T>;
}

export const FluentDialog = forwardRef(<T extends IFormItem, FormRef>(props : IFluentDialogProps<T>, ref: FormRef) => {

	return (
		props.editorConfig?.containerOptions.type == FormBuilderListEditorType.Dialog
                    ?
                        <Dialog
                            key={`${props.keyPrefix}-listitemdialog`}
                            minWidth={props.editorConfig?.containerOptions.customWidth ?? 800}
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
                                <FluentDialogContentWrapper key={`${props.keyPrefix}-formwrapper`} renderDelay={props.editorConfig?.containerOptions?.contentWrapper?.renderDelay } fallback={props.editorConfig?.containerOptions?.contentWrapper?.fallback} >
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
                                                        schemaConfig: props.editorConfig?.dynamicForm?.schemaConfig
                                                    } as IDynamicSchemaConfig<T> as any // argh!! the types do nothing :| (ewi)
                                        }
                                    />
                                </FluentDialogContentWrapper>
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
                            type={ (props.editorConfig?.containerOptions.panelSize as any) as PanelType ?? PanelType.medium }
                            customWidth={props.editorConfig?.containerOptions.customWidth}
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
                            <FluentDialogContentWrapper key={`${props.keyPrefix}-formwrapper`} renderDelay={props.editorConfig?.containerOptions?.contentWrapper?.renderDelay } fallback={props.editorConfig?.containerOptions?.contentWrapper?.fallback} >
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
                                                    schemaConfig: props.editorConfig?.dynamicForm?.schemaConfig
                                                } as IDynamicSchemaConfig<IFormItem>
                                    }
                                />
                            </FluentDialogContentWrapper>
                        </Panel>
	)
})
