import { useCallback, useRef, useState, SetStateAction, Dispatch } from "react";

const isFunction = <S>(setStateAction: SetStateAction<S>): setStateAction is (prevState: S) => S => typeof setStateAction === "function";

type ReadOnlyRefObject<T> = {
    readonly current: T;
};

// type UseStateRef = {
//     <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>];
//     <S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>, ReadOnlyRefObject<S | undefined>];
// };

/**
 * Hook for adding a ref to the regular usestate hook.
 * The ref is automatically updated when setstate is called.
 * @returns a regular usestate where a ref is included
 */
 export const useStateRef = <S>(initialState?: S | (() => S)) : [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>] => {
    const [state, setState] = useState<S>(initialState as any); // sometimes types are fucked in TS (ewi) // TODO!!
    const ref = useRef<S>(state);
  
    const dispatch: typeof setState = useCallback((setStateAction:any) => {
        ref.current = isFunction<S>(setStateAction) ? setStateAction(ref.current) : setStateAction;
        setState(ref.current);
    }, []);
  
    return [state, dispatch, ref];
};