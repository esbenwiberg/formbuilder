// idPropertiesList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import idPropertiesListListDocs from './idPropertiesListListDocs.mdx';
import { FormBuilder } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
import { createFluentBuilder, fluentUiValidationMessageElement } from '../../../formbuilder';
import { fluentUiLabel } from '../../../formbuilder/builders/fluentUI/components/fluentUiLabel';
import { FluentFormShimmer } from '../../../formbuilder/builders/fluentUI/components/list/components/FluentFormShimmer';
import { listWithIdsFormOptions } from './models/options';

initializeIcons(/* optional base url */);

formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder());
    
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

export const ListWithIdProperties: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...listWithIdsFormOptions as any} />;