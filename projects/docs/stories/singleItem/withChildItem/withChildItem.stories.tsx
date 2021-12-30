// tabGroups.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withChildItemDocs from './withChildItemDocs.mdx';
import { DefaultButton, initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { itemWithChildFormItemOptions } from './models/options';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder, FormRef } from '@wiberg/formbuilder';
import { anotherFormItemSchemaProvider } from './models/schemas';
import { IMyFormItemChild } from './models/interfaces';

initializeIcons(/* optional base url */);


formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })

formbuilder.registerSchemaProvider(anotherFormItemSchemaProvider);
    
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Basic/Single item',
  component: FormBuilder,
  parameters: {
    docs: {
      page: withChildItemDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const WithChildItem: ComponentStory<typeof FormBuilder> = () => {
  const formRef = useRef<FormRef<IMyFormItemChild>>();
  return  <>
            <FormBuilder {...itemWithChildFormItemOptions } formRef={formRef} />
            <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
                  <Label>This is outside the form:</Label>
                  <PrimaryButton text="Log item to console" onClick={() => console.log(formRef.current?.getItem())} />
                  <DefaultButton text="Validate" onClick={() => formRef.current?.validateItem()} />
              </div>
          </>
}