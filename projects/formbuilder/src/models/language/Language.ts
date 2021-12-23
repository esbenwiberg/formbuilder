import { RecursivePartial } from "../../interfaces/types/Partials";
import { mergeDeep } from "../../utils/common/MergeObjects";
import { formbuilderDefaultLanguage } from "./DefaultLanguage";
import { IFormbuilderLanguage } from "./ILanguage";

export const initLanguage = (language?: RecursivePartial<IFormbuilderLanguage>) : void => {
    lang = mergeDeep(lang, language as IFormbuilderLanguage) as IFormbuilderLanguage;
}

export var lang: IFormbuilderLanguage = formbuilderDefaultLanguage;