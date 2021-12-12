// import { Label } from '@fluentui/react';
// import * as React from 'react';
// import { useRef, useState } from 'react';
// import { ComplexObjectBuilder } from '../formbuilder/builders/custom/ComplexObjectBuilder';
// import { FluentBuilder } from '../formbuilder/builders/fluentUI/FluentBuilder';
// import { FormRef } from '../formbuilder/components/Form';
// import { FormBuilder } from '../formbuilder/components/FormBuilder';
// import { initializeIcons } from '@fluentui/react/lib/Icons';
// import { IPropertyOverrides } from '../formbuilder/interfaces/IPropertyOverrides';
// import { formbuilder } from '../formbuilder/builders/helpers/FormBuilderInitializer';

// initializeIcons(/* optional base url */);

// // initializeFormBuilder(
// //     [
// //         FluentBuilder.Create(),
// //         ComplexObjectBuilder.Create()
// //     ],
// //     { texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } }
// // );

// formbuilder.initialize()
//     .withBuilders(FluentBuilder.Create())
//     .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })

// export const FormBuilderApp: React.FC = () => {

//     const formRef = useRef<FormRef<PluginFormItem>>();

//     const [propertyOverrides, setPropertyOverrides] = useState<IPropertyOverrides | undefined>();

// 	return  <div style={{ padding: "20px" }}>
//                 <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
//                     <Label>This is outside the form:</Label>
//                     <h2>Form Builder Test</h2>
//                     <button onClick={() => console.log(formRef.current?.getItem())}>LOG ITEM</button>
//                     <button onClick={() => formRef.current?.validateItem()}>VALIDATE</button>
//                     <button onClick={() => setPropertyOverrides({ hiddenProps: [ "name" ] }) }>PROPERTYOVERRIDES</button>
//                 </div>
//                 <FormBuilder 
//                     // {...dynamicListFormOptions}
//                     // {...navGroupRenderOptions}
//                     // {...tabGroupRenderOptions}
//                     // {...dynamicFormItemOptions}
//                     // {...itemWithChildFormItemOptions}
//                     // {...customRenderOptions}
//                     // {...simpleListFormOptions}
//                     // {...groupedsListFormOptions}
//                     // {...fullListFormOptions}
//                     // {...itemWithChildListFormItemOptions}
//                     // {...listWithIdsFormOptions}
//                     propertyOverrides={propertyOverrides}
//                     ref={formRef}
//                     keyPrefix={"root"}
//                 />
//             </div>
// }