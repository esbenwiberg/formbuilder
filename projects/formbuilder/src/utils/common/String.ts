export const strings = {
    isNullOrWhiteSpace: (str: string): boolean => str === null || str === undefined || (!str.replace(/\s/g, '').length && str !== "")
}