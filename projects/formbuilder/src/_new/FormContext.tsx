import * as React from "react";
import { Dispatch, useRef, useState } from "react";
import { IFormItem } from "../interfaces/form/IFormItem";
import { createContext } from "./createContext";
import { deepClone } from './deepClone';

export interface IFormContextProvider<T> {
    item: T;
}

export interface IFormContext<T> {
    item: T;
    setItem: Dispatch<T>;
    changedFields: string[];
    addChangedField: (field: string) => void;
    // fieldValues?: Map<keyof T, any>;
    // fieldValues?: Map<string, any>;
    // setFieldValues?: (values: Map<string, any>) => void;
    // setFieldValue?: (prop: string, value: any) => void;
}

const [useCtx, Provider] = createContext<IFormContext<any>>({
    item: undefined,
    setItem: () => {},
    changedFields: [],
    addChangedField: (field: string) => { }
});

export const useFormContext = useCtx;

export const FormProvider = <T extends IFormItem>(props: React.PropsWithChildren<IFormContextProvider<T>>) : React.ReactElement | null => {
// export const FomContext: React.FC<IFormContext<T>> = ({children}) => {

    // const [fieldValues, setFieldValues] = useState<Map<string, any>>(new Map<string, any>());

    // const setFieldValue = (prop: string, value: any) => {
    //     const clone = deepClone(fieldValues);
    //     clone[prop] = value;
    //     setFieldValues(clone)
    // }

    const [item, setItem] = useState<T>({} as T);
    const changedFields = useRef<string[]>([]);

    const addChangedField = (field: string) => {
        if (!changedFields.current.includes(field)) {
            changedFields.current.push(field);
        }
    }

    return (
        <Provider value={{ item, setItem, addChangedField, changedFields: changedFields.current }}>
            {props.children}
        </Provider>
    )
}