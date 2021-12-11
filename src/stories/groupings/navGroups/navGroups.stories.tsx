// tabGroups.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import { ComplexObjectBuilder } from '../../../formbuilder/builders/custom/ComplexObjectBuilder';
import navGroupsDocs from './navGroupsDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { navGroupRenderOptions } from './models/NavGroupRenderOptions';
import { initializeIcons } from '@fluentui/react';

initializeIcons(/* optional base url */);


formbuilder.initialize()
    .withBuilders(FluentBuilder.Create(), ComplexObjectBuilder.Create())
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

export const NavGroups: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...navGroupRenderOptions} />;