import { ValidationResult } from "../../models/validation/ValidationResult";
import { FormListPanelSize } from "./FormListPanelSize";
import { IDynamicSchemaConfig } from "./IDynamicSchemaConfig";

export interface IFormBuilderListEditorConfig<T> {
    title: (item: T, newItemMode?: boolean) => string;
    description?: string;
    containerOptions: IFormBuilderListEditorContainerOptions;
    dynamicForm?: IDynamicSchemaConfig<T>;
    customFooter?: (save: () => Promise<void>, dismiss: () => Promise<void>, validate: () => Promise<ValidationResult | undefined>, getItem: () => T | any) => JSX.Element;
}

export enum FormBuilderListEditorType { Dialog, Panel };

export interface IFormBuilderListEditorDialogContentOptions {
    renderDelay?: number;
	fallback?: React.ReactNode;
}

export interface IFormBuilderListEditorContainerOptions {
    type: FormBuilderListEditorType;
    contentWrapper?: IFormBuilderListEditorDialogContentOptions;
    customWidth?: string;
    panelSize?: FormListPanelSize;
}
