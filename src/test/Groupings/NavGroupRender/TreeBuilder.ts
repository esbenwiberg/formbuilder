// builds a tree based on an array of path strings

const JoinToString = (array: Array<any>, seperator: string, property?: string): string => {
    if (!array) return "";
    return array.map(_ => property ? _[property] : _).join(seperator);
}

export const BuildTrees = <T>(paths: Array<any>, nameProp: string = "Name", pathProp: string = "Path", childrenProp: string = "Children", alterItem?: (item: T) => void) : Array<T> => {
    let result: Array<T> = [];
    let level = { result };

    paths.forEach(path => {
        let splits = [...path.split('|')];
        splits.reduce((r, name, i, a) => {
            if(!r[name]) {
                r[name] = {result: []};
                let pathStr = JoinToString(splits.slice(0, i + 1), "|");
                let obj = {} as any as T;
                (obj as any)[nameProp] = name;
                (obj as any)[pathProp] = pathStr;
                (obj as any)[childrenProp] = r[name].result;
                if (alterItem) alterItem(obj);
                r.result.push(obj);
            }
            
            return r[name];
        }, level)
    });

    return result;
}