/**
 * A semi-complex function to manipulate and delete paths in objects.
 * @param data The data object to manipulate.
 * @param path The string path or an array of strings forming a path.
 * @returns The manipulated data object.
 */
export function deleteFromObject<Data extends Record<string, any>>(data: Data, path: string[] | string) {
	const fullPath = typeof path === 'string' ? path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean) : path;

	if (!path.length) return;

	fullPath.reduce<Record<string, any>>((previousStep, step, index) => {
		if (typeof previousStep[step] !== 'object') Reflect.deleteProperty(previousStep, step);

		if (previousStep[step] === undefined) previousStep[step] = {};

		if (index === fullPath.length - 1) delete previousStep[step];
		return previousStep[step];
	}, data);

	return data;
}
