import { hasFromObject } from '../../src';

describe('hasFromObject()', () => {
	describe('can check values from objects', () => {
		test('GIVEN empty object w/ path THEN returns false', () => {
			expect(hasFromObject({}, ['a'])).toBe(false);
			expect(hasFromObject({}, ['a', 'b'])).toBe(false);
		});

		test('GIVEN object w/ path THEN returns true', () => {
			expect(hasFromObject({ a: 'b' }, ['a'])).toBe(true);
			expect(hasFromObject({ a: { b: 'c' } }, ['a', 'b'])).toBe(true);
		});
	});

	describe('can check values from arrays', () => {
		test('GIVEN empty array w/ path THEN returns false', () => {
			expect(hasFromObject([], ['0'])).toBe(false);
			expect(hasFromObject([], ['1'])).toBe(false);
		});

		test('GIVEN array w/ path THEN returns true', () => {
			expect(hasFromObject(['a'], ['0'])).toBe(true);
			expect(hasFromObject(['a', { b: 'c' }], ['1', 'b'])).toBe(true);
		});
	});
});
