/**
 * A semi-complex function to manipulate and set paths in objects.
 * @deprecated
 * @since 1.1.0
 * @param input The input object to manipulate.
 * @param path An array of strings forming a path.
 * @param value The value to set at the given path.
 * @returns The manipulated input object.
 */
export function setToObject<Input, Value, Output = unknown>(input: Input, path: string[], value: Value): Output {
	if (!path.length) return value as unknown as Output;
	if (typeof input !== 'object') input = {} as Input;

	path.reduce<Record<string, any>>(
		(previousStep, step, index) => {
			if (typeof previousStep[step] !== 'object') Reflect.deleteProperty(previousStep, step);
			if (previousStep[step] === undefined) Reflect.set(previousStep, step, {});
			if (index === path.length - 1) Reflect.set(previousStep, step, value);

			return previousStep[step];
		},
		typeof input === 'object' ? input ?? {} : {}
	);

	return input as unknown as Output;
}
