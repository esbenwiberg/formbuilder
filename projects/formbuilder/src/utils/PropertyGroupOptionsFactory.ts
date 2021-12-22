import { AtLeast } from "../interfaces/types/Partials";
import { IFormGroupOptions } from "../interfaces/options/IFormGroupOptions";

export const propertyGroupOptionsFactory = {
    groupOptions: (options: AtLeast<IFormGroupOptions, "displayName">) : Partial<IFormGroupOptions> => {
        return options;
    }
}