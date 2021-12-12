// tabGroups.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import { ComplexObjectBuilder } from '../../../formbuilder/builders/custom/ComplexObjectBuilder';
import withChildItemDocs from './withChildItemDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { DefaultButton, initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { itemWithChildFormItemOptions } from './models/ItemWithChildFormItemOptions';
import { FormRef } from '../../../formbuilder/components/Form';
import { PluginFormItem } from '../../lists/dynamicList/models/PluginFormItem';

initializeIcons(/* optional base url */);


formbuilder.initialize()
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
      page: withChildItemDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const WithChldItem: ComponentStory<typeof FormBuilder> = () => {
  const formRef = useRef<FormRef<PluginFormItem>>();
  return  <>
            <FormBuilder {...itemWithChildFormItemOptions} ref={formRef} />
            <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
                  <Label>This is outside the form:</Label>
                  <PrimaryButton text="Log item to console" onClick={() => console.log(formRef.current?.getItem())} />
                  <DefaultButton text="Validate" onClick={() => formRef.current?.validateItem()} />
              </div>
          </>
}