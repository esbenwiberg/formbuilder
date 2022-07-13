import * as React from "react";
import { useState } from "react";
import { createContext } from "./createContext";
import { deepClone } from './deepClone';

export interface IFormContext {
    // fieldValues?: Map<keyof T, any>;
    fieldValues?: Map<string, any>;
    setFieldValues?: (values: Map<string, any>) => void;
    setFieldValue?: (prop: string, value: any) => void;
}

const [useCtx, Provider] = createContext<IFormContext>({});

export const useFormContext = useCtx;

export const FomContext: React.FC<any> = ({children}) => {

    const [fieldValues, setFieldValues] = useState<Map<string, any>>(new Map<string, any>());

    const setFieldValue = (prop: string, value: any) => {
        const clone = deepClone(fieldValues);
        clone[prop] = value;
        setFieldValues(clone)
    }

    return (
        <Provider value={{fieldValues, setFieldValues, setFieldValue}}>
            {children}
        </Provider>
    )
}