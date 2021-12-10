import { IFormGroupOptions } from "../models/options/IFormGroupOptions";
import { AtLeast } from "./Partials";

export class PropertyGroupOptionsFactory {
    public static GroupOptions = (options: AtLeast<IFormGroupOptions, "displayName">) : Partial<IFormGroupOptions> => {
        return options;
    }
}