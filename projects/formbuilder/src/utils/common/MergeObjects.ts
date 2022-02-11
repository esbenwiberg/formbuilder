import { RecursivePartial } from "../../interfaces/types/Partials";

export const mergeDeep = <T extends Record<string, any>>(...objects: Array<T | Partial<T> | RecursivePartial<T> | undefined>) : T => {

    const isObject = (obj: T) => obj && typeof obj === 'object';
    
    const filteredObjects = (objects.filter(_ => _ != null) as unknown)as T;

    return filteredObjects.reduce((prev: T, obj: T ) => {
        if (obj == null) return prev;
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];
            
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                (prev as any)[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                (prev as any)[key] = mergeDeep(pVal, oVal);
            }
            else {
                (prev as any)[key] = oVal;
            }
        });
      
      return prev;
    }, {});
}

// using 'prev' cast to any because fuckshitass!! (ewi)
// https://github.com/microsoft/TypeScript/issues/31661