import { Label } from "@fluentui/react";
import { IDynamicPropertyComponentConfig, IFormItem, IFormItemPropertyOptions, LabelRender, ValidationMark } from "@wiberg/formbuilder";
import React from "react";

export const fluentUiLabel: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark: ValidationMark = ValidationMark.None) => <Label key={key} required={validationMark > 0}>{propertySchema.displayName}</Label>;