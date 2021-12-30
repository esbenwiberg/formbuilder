// dynamicList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import dynamicListDocs from './dynamicListDocs.mdx';
import { initializeIcons } from '@fluentui/react';
import { FormBuilder, formbuilder } from '@wiberg/formbuilder';
import { createFluentBuilder, fluentUiValidationMessageElement, fluentUiLabel, FluentFormShimmer } from '@wiberg/fluentui-builder';
import { dynamicListFormOptions } from './models/options';

initializeIcons(/* optional base url */);

formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })
    
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Wizardry/Lists',
  component: FormBuilder,
  parameters: {
    docs: {
      page: dynamicListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const SuperDynamicList: ComponentStory<typeof FormBuilder> = () => <FormBuilder { ...dynamicListFormOptions } />;