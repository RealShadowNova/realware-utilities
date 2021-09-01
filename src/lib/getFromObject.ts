/**
 * A semi-complex function to manipulate and get paths in objects.
 * @since 1.0.0
 * @param data The data object to manipulate.
 * @param path The string path or an array of strings forming a path.
 * @returns The data gotten after manipulation, else undefined.
 */

export function getFromObject<Data extends Record<string, any>>(data: Data | undefined, path: string[] | string): Data | undefined {
	const fullPath = typeof path === 'string' ? path.replace(/\[/g, '.').replace(/]/g, '').split('.').filter(Boolean) : path;

	return fullPath.every((step) => !(step && (data = data?.[step]) === undefined)) ? data : undefined;
}
