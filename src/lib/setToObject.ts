/**
 * A semi-complex function to manipulate and set paths in objects.
 * @since 1.1.0
 * @param data The data object to manipulate.
 * @param path An array of strings forming a path.
 * @param value The value to set at the given path.
 * @returns The manipulated data object.
 */
export function setToObject<Data extends Record<string, any>, Value>(data: Data, path: string[], value: Value): Data {
	if (!path.length) return (data = value as Data);
	if (typeof data !== 'object') data = {} as Data;

	path.reduce<Record<string, any>>((previousStep, step, index) => {
		if (typeof previousStep[step] !== 'object') Reflect.deleteProperty(previousStep, step);
		if (previousStep[step] === undefined) Reflect.set(previousStep, step, {});
		if (index === path.length - 1) Reflect.set(previousStep, step, value);

		return previousStep[step];
	}, data);

	return data;
}
