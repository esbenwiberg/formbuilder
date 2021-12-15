// mostSimple.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import { ComplexObjectBuilder } from '../../../formbuilder/builders/custom/ComplexObjectBuilder';
import mostSimpleDocs from './mostSimpleDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { DefaultButton, initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { FormRef } from '../../../formbuilder/components/Form';
import { PluginFormItem } from '../../lists/dynamicList/models/PluginFormItem';
import { simpleFormItemOptions } from './models/FormItemOptions';
import { fluentUiValidationMessageElement } from '../../../formbuilder';
import { fluentUiLabel } from '../../../formbuilder/builders/fluentUI/components/fluentUiLabel';

initializeIcons(/* optional base url */);


formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement)
    .withBuilders(FluentBuilder.Create())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })
    
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Single item',
  component: FormBuilder,
  parameters: {
    docs: {
      page: mostSimpleDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const MostSimple: ComponentStory<typeof FormBuilder> = () => {
  const formRef = useRef<FormRef<PluginFormItem>>();
  return  <>
            <FormBuilder {...simpleFormItemOptions} ref={formRef} />
            <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
                  <Label>This is outside the form:</Label>
                  <PrimaryButton text="Log item to console" onClick={() => console.log(formRef.current?.getItem())} />
              </div>
          </>
}