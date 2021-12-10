import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { IFormSchema } from '../models/schema/IFormSchema';
import { ValidationOverride } from '../models/validation/ValidationOverride';
import { IFormItem } from '../modules/IFormItem';
import { IFormBuilderListProps } from './FormBuilder';
import { IFormGrouping } from '../interfaces/IFormGrouping';
import { formbuilder } from '../builders/helpers/FormBuilderInitializer';

export interface IFormListRenderProps<T extends IFormItem> extends IFormListProps<T> {
    onItemChange?: (item: T) => void;
}

export interface IFormListProps<T extends IFormItem> {
    itemType: new () => T;
    items: Array<T>;
    schema: IFormSchema<T>;
    groupContainer?: React.ElementType<{groupings: Array<IFormGrouping>}>;
    groupRender?: (grouping: IFormGrouping, children: Array<any>) => JSX.Element;
    validationOverride?: ValidationOverride;
    listProps: IFormBuilderListProps<T>;
    keyPrefix?: string;
}

export type FormListRef<T extends IFormItem> = { getItem: () => Array<T> };

export const FormList = forwardRef(<T extends IFormItem, FormListRef>(props : IFormListProps<T>, ref: FormListRef) => {

    const [items, setItems] = useState(props.items ?? []);
    const [listProps, setListProps] = useState<IFormListProps<T>>({...props});

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

    // TODO: remove these (ewi)
    // if (items == null) return null;
    if (listProps?.schema == null) return null;

    const ListContainer: React.ComponentType<IFormListRenderProps<T>> = formbuilder.formItemRender.list();

    if (!formbuilder.verify()) throw Error("Formbuilder not initialized correctly! Call 'initializeFormBuilder' as early as possible");

	return (
        <div className="formbuilder-listcontainer" key={`${props.keyPrefix}`} >
            <ListContainer {...listProps} items={items}  />
        </div>
    )
})
