import { strings } from "./String";

/**
 * Parse a string to an object of type **T**
 * @param str 
 * @returns The parsed json object as **T**
 * @author ewi
 */
const parse = <T>(str: string): T => JSON.parse(str) as T;

/**
 * 
 * @param obj 
 * @returns 
 * @author ewi
 */
const clone = <T>(obj: T): T => parse<T>(JSON.stringify(obj));

/**
 * Tries to parse an object to a string
 * @param objString 
 * @returns The stringyfied object as a string or an empty string if stringify fails
 * @author ewi
 */
const tryStringify = (obj: any) => {
    if (obj === null || obj === undefined) return "";

    try {
        const jsonString = JSON.stringify(obj);
        return jsonString;
    }
    catch { 
        return "";
    }
}

/**
 * Tries to parse a string to a json object
 * @param objString 
 * @returns The parsed json object or null if parsing fails
 * @author ewi
 */
const tryParse = <T>(objString: string | undefined) : T | null => {
    if (objString === undefined) return null;
    if (strings.isNullOrWhiteSpace(objString)) return null;

    try {
        const jsonObj = parse<T>(objString);
        return jsonObj;
    }
    catch { 
        return null;
    }
}

export const json = {
    parse,
    tryParse,
    tryStringify,
    clone
}