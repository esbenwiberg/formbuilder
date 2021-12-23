// mostSimple.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import mostSimpleDocs from './mostSimpleDocs.mdx';
import { initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { simpleFormItemOptions } from './models/options';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder, FormRef } from '@wiberg/formbuilder';
import { IMyFormItem } from './models/interfaces';

initializeIcons(/* optional base url */);


formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder());

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Basic/Single item',
  component: FormBuilder,
  parameters: {
    docs: {
      page: mostSimpleDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const MostSimple: ComponentStory<typeof FormBuilder> = () => {
  const formRef = useRef<FormRef<IMyFormItem>>();

  return  <>
            <FormBuilder {...simpleFormItemOptions as any} ref={formRef} />
            <div style={{ border: "dotted 1px black", padding: "20px", margin: "10px" }}>
              <Label>This is outside the form:</Label>
              <PrimaryButton text="Log item to console" onClick={() => console.log(formRef.current?.getItem())} />
            </div>
          </>
}