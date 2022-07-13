export const deepClone = <T>(source: T): T => {
	return Array.isArray(source)
			? source.map(item => deepClone(item))
			: source instanceof Date
				? new Date(source.getTime())
				: source && typeof source === 'object'
					? Object.getOwnPropertyNames(source).reduce((o, prop) => {
							Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop) as any);
							o[prop] = deepClone((source as any)[prop]);
							return o;
                        }, Object.create(Object.getPrototypeOf(source)))
					: source as T;
}