import { hasFromObject } from './hasFromObject';

/**
 * A semi-complex function to manipulate and delete paths in objects.
 * @deprecated
 * @since 1.0.0
 * @param input The input object to manipulate.
 * @param path An array of strings forming a path.
 * @returns The manipulated input object.
 */
export function deleteFromObject<Input, Output = unknown>(input: Input, path: string[]): Output {
	if (!path.length) return input as unknown as Output;
	if (!hasFromObject(input, path)) return input as unknown as Output;

	path.reduce<Record<string, any>>(
		(previousStep, step, index) => {
			if (typeof previousStep !== 'object') previousStep = {};
			if (index === path.length - 1) Reflect.deleteProperty(previousStep, step);

			return previousStep[step];
		},
		typeof input === 'object' ? input ?? {} : {}
	);

	return input as unknown as Output;
}
