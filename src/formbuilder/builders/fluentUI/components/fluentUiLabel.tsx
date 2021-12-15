import { Label } from "@fluentui/react";
import React from "react";
import { LabelRender } from "../../..";
import { IFormItemPropertyOptions } from "../../../models/options/IFormItemPropertyOptions";
import { ValidationMark } from "../../../models/validation/ValidationMark";
import { IFormItem } from "../../../modules/IFormItem";
import { IDynamicPropertyComponentConfig } from "../../interfaces/IDynamicPropertyComponentConfig";

export const fluentUiLabel: LabelRender = <T extends IFormItem, C extends IDynamicPropertyComponentConfig>(propertySchema: IFormItemPropertyOptions<T, C>, key: string, validationMark: ValidationMark = ValidationMark.None) => <Label key={key} required={validationMark > 0}>{propertySchema.displayName}</Label>;