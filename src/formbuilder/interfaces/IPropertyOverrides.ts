export interface IPropertyOverrides {
    /** array of properties to disable - or 'true' for all */
    disabledProps?: Array<string> | true;
    /** array of properties to hide */
    hiddenProps?: Array<string>;
}