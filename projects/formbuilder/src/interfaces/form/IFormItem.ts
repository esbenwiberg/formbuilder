interface IObjectKeys {
    [key: string]: string | keyof IFormItem | any | undefined;
}

export interface IFormItem extends IObjectKeys {
    // just a marker interface
    [key: string]: string | keyof IFormItem | any | undefined;
}