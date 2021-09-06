import { hasFromObject } from './hasFromObject';

/**
 * A semi-complex function to manipulate and get paths in objects.
 * @since 1.0.0
 * @param value The value object to manipulate.
 * @param path An array of strings forming a path.
 * @returns The value received after manipulation, else undefined.
 */
export function getFromObject<Input, Output = unknown>(value: Input, path: string[]): Output | undefined {
	return path.reduce<Record<string, any>>(
		(previousStep, step) => (hasFromObject(previousStep, [step]) ? previousStep[step] : undefined),
		typeof value === 'object' ? value ?? {} : {}
	) as Output;
}
