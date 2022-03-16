// tabGroups.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import navGroupsDocs from './navGroupsDocs.mdx';
import { initializeIcons } from '@fluentui/react';
import { navGroupRenderOptions } from './models/options';
import { fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder, FluentPropertyLabel } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder } from '@wiberg/formbuilder';

initializeIcons(/* optional base url */);


formbuilder
    .usingComplexBuilder(FluentPropertyLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })
    
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Basic/Property groupings',
  component: FormBuilder,
  parameters: {
    docs: {
      page: navGroupsDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const NavGroups: ComponentStory<typeof FormBuilder> = () => <FormBuilder { ...navGroupRenderOptions } />;