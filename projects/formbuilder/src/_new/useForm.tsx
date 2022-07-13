import { useRef } from "react"
import { FormBuilder, IFormBuilderListProps, FormBuilderRef, IFormBuilderProps } from "../components/FormBuilder"
import { ISchemaProvider } from "../interfaces/schema/ISchemaProvider"

export const useForm = <T,>(schema: ISchemaProvider<T>, item: T, formOptions?: Partial<IFormBuilderProps<T>>) => {

    const formRef = useRef<FormBuilderRef<T>>();

    const changedFields: string[] = [];

    return {
        Form: (
            <FormBuilder
                formRef={formRef}
                {...formOptions}
                item={item}
                schemaConfig={{ schemaProvider: schema }}
                singleItemProps={{onPropertyChange(item: T, prop: string, value: any) {
                    // add to changed properties aaray
                    if (!changedFields.includes(prop)) {
                        changedFields.push(prop);
                    }
                    // from form props
                    formOptions?.singleItemProps?.onPropertyChange?.(item, prop, value);
                },}}
            />
        ),
        validateItem: formRef.current?.validateItem,
        getItem: formRef.current?.getItem,
        changedFields: changedFields
    }
}

export const useFormList = <T,>(schema: ISchemaProvider<T>, item: T, listOptions: IFormBuilderListProps<T>) => {

    return {
        Form: (
            <FormBuilder
                item={item}
                schemaConfig={{ schemaProvider: schema }}
                listProps={listOptions}
            />
        ),
        
    }
}

function FormBuilderRef<T>() {
    throw new Error("Function not implemented.");
}
