export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?:
            Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, undefined>>
    }[Keys]

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
