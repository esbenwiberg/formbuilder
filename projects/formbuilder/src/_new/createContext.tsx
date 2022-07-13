import { createContext as createCtx, useContext } from 'react';

export function createContext<ContextType>(initialContext?: ContextType) {
    const ctx = createCtx<ContextType | undefined>(initialContext);

    function useCtx<T>() {
        const c = useContext(ctx);
        if (!c) 
            throw new Error("useCtx must be inside a Provider with a value");
        
        return c;
    }
    
    return [useCtx, ctx.Provider, ctx] as const;
};
