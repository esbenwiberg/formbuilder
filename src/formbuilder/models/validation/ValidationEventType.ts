// export type ValidationEventType = "blur" | "change" | "manual" | "all";

export enum ValidationEventType {
    Blur = 1 << 0, // 1
    Change = 1 << 1, // 2
    Manual = 1 << 2, // 4
}