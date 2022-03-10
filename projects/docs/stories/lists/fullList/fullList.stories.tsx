// fullList.stories.ts|tsx

import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import fullListDocs from './fullListDocs.mdx';
import { initializeIcons, PrimaryButton } from '@fluentui/react';
import { fluentUiLabel, fluentUiValidationMessageElement, FluentFormShimmer, createFluentBuilder } from '@wiberg/fluentui-builder';
import { formbuilder, FormBuilder } from '@wiberg/formbuilder';
import { fullListFormOptions } from './models/options';
import { IFullListFormItem } from './models/interfaces';

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



export const FullList: ComponentStory<typeof FormBuilder> = () => {
  const [items, setItems] = useState<IFullListFormItem[]>([]);

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
      <FormBuilder { ...fullListFormOptions } item={items} />
    </>
  )
}