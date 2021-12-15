import { buildFormItemRender, IFormItemRender } from "../../components/helpers/FormItemRender";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { IFormbuilderLanguage } from "../../models/language/ILanguage";
import { initLanguage } from "../../models/language/Language";
import { ComplexObjectBuilder } from "../custom/ComplexObjectBuilder";
import { IFormItemBuilder, LabelRender } from "../interfaces/IFormItemBuilder";

export interface IFormBuilder {
    formItemRender: IFormItemRender;
    initialize: () => IFormBuilder;
    usingComplexBuilder: (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element) => IFormBuilder;
    withBuilders: (...builders: Array<IFormItemBuilder>) => IFormBuilder;
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>) => IFormBuilder;
    verify: () => boolean;
}

export const formbuilder: IFormBuilder = {
    formItemRender: undefined as any,
    initialize: () : IFormBuilder => {
        formbuilder.formItemRender = buildFormItemRender();
        return formbuilder;
    },
    usingComplexBuilder: (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element) : IFormBuilder => {
        formbuilder.formItemRender?.register(ComplexObjectBuilder.Create(labelRender, validationMsgElement));
        return formbuilder;
    },
    withBuilders: (...builders: IFormItemBuilder[]): IFormBuilder => {
        formbuilder.formItemRender?.registerRange(builders);
        return formbuilder;
    },
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>): IFormBuilder => {
        initLanguage(language);
        return formbuilder;
    },
    verify: () => formbuilder.formItemRender != null && formbuilder.formItemRender.hasBuilders()
}
