export const debounce = (timer: NodeJS.Timer | undefined, callback: Function, ms: number) : NodeJS.Timer => {
    clearTimeout(timer as NodeJS.Timer);
    timer = setTimeout(() => {
        callback();
    }, ms || 0) as any;
    return timer as NodeJS.Timer;
}