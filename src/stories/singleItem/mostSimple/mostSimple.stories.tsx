// mostSimple.stories.ts|tsx

import React, { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import mostSimpleDocs from './mostSimpleDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons, Label, PrimaryButton } from '@fluentui/react';
import { FormRef } from '../../../formbuilder/components/Form';
import { simpleFormItemOptions } from './models/options';
import { createFluentBuilder, fluentUiValidationMessageElement } from '../../../formbuilder';
import { fluentUiLabel } from '../../../formbuilder/builders/fluentUI/components/fluentUiLabel';
import { FluentFormShimmer } from '../../../formbuilder/builders/fluentUI/components/list/components/FluentFormShimmer';
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
  title: 'Single item',
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