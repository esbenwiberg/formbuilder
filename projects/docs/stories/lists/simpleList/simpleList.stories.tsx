// simpleList.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import simpleListDocs from './simpleListDocs.mdx';
import { initializeIcons } from '@fluentui/react';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder } from '@wiberg/formbuilder';
import { simpleListFormOptions } from './models/options';

initializeIcons(/* optional base url */);

formbuilder.initialize()
    .usingComplexBuilder(fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer)
    .withBuilders(createFluentBuilder());
    
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Examples/Basic/Lists',
  component: FormBuilder,
  parameters: {
    docs: {
      page: simpleListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;

export const SimpleList: ComponentStory<typeof FormBuilder> = () => <FormBuilder {...simpleListFormOptions } />;