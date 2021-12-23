import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode } from '../../../components/config/IFormBuilderListConfig';
import { FormBuilder } from '../../../components/FormBuilder';
import { IPropertyRenderProps } from '../../../interfaces/IPropertyRenderProps';
import { IFormItemOptions } from '../../../interfaces/options/IFormItemOptions';
import { IFormSchema } from '../../../interfaces/schema/IFormSchema';
import { ValidationEventType } from '../../../models/validation/ValidationEventType';
import { ValidationMark } from '../../../models/validation/ValidationMark';
import { IDynamicArrayFieldConfig } from '../config/IDynamicArrayFieldConfig';
import React from "react";
import { IFormItem } from '../../../interfaces/form/IFormItem';
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicArrayFieldConfig<T>, Array<any> | undefined> { 
    config?: IDynamicArrayFieldConfig<T>;
}

//** Wrap each value in an instance of 'FakeItem' */
interface IFakeItem extends IFormItem {
    value?: any;
}

const wrapValues = (values: Array<any> | undefined) => values?.map(_ => { return { value: _ } as IFakeItem });
const unwrapValues = (fakeItems: Array<IFakeItem> | undefined) => fakeItems?.map(_ => _.value);

export const DynamicArrayField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [items, setItems] = useState<Array<IFakeItem>>(wrapValues(props.value) ?? []);
	useEffect(() => setItems(wrapValues(props.value) ?? []), [props.value]);

    const getSchema = () : IFormSchema<IFakeItem> => {
        var schema: IFormSchema<any> = {
            options: {
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        value: { id: "required", validationMark: ValidationMark.Required, validationRule: (item: IFakeItem) => item.value != null && item.value != "", validationMessage: "Value must be specified", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: { 
                    value: { propertyType: props.config?.propertyType, displayName: "Value", config: { resizable: true } },
                } 
            } as IFormItemOptions<IFakeItem>
        }

        return schema as IFormSchema<IFakeItem>;
    }

    const onChange = (fakeItems: Array<IFakeItem>) : void => {
        const values = unwrapValues(fakeItems);
        props.onChange(values);
    }

	return (
        <>
            <FormBuilder
                item={items}
                schemaConfig={ { schemaProvider: { key: "fakeit", getSchema: async () => getSchema() } }}
                listProps={{
                    config: { 
                        itemIdentifier: (item: IFakeItem) => item?.value?.toString(),
                        multiSelect: true, 
                        onItemsChange: (fakeItems: Array<IFakeItem>) => onChange(fakeItems),
                    },
                    editorConfig: {
                        title: item => "Item",
                        type: FormBuilderListEditorType.Dialog
                    },
                    menuConfig: {
                        actions: (newItem, editItem, deleteItems) => (
                            [
                                { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
                                { title: "Edit", iconName: "Edit", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => editItem() },
                                { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => deleteItems() },
                            ]
                        ),
                    }
                }}
                overrideSchema={getSchema()}
            />
        </>
    )
}
