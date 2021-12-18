import { Label } from "@fluentui/react";
import React from "react";
import { LabelRender } from "../../..";
import { IFormItem } from "../../../interfaces/form/IFormItem";
import { IFormItemPropertyOptions } from "../../../interfaces/options/IFormItemPropertyOptions";
import { ValidationMark } from "../../../models/validation/ValidationMark";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export const fluentUiLabel: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig<T>>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark: ValidationMark = ValidationMark.None) => <Label key={key} required={validationMark > 0}>{propertySchema.displayName}</Label>;