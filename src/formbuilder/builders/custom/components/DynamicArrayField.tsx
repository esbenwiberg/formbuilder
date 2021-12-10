import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { FormBuilderListEditorType, IFormBuilderListMenuItemSelectionMode } from '../../../components/config/IFormBuilderListConfig';
import { FormBuilder } from '../../../components/FormBuilder';
import { IPropertyRenderProps } from '../../../interfaces/IPropertyRenderProps';
import { IFormItemOptions } from '../../../models/options/IFormItemOptions';
import { IFormSchema } from '../../../models/schema/IFormSchema';
import { ValidationEventType } from '../../../models/validation/ValidationEventType';
import { ValidationMark } from '../../../models/validation/ValidationMark';
import { IFormItem } from '../../../modules/IFormItem';
import { IDynamicArrayFieldConfig } from '../config/IDynamicArrayFieldConfig';
import React from "react";
 
interface IProps<T extends IFormItem> extends IPropertyRenderProps<T, IDynamicArrayFieldConfig, Array<any> | undefined> { 
    config?: IDynamicArrayFieldConfig;
}

//** Wrap each value in an instance of 'FakeItem' */
class FakeItem { constructor(public value?: any) { } };

const wrapValues = (values: Array<any> | undefined) => values?.map(_ => new FakeItem(_));
const unwrapValues = (fakeItems: Array<FakeItem> | undefined) => fakeItems?.map(_ => _.value);

export const DynamicArrayField = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	const [items, setItems] = useState<Array<FakeItem>>(wrapValues(props.value) ?? []);
	useEffect(() => setItems(wrapValues(props.value) ?? []), [props.value]);

    const getSchema = () : IFormSchema<IFormItem> => {
        var schema: IFormSchema<any> = {
            options: {
                validation: {
                    ignoreValidation: false,
                    validationRules: {
                        value: { id: "required", validationMark: ValidationMark.Required, validationRule: (item: FakeItem) => item.value != null && item.value != "", validationMessage: "Value must be specified", validateOn: ValidationEventType.Blur | ValidationEventType.Manual },
                    }
                },
                properties: { 
                    value: { propertyType: props.config?.propertyType, displayName: "Value", config: { resizable: true } },
                } 
            } as IFormItemOptions<any>
        }

        return schema as IFormSchema<IFormItem>;
    }

    const onChange = (fakeItems: Array<FakeItem>) : void => {
        const values = unwrapValues(fakeItems);
        props.onChange(values);
    }

	return (
        <>
            <FormBuilder
                item={items}
                itemType={FakeItem} // fake it till you make it
                listProps={{
                    config: { 
                        itemIdentifier: (item: FakeItem) => item?.value,
                        multiSelect: true, 
                        onItemsChange: (fakeItems: Array<FakeItem>) => onChange(fakeItems),
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
