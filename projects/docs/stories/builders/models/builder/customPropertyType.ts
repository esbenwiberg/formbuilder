import { IPropertyTypes, propertyTypes } from "@wiberg/formbuilder";

export interface ICustomPropertyTypes extends IPropertyTypes {
    specialText: string,
    specialNumber: string
}

export const customPropertyTypes: ICustomPropertyTypes = {
    ...propertyTypes,
    specialText: "specialText",
    specialNumber: "specialNumber"
}