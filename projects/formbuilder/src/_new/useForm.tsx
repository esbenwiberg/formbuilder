import { useCallback, useEffect, useRef, useState } from "react";
import { IFormGrouping, IFormSchema } from "..";
import { FormBuilder, IFormBuilderListProps, FormBuilderRef, IFormBuilderProps, ISchemaConfig } from "../components/FormBuilder"
import { RequireOnlyOne } from "../interfaces/types/Partials";
import { FormProvider, IFormContext, useFormContext } from "./FormContext";

export const useForm = <T,>(schema: IFormSchema<T>, item: T, formOptions?: Partial<IFormBuilderProps<T>>, GroupingContainer?: React.FC<{groupings: IFormGrouping[]}> | undefined, Grouping?: React.FC<{grouping: IFormGrouping}> | undefined) => {

    const formRef = useRef<FormBuilderRef<T>>();

    const [formItem, setFormItem] = useState(item);
    const [formSchema, setFormSchema] = useState(schema);
    const changedFields = useRef<string[]>([]);

    useEffect(() => setFormItem(item), [item]);
    useEffect(() => setFormSchema(schema), [schema]);
    
    const addChangedField = useCallback((field: string) => {
        if (!changedFields.current.includes(field)) {
            changedFields.current.push(field);
        }
    }, [])

    return {
        Form: (
            <FormProvider item={item} schema={schema}>
                <FormBuilder
                    formRef={formRef}
                    {...formOptions}
                    item={formItem}
                    schemaConfig={{ schema: formSchema }}
                    singleItemProps={{onPropertyChange(item: T, prop: string, value: any) {
                        // add to changed properties
                        addChangedField(prop);
                        // update item
                        setFormItem(item);
                        // from form props
                        formOptions?.singleItemProps?.onPropertyChange?.(item, prop, value);
                    }}}
                    groupContainer={GroupingContainer}
                    groupRender={Grouping}
                />
            </FormProvider>
        ),
        validateItem: formRef.current?.validateItem,
        getItem: () => formItem,
        changedFields: changedFields
    }
}

export const useFormList = <T,>(schema: RequireOnlyOne<ISchemaConfig<T>, "schema" | "schemaProvider">, item: T, listOptions: IFormBuilderListProps<T>) => {

    return {
        Form: (
            <FormBuilder
                item={item}
                schemaConfig={ schema }
                listProps={listOptions}
            />
        ),
        
    }
}
