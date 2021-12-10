import { Label } from '@fluentui/react';
import * as React from 'react';
import { useRef, useState } from 'react';
import { ComplexObjectBuilder } from '../formbuilder/builders/custom/ComplexObjectBuilder';
import { FluentBuilder } from '../formbuilder/builders/fluentUI/FluentBuilder';
import { FormRef } from '../formbuilder/components/Form';
import { FormBuilder } from '../formbuilder/components/FormBuilder';
import MyCustomComponent from './PropertyCustomComponent/MyCustomComponent';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { PluginFormItem } from './DynamicListForm/PluginFormItem';
import { dynamicListFormOptions } from './DynamicListForm/DynamicListFormOptions';
import { navGroupRenderOptions } from './Groupings/NavGroupRender/NavGroupRenderOptions';
import { tabGroupRenderOptions } from './Groupings/TabGroupRender/TabGroupRenderOptions';
import { dynamicFormItemOptions } from './DynamicForm/DynamicFormItemOptions';
import { itemWithChildFormItemOptions } from './ItemWithChildFormItem/ItemWithChildFormItemOptions';
import { customRenderOptions } from './PropertyCustomComponent/CustomRenderOptions';
import { simpleListFormOptions } from './Lists/SimpleList/SimpleListFormOptions';
import { groupedsListFormOptions } from './Lists/GroupedList/GroupedListFormOptions';
import { fullListFormOptions } from '../test/Lists/FullList/FullListFormOptions';
import { itemWithChildListFormItemOptions } from '../test/ItemWithListChildFormItem/ItemWithListChildFormItemOptions';
import { listWithIdsFormOptions } from '../test/Lists/ListWithIdValues/ListWithIdsFormOptions';
import { IPropertyOverrides } from '../formbuilder/interfaces/IPropertyOverrides';
import { formbuilder } from '../formbuilder/builders/helpers/FormBuilderInitializer';

initializeIcons(/* optional base url */);

// initializeFormBuilder(
//     [
//         FluentBuilder.Create(),
//         ComplexObjectBuilder.Create()
//     ],
//     { texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } }
// );

formbuilder.initialize()
    .withBuilders(FluentBuilder.Create(), ComplexObjectBuilder.Create())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })

export const FormBuilderApp: React.FC = () => {

    const formRef = useRef<FormRef<PluginFormItem>>();

    const [propertyOverrides, setPropertyOverrides] = useState<IPropertyOverrides | undefined>();

	return  <div style={{ padding: "20px" }}>
                <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
                    <Label>This is outside the form:</Label>
                    <h2>Form Builder Test</h2>
                    <button onClick={() => console.log(formRef.current?.getItem())}>LOG ITEM</button>
                    <button onClick={() => formRef.current?.validateItem()}>VALIDATE</button>
                    <button onClick={() => setPropertyOverrides({ hiddenProps: [ "name" ] }) }>PROPERTYOVERRIDES</button>
                </div>
                <FormBuilder 
                    // {...dynamicListFormOptions}
                    // {...navGroupRenderOptions}
                    // {...tabGroupRenderOptions}
                    // {...dynamicFormItemOptions}
                    // {...itemWithChildFormItemOptions}
                    // {...customRenderOptions}
                    // {...simpleListFormOptions}
                    // {...groupedsListFormOptions}
                    {...fullListFormOptions}
                    // {...itemWithChildListFormItemOptions}
                    // {...listWithIdsFormOptions}
                    propertyOverrides={propertyOverrides}
                    ref={formRef}
                    keyPrefix={"root"}
                />
            </div>
}