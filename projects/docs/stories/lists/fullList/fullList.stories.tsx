// fullList.stories.ts|tsx

import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import fullListDocs from './fullListDocs.mdx';
import { DefaultButton, initializeIcons, PrimaryButton, Stack } from '@fluentui/react';
import { FluentPropertyLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder } from '@wiberg/formbuilder';
import { fullListFormOptions } from './models/options';
import { IFullListFormItem } from './models/interfaces';

initializeIcons(/* optional base url */);

formbuilder.initialize()
    .usingComplexBuilder(FluentPropertyLabel, fluentUiValidationMessageElement, FluentFormShimmer)
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



export const FullList: ComponentStory<typeof FormBuilder> = () => {
  const [items, setItems] = useState<IFullListFormItem[]>([]);
  const [options, setOptions] = useState(fullListFormOptions);

  useEffect(() => {
    setTimeout(() => {
      setItems([
         { id: "1", firstname: 'Esben', age: 33, awesome: true, start: new Date(2022,1,1), custom: "Something custom" } as IFullListFormItem,
         { id: "2", firstname: 'Other', age: 12, awesome: false, custom: "Come on!"  } as IFullListFormItem
     ]);
 }, 2000);
  }, [])

  return (
    <>
      <Stack horizontal>
        <PrimaryButton text="Age +10" onClick={() => {
            const clone = [...items];
            clone.forEach(_ => _.age = _.age + 10);
            setItems(clone);
        }} />
        <DefaultButton text="Toggle shimmer" onClick={() => {
            const clone = {...options};
            clone.listProps.shimmerConfig.forceShimmer = !clone.listProps.shimmerConfig.forceShimmer;
            setOptions(clone);
        }} />
      </Stack>
      <FormBuilder { ...options } item={items} />
    </>
  )
}