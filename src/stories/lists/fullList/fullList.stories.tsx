// fullList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import { ComplexObjectBuilder } from '../../../formbuilder/builders/custom/ComplexObjectBuilder';
import fullListDocs from './fullListDocs.mdx';
import { fullListFormOptions } from './models/FullListFormOptions';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
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
  title: 'Lists',
  component: FormBuilder,
  parameters: {
    docs: {
      page: fullListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const FullList: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...fullListFormOptions} />;