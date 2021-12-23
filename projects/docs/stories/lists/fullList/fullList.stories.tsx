// fullList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import fullListDocs from './fullListDocs.mdx';
import { initializeIcons } from '@fluentui/react';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder } from '@wiberg/formbuilder';
import { fullListFormOptions } from './models/options';

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
  title: 'Examples/Advanced/Lists',
  component: FormBuilder,
  parameters: {
    docs: {
      page: fullListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const FullList: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...fullListFormOptions as any} />;