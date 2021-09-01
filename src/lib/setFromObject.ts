/**
 * A semi-complex function to manipulate and set paths in objects.
 * @since 1.0.0
 * @deprecated
 * @param data The data object to manipulate.
 * @param path The string path or an array of strings forming a path.
 * @param value The value to set at the given path.
 * @returns The manipulated data object.
 */
export function setFromObject<Data extends Record<string, any>, Value>(data: Data, path: string[] | string, value: Value): Data {
	const fullPath = typeof path === 'string' ? path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean) : path;

	if (!path.length) return value as Data;

	fullPath.reduce<Record<string, any>>((previousStep, step, index) => {
		if (typeof previousStep[step] !== 'object') Reflect.deleteProperty(previousStep, step);

		if (previousStep[step] === undefined) previousStep[step] = {};

		if (index === fullPath.length - 1) previousStep[step] = value;
		return previousStep[step];
	}, data);

	return data;
}
