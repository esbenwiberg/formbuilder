import { Icon, Label } from '@fluentui/react';
import { memo, PropsWithChildren, ReactElement } from 'react';
import React from "react";
import { IFormItem, ValidationMark, IFormItemPropertyOptions, IDynamicPropertyComponentConfig } from '@wiberg/formbuilder';
 
interface IProps<T extends IFormItem> { 
	hideLabel?: boolean;
	validationMark?: ValidationMark;
	propertySchema: IFormItemPropertyOptions<T, IDynamicPropertyComponentConfig<T>>;
	parentKey?: string;
}

const FluentPropertyLabelComp = <T extends IFormItem>(props: PropsWithChildren<IProps<T>>) : ReactElement | null => {

	return (
			<div style={{display: "flex"}}>
				{ !props.hideLabel && <Label key={props.parentKey + "-label"} required={props.validationMark === ValidationMark.Required}>{props.propertySchema.displayName}</Label> }
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