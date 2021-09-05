import { hasFromObject } from '..';

/**
 * A semi-complex function to manipulate and delete paths in objects.
 * @since 1.0.0
 * @param value The value object to manipulate.
 * @param path An array of strings forming a path.
 * @returns The manipulated value object.
 */
export function deleteFromObject<InputValue extends Record<string, InputValue | unknown>, OutputValue extends Record<string, OutputValue | unknown>>(
	value: InputValue,
	path: string[]
): OutputValue {
	if (!path.length) return value as OutputValue;
	if (!hasFromObject(value, path)) value as OutputValue;

	path.reduce<Record<string, any>>((previousStep, step, index) => {
		if (typeof previousStep !== 'object') return previousStep;
		if (Array.isArray(previousStep)) return previousStep;
		if (index === path.length - 1) Reflect.deleteProperty(previousStep, step);

		return previousStep[step];
	}, value);

	return value as OutputValue;
}
