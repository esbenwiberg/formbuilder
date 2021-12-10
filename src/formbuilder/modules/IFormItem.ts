import { Factory } from "../utils/Factory";
import { ISchemaProvider, SchemaProvider } from "../models/schema/ISchemaProvider";

// hack for allowing to index by property, on objects implementing the 'IFormItem' interface
interface IObjectKeys {
    [key: string]: string | keyof IFormItem | any | undefined;
}

export interface IFormItem extends IObjectKeys {
    // just a marker interface
}

// type wrappers
export type SchemaProviderWrapper = typeof SchemaProvider;
export type FormItemWrapper = IFormItem;
export type SchemaProviderWrapperCreate = new () => SchemaProviderWrapper;

export interface ProviderMapping {
    key: string; // used while developing
    itemType: () => IFormItem;
    provider: SchemaProviderWrapper;
}

// add a registry of the type you expect
export module IFormItem {
   
    const implementations: Array<ProviderMapping> = [];

    export const register = <T extends SchemaProviderWrapper>(provider: T) => {
        let instance = new Factory().create<ISchemaProvider>((provider as any));
        let key = instance.key;
        let itemType = instance.itemType;
        implementations.push({ key, itemType, provider } as ProviderMapping)
        return (ctor: Function) => console.log("IFormItem class registered: " + key);
    }

    export const getImplementations = () : Array<ProviderMapping> => {
        return implementations;
    }

    export const getSchemaProvider = <T extends IFormItem>(type: T) : ProviderMapping | undefined => {
        return implementations.find(_ => _.itemType() === type as IFormItem);
    }
}



//-----------------------------------------------------------------------------------------------


// export namespace IFormItem {
   
//     const implementations: Map<string, SchemaProviderWrapper> = new Map();

//     export const register = <V extends FormItemWrapper, T extends SchemaProviderWrapper>(schemaProvider: T) => {
//         let key = schemaProvider.prototype.key;
//         implementations.set(key, schemaProvider);
//         return (ctor: Function) => console.log("FormItem class registered: " + key);
//     }

//     export const getImplementations = <T extends SchemaProvider<IFormItem>>() : Map<string, SchemaProviderWrapper> => {
//         return implementations;
//     }

//     export const getSchemaProvider = <T extends SchemaProvider<IFormItem>>(key: string) : SchemaProviderWrapper | undefined => {
//         return implementations.get(key);
//     }
// }


//-----------------------------------------------------------------------------------------------

// // add a registry of the type you expect
// export namespace IFormItem {
   
//     const implementations: Map<FormItemWrapper, SchemaProviderWrapper> = new Map();

//     export const register = <V extends FormItemWrapper, T extends SchemaProviderWrapper>(name: V, schemaProvider: T) => {
//         implementations.set(name, schemaProvider);
//         return (ctor: Function) => console.log("FormItem class registered: " + name);
//     }

//     export const getImplementations = <T extends SchemaProvider<IFormItem>>() : Map<FormItemWrapper, SchemaProviderWrapper> => {
//         return implementations;
//     }

//     export const getSchemaProvider = <T extends SchemaProvider<IFormItem>>(key: FormItemWrapper) : SchemaProviderWrapper | undefined => {
//         return implementations.get(key);
//     }
// }