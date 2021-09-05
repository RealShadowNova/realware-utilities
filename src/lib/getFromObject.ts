import { hasFromObject } from './hasFromObject';

/**
 * A semi-complex function to manipulate and get paths in objects.
 * @since 1.0.0
 * @param value The value object to manipulate.
 * @param path An array of strings forming a path.
 * @returns The value received after manipulation, else undefined.
 */
export function getFromObject<
	InputValue extends Record<string, InputValue | unknown> | (InputValue | unknown)[],
	OutputValue extends Record<string, OutputValue | unknown> | (OutputValue | unknown)[] = InputValue
>(value: InputValue, path: string[]): OutputValue | undefined {
	return path.reduce<Record<string, any>>(
		(previousStep, step) => (hasFromObject(previousStep, [step]) ? previousStep[step] : undefined),
		value
	) as OutputValue;
}
