import { mergeDeep } from "../../utils/MergeObjects";
import { RecursivePartial } from "../../utils/Partials";
import { formbuilderDefaultLanguage } from "./DefaultLanguage";
import { IFormbuilderLanguage } from "./ILanguage";

export const initLanguage = (language?: RecursivePartial<IFormbuilderLanguage>) : void => {
    lang = mergeDeep(lang, language as IFormbuilderLanguage) as IFormbuilderLanguage;
}

export var lang: IFormbuilderLanguage = formbuilderDefaultLanguage;