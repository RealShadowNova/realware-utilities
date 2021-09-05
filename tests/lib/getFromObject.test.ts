import { getFromObject } from '../../src';

describe('GIVEN getFromObject()', () => {
	describe('can get values from objects', () => {
		test('GIVEN object w/ empty path THEN gets full value', () => {
			expect(getFromObject({ a: 'b' }, [])).toEqual({ a: 'b' });
			expect(getFromObject({ a: { b: 'c' } }, [])).toEqual({ a: { b: 'c' } });
		});

		test('GIVEN object w/ path THEN gets value at path', () => {
			expect(getFromObject({ a: 'b' }, ['a'])).toBe('b');
			expect(getFromObject({ a: { b: 'c' } }, ['a'])).toEqual({ b: 'c' });
			expect(getFromObject({ a: { b: 'c' } }, ['a', 'b'])).toBe('c');
		});

		describe('can get values from arrays', () => {
			test('GIVEN object w/ array and empty path THEN gets full value', () => {
				expect(getFromObject({ a: ['b'] }, [])).toEqual({ a: ['b'] });
				expect(getFromObject({ a: { b: ['c'] } }, [])).toEqual({ a: { b: ['c'] } });
			});

			test('GIVEN object w/ array and path THEN gets value a path', () => {
				expect(getFromObject({ a: ['b'] }, ['a', '0'])).toBe('b');
				expect(getFromObject({ a: { b: ['c'] } }, ['a', 'b', '0'])).toBe('c');
			});
		});
	});

	describe('can get values from arrays', () => {
		test('GIVEN array w/ empty path THEN gets full value', () => {
			expect(getFromObject(['a'], [])).toEqual(['a']);
			expect(getFromObject(['a', 'b'], [])).toEqual(['a', 'b']);
		});

		test('GIVEN array w/ path THEN gets value at path', () => {
			expect(getFromObject(['a'], ['0'])).toBe('a');
			expect(getFromObject(['a', 'b'], ['1'])).toBe('b');
		});

		describe('can get values from objects', () => {
			test('GIVEN array w/ object and empty path THEN gets full value', () => {
				expect(getFromObject([{ a: 'b' }], [])).toEqual([{ a: 'b' }]);
				expect(getFromObject(['a', { b: 'c' }], [])).toEqual(['a', { b: 'c' }]);
			});

			test('GIVEN array w/ object and path THEN gets value at path', () => {
				expect(getFromObject([{ a: 'b' }], ['0'])).toEqual({ a: 'b' });
				expect(getFromObject([{ a: 'b' }], ['0', 'a'])).toBe('b');
				expect(getFromObject(['a', { b: 'c' }], ['1'])).toEqual({ b: 'c' });
				expect(getFromObject(['a', { b: 'c' }], ['1', 'b'])).toBe('c');
			});
		});
	});
});
