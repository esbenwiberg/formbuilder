// tabGroups.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import tabGroupsDocs from './tabGroupsDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
import { fluentUiLabel, fluentUiValidationMessageElement, createFluentBuilder } from '../../../formbuilder';
import { FluentFormShimmer } from '../../../formbuilder/builders/fluentUI/components/list/components/FluentFormShimmer';
import { tabGroupRenderOptions } from './models/options';

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
  title: 'Property groupings',
  component: FormBuilder,
  parameters: {
    docs: {
      page: tabGroupsDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const TabGroups: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...tabGroupRenderOptions as any} />;