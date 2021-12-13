import { Icon } from '@fluentui/react';
import { memo, PropsWithChildren, ReactElement } from 'react';
import React from "react";
import { IFormItemPropertyOptions } from '../../../../../models/options/IFormItemPropertyOptions';
import { IFormItem } from '../../../../../modules/IFormItem';
import { LabelRender } from '../../../../interfaces/IFormItemBuilder';
import { ValidationMark } from '../../../../../models/validation/ValidationMark';
import { IDynamicPropertyComponentConfig } from '../../../../interfaces/IDynamicPropertyComponentConfig';
 
interface IProps<T extends IFormItem> { 
    labelRender: LabelRender;
	hideLabel?: boolean;
	validationMark?: ValidationMark;
	propertySchema: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig>;
	parentKey?: string;
}

const FluentPropertyLabelComp = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	return (
			<div style={{display: "flex"}}>
				{ !props.hideLabel && props.labelRender(props.propertySchema, props.parentKey + "-label", props.validationMark) }
				{ (!props.hideLabel && props.propertySchema.description) &&
					<Icon key={props.parentKey + "-labelicon"} iconName={ "Info" } styles={{root: {marginTop: "8px", paddingLeft: "5px", cursor: "help"}}} title={props.propertySchema.description} />
				}
			</div>
	)
}


const preventUpdate = (prev: any, next: any) => {
    return prev.labelText === next.labelText;
}

export const FluentPropertyLabel = memo(FluentPropertyLabelComp, preventUpdate) as typeof FluentPropertyLabelComp;