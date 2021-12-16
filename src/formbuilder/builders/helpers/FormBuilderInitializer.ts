import { buildFormItemRender, IFormItemRender } from "../../components/helpers/FormItemRender";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { IFormbuilderLanguage } from "../../models/language/ILanguage";
import { initLanguage } from "../../models/language/Language";
import { ComplexObjectBuilder } from "../custom/ComplexObjectBuilder";
import { IFormItemBuilder, LabelRender } from "../interfaces/IFormItemBuilder";

export interface IFormBuilder {
    formItemRender: IFormItemRender;
    /** initialize the formbuilder */
    initialize: () => IFormBuilder;
    /** use the complex builder, which is used for nested forms or render with custom components */
    usingComplexBuilder: (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element) => IFormBuilder;
    /** Add one or more of the standard builders or your own custom ones */
    withBuilders: (...builders: Array<IFormItemBuilder>) => IFormBuilder;
    /** override all or parts of the text used in the formbuilder */
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>) => IFormBuilder;
    /** verifies that the formbuilder is setup correctly - throws an error if not */
    verify: () => void;
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
    verify: () =>  {
        if (formbuilder.formItemRender == null) // TODO: add link to init guide
            throw Error("Formbuilder not initialized! Call 'formBuilder.initialize' as early as possible");
        if (!formbuilder.formItemRender.hasBuilders()) // TODO: add link to builders guide
            throw Error("Formbuilder hasn't got any builders! Please add one ore more builders. Either the standard ones or your own customs using 'withBuilders' and 'usingComplexBuilder'.");
        
        // all is well
    }
}
