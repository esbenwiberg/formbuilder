import { FormBuilder, IFormBuilderListProps, FormBuilderRef, IFormBuilderProps, ISchemaConfig } from "../components/FormBuilder"
import { RequireOnlyOne } from "../interfaces/types/Partials";
import { FormProvider, IFormContext, useFormContext } from "./FormContext";

export const useForm = <T,>(schema: RequireOnlyOne<ISchemaConfig<T>, "schema" | "schemaProvider">, item: T, formOptions?: Partial<IFormBuilderProps<T>>) => {

    const ctx = useFormContext<IFormContext<T>>();

    return {
        Form: (
            <FormProvider item={item}>
                <FormBuilder
                    {...formOptions}
                    item={ctx.item}
                    schemaConfig={ schema }
                    singleItemProps={{onPropertyChange(item: T, prop: string, value: any) {
                        // add to changed properties
                        ctx.addChangedField(prop);
                        // update ctx item
                        ctx.setItem(item);
                        // from form props
                        formOptions?.singleItemProps?.onPropertyChange?.(item, prop, value);
                    },}}
                />
            </FormProvider>
        ),
        // validateItem: formRef.current?.validateItem,
        getItem: () => ctx.item,
        changedFields: ctx.changedFields
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
