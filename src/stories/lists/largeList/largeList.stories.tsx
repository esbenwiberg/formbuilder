// largeList.stories.ts|tsx

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { largeListFormOptions } from './models/LargeFormOptions';
import { formbuilder } from '../../../formbuilder/builders/helpers/FormBuilderInitializer';
import { FluentBuilder } from '../../../formbuilder/builders/fluentUI/FluentBuilder';
import largeListDocs from './largeListDocs.mdx';
import { FormBuilder, IFormBuilderProps } from '../../../formbuilder/components/FormBuilder';
import { initializeIcons } from '@fluentui/react';
import { CountDownConfirmDialog, ICountDownConfirmDialogInfo } from './models/CountDownConfirmDialog';
import { IFormBuilderListMenuItemSelectionMode } from '../../../formbuilder/components/config/IFormBuilderListConfig';
import { LargeListFormItem } from './models/LargeListFormItem';
import { mergeDeep } from '../../../formbuilder/utils/common/MergeObjects';

initializeIcons(/* optional base url */);

formbuilder.initialize()
    .withBuilders(FluentBuilder.Create())
    .withLanguage({ texts: { areas: { common: { save: "Save this" }, form: { dateDefaultPlaceholder: "Pick a date.." } } } })
    
export default {
  title: 'Lists',
  component: FormBuilder,
  parameters: {
    docs: {
      page: largeListDocs,
    },
  },
} as ComponentMeta<typeof FormBuilder>;


export const LargeList: ComponentStory<typeof FormBuilder> = () => {
  
  const [confirmInfo, setConfirmInfo] = useState<ICountDownConfirmDialogInfo>();
  
  const showDeleteDialog = (deleteItems: (pre?: (items: LargeListFormItem[]) => boolean | void) => void) => {
    setConfirmInfo({ callback: () => deleteItems(() => true), dismissCallback: () => deleteItems(() => false), count: 10, title: "Are you sure?", subText: "This cannot be undone!" } as ICountDownConfirmDialogInfo);
  }

  const overrideOptions = { 
    listProps: {
      config: null,
      menuConfig: {
        actions: (newItem, editItem, deleteItems) => (
            [
                { title: "New", iconName: "Add", selectionMode: IFormBuilderListMenuItemSelectionMode.None | IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => newItem() },
                { title: "Edit", iconName: "Edit", selectionMode: IFormBuilderListMenuItemSelectionMode.Single, action: () => editItem() },
                { title: "Delete", iconName: "Delete", selectionMode: IFormBuilderListMenuItemSelectionMode.Single | IFormBuilderListMenuItemSelectionMode.Multi, action: () => showDeleteDialog(deleteItems) }
            ]
        )
      },
    }
  };

  const options = mergeDeep(overrideOptions as Partial<IFormBuilderProps<LargeListFormItem>>, largeListFormOptions) ;

  return  <>
            <FormBuilder
              {...options}
            />
            <CountDownConfirmDialog
              info={confirmInfo}
              cancelText="Cancel"
              confirmText="I know what I'm doing!"
            />
          </>
};