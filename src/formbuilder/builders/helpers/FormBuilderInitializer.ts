import { buildFormItemRender, IFormItemRender } from "../../components/helpers/FormItemRender";
import { IFormItem } from "../../interfaces/form/IFormItem";
import { ISchemaProvider } from "../../interfaces/schema/ISchemaProvider";
import { RecursivePartial } from "../../interfaces/types/Partials";
import { IFormbuilderLanguage } from "../../models/language/ILanguage";
import { initLanguage } from "../../models/language/Language";
import { strings } from "../../utils/common/String";
import { createComplexObjectBuilder } from "../custom/ComplexObjectBuilder";
import { IFormItemBuilder, LabelRender } from "../interfaces/IFormItemBuilder";
import { ILoadingSpinnerProps } from "../interfaces/ILoadingSpinnerProps";

export interface IFormBuilder {
    formItemRender: IFormItemRender;

    /** initialize the formbuilder */
    initialize: () => IFormBuilder;
    /** use the complex builder, which is used for nested forms or render with custom components */
    usingComplexBuilder: (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element, loadingSpinner?: React.ElementType<ILoadingSpinnerProps>) => IFormBuilder;
    /** Add one or more of the standard builders or your own custom ones */
    withBuilders: (...builders: Array<IFormItemBuilder>) => IFormBuilder;
    /** override all or parts of the text used in the formbuilder */
    withLanguage: (language: RecursivePartial<IFormbuilderLanguage>) => IFormBuilder;

    /** use this to be able to register schemas, making the implementation of child forms prettier */
    registerSchemaProvider: <T extends IFormItem>(provider: ISchemaProvider<T>) => void;
    /** will get the schemaprovider by it's key */
    getSchemaProvider: <T extends IFormItem>(key: string) => ISchemaProvider<T> | undefined;

    /** verifies that the formbuilder is setup correctly - throws an error if not */
    verify: () => void;
}

const schemaRegister: { [id: string] : ISchemaProvider<IFormItem> } = {};

export const formbuilder: IFormBuilder = {
    formItemRender: undefined as any,
    
    initialize: () : IFormBuilder => {
        formbuilder.formItemRender = buildFormItemRender();
        return formbuilder;
    },
    usingComplexBuilder: (labelRender?: LabelRender, validationMsgElement?: (message: string) => JSX.Element, loadingSpinner?: React.ElementType<ILoadingSpinnerProps>) : IFormBuilder => {
        formbuilder.formItemRender?.register(createComplexObjectBuilder(labelRender, validationMsgElement, loadingSpinner));
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
    registerSchemaProvider: <T extends IFormItem>(provider: ISchemaProvider<T>) : void => {
        if (provider == null || strings.isNullOrWhiteSpace(provider.key)) return;
        schemaRegister[provider.key] = provider as ISchemaProvider<IFormItem>;
    },
    getSchemaProvider: <T extends IFormItem>(key: string) : ISchemaProvider<T> | undefined => {
        return schemaRegister[key];
    },
    verify: () =>  {
        if (formbuilder.formItemRender == null) // TODO: add link to init guide
            throw Error("Formbuilder not initialized! Call 'formBuilder.initialize' as early as possible");
        if (!formbuilder.formItemRender.hasBuilders()) // TODO: add link to builders guide
            throw Error("Formbuilder hasn't got any builders! Please add one ore more builders. Either the standard ones or your own customs using 'withBuilders' and 'usingComplexBuilder'.");
        
        // all is well
    }
}
