// mostSimple.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import customBuilderDocs from './custombuilderDocs.mdx';
import { initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { simpleFormItemOptions } from './models/options';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder, FormRef } from '@wiberg/formbuilder';
import { IMyFormItem } from './models/interfaces';
import { createCustomBuilder } from './models/builder/myCustomBuilder';

initializeIcons(/* optional base url */);

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Advanced/Custom builder',
  component: FormBuilder,
  parameters: {
    docs: {
      page: customBuilderDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const CustomBuilder: ComponentStory<typeof FormBuilder> = () => {
  formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createCustomBuilder(), createFluentBuilder());

  const formRef = useRef<FormRef<IMyFormItem>>();

  return  <>
            <FormBuilder {...simpleFormItemOptions } formRef={formRef} />
            <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
              <Label>This is outside the form:</Label>
              <PrimaryButton text="Log item to console" onClick={() => console.log(formRef.current?.getItem())} />
            </div>
          </>
}
