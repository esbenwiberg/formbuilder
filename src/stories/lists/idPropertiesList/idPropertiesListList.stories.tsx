// idPropertiesList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import { ComplexObjectBuilder } from '../../../formbuilder/builders/custom/ComplexObjectBuilder';
import idPropertiesListListDocs from './idPropertiesListListDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
import { listWithIdsFormOptions } from './models/ListWithIdsFormOptions';

initializeIcons(/* optional base url */);

formbuilder.initialize()
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
      page: idPropertiesListListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const ListWithIdProperties: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...listWithIdsFormOptions} />;