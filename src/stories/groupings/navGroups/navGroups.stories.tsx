// tabGroups.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import navGroupsDocs from './navGroupsDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
import { fluentUiLabel } from '../../../formbuilder/builders/fluentUI/components/fluentUiLabel';
import { createFluentBuilder, fluentUiValidationMessageElement } from '../../../formbuilder';
import { navGroupRenderOptions } from './models/options';
import { FluentFormShimmer } from '../../../formbuilder/builders/fluentUI/components/list/components/FluentFormShimmer';

initializeIcons(/* optional base url */);


formbuilder
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
      page: navGroupsDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const NavGroups: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...navGroupRenderOptions as any} />;