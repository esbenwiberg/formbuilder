export interface IPropertyOverrides {
    /** array of properties to disable - or 'true' for all */
    disabledProps?: Array<string> | boolean;
    /** array of properties to hide */
    hiddenProps?: Array<string>;
}