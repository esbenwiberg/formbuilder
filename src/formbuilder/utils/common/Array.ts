export const array = {
    groupBy: <T>(arr: Array<T>, keySelector: (item: T) => string) : {[key: string] : Array<T> } => {
        let groups: {[key: string] : Array<T>} = arr.reduce((r: {[key: string] : Array<T>}, a: T) => {
            r[keySelector(a)] = [...r[keySelector(a)] || [], a];
            return r;
        }, {});
            
        return groups;
    },

    max: <T>(array: Array<T>, propertySelector: (item: T) => number) : number => array.reduce((oa, u) => Math.max(oa, propertySelector(u)), 0),
    min: <T>(array: Array<T>, propertySelector: (item: T) => number) : number => array.reduce((oa, u) => Math.min(oa, propertySelector(u)), Number.MAX_VALUE)
}
