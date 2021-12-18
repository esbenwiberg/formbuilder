import { formbuilder } from "../..";

/** the type of a property */
// export enum PropertyType {
//     String = 1,
//     Number = 2, // TODO: slider
//     Boolean = 3,
//     Date = 4,

//     PredefinedArray = 5,  // dropdown
//     Array = 6, // simple list
    
//     Map = 10,    // key/value
//     Color = 11,  
//     Json = 12,   
    
//     FormItem = 999,
//     Custom = 1000
// }

const string: Readonly<string> = "string";
const number: Readonly<string> = "number";
const boolean: Readonly<string> = "boolean";
const date: Readonly<string> = "date";
const predefinedArray: Readonly<string> = "predefinedArray";
const array: Readonly<string> = "array";
const json: Readonly<string> = "json";
const formItem: Readonly<string> = "formItem";
const custom: Readonly<string> = "custom";

export interface IPropertyTypes {
    string: string,
    number: string,
    boolean: string,
    date: string,
    predefinedArray: string,
    array: string,
    json: string,
    formItem: string,
    custom: string
}


export const propertyTypes: IPropertyTypes = {
    string,
    number,
    boolean,
    date,
    predefinedArray,
    array,
    json,
    formItem,
    custom
}

export interface ICustomPropertyTypes extends IPropertyTypes {
    color: string,
    horse: string
}

export const customPropertyTypes: ICustomPropertyTypes = {
    ...propertyTypes,
    color: "color",
    horse: "horse"
}

