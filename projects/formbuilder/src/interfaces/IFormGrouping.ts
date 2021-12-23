import { IFormGroupOptions } from "./options/IFormGroupOptions";

export interface IFormGrouping extends IFormGroupOptions {
    groupKey: string;
    properties: Array<string>;
}