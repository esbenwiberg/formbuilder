import { ComplexObjectBuilder } from "../../..";
import { buildFormItemRender, IFormItemRender } from "../../components/helpers/FormItemRender";
import { IFormbuilderLanguage } from "../../models/language/ILanguage";
import { initLanguage } from "../../models/language/Language";
import { RecursivePartial } from "../../utils/Partials";
import { IFormItemBuilder } from "../interfaces/IFormItemBuilder";

export interface IFormBuilder {
    formItemRender: IFormItemRender;
    initialize: () => IFormBuilder;
    withBuilders: (...builders: Array<IFormItemBuilder>) => IFormBuilder;
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>) => IFormBuilder;
    verify: () => boolean;
}

export const formbuilder: IFormBuilder = {
    formItemRender: undefined as any,
    initialize: (): IFormBuilder => {
        formbuilder.formItemRender = buildFormItemRender();
        return formbuilder;
    },
    withBuilders: (...builders: IFormItemBuilder[]): IFormBuilder => {
        formbuilder.formItemRender?.registerRange([...builders, ComplexObjectBuilder.Create()]);
        return formbuilder;
    },
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>): IFormBuilder => {
        initLanguage(language);
        return formbuilder;
    },
    verify: () => formbuilder.formItemRender != null && formbuilder.formItemRender.hasBuilders()
}
