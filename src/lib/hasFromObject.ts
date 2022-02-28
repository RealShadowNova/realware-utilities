/**
 * A semi-complex function to check if a specific property exists in objects.
 * @deprecated
 * @since 2.0.0
 * @param value The value object to check.
 * @param path An array of strings forming a path.
 * @returns Whether a value at path exists.
 */
export function hasFromObject<Input>(value: Input, path: string[]): boolean {
	if (path.length === 0) return true;
	if (typeof value !== 'object') return false;

	let bool = false;

	path.reduce<Record<string, any>>(
		(previousStep, step, index) => {
			if (typeof previousStep !== 'object') bool = false;
			if ([undefined, null].includes(previousStep as unknown as undefined | null)) return previousStep;

			if (index === path.length - 1) {
				if (Array.isArray(previousStep) && previousStep.length > Number(step)) bool = true;
				else if (step in previousStep) bool = true;
			}

			return previousStep[step];
		},
		typeof value === 'object' ? value ?? {} : {}
	);

	return bool;
}
