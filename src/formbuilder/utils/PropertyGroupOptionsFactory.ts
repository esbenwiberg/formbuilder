import { AtLeast } from "../interfaces/types/Partials";
import { IFormGroupOptions } from "../models/options/IFormGroupOptions";

export class PropertyGroupOptionsFactory {
    public static GroupOptions = (options: AtLeast<IFormGroupOptions, "displayName">) : Partial<IFormGroupOptions> => {
        return options;
    }
}