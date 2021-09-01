import { setToObject } from '../../src';

describe('setToObject()', () => {
	describe('can set values to objects', () => {
		test('GIVEN empty object w/ paths and value THEN sets data', () => {
			expect(setToObject({}, ['a'], 'b')).toEqual({ a: 'b' });
			expect(setToObject({}, ['a', 'b'], 'c')).toEqual({ a: { b: 'c' } });
		});

		test('GIVEN object w/ paths and value THEN overwrites data', () => {
			expect(setToObject({ a: 'b' }, ['a'], { b: 'c' })).toEqual({ a: { b: 'c' } });
			expect(setToObject({ a: 'b' }, ['a', 'b'], 'c')).toEqual({ a: { b: 'c' } });
		});
	});

	describe('can set values to arrays', () => {
		test('GIVEN empty array w/ paths and value THEN sets data', () => {
			expect(setToObject([], ['0'], 'a')).toEqual(['a']);
			expect(setToObject([], ['0', 'a'], 'b')).toEqual([{ a: 'b' }]);
		});

		test('GIVEN array w/ paths and value THEN overwrites data', () => {
			expect(setToObject(['a'], ['0'], 'b')).toEqual(['b']);
			expect(setToObject(['a'], ['0', 'a'], 'b')).toEqual([{ a: 'b' }]);
		});

		test('GIVEN array w/ paths and value THEN adds to array', () => {
			expect(setToObject(['a'], ['1'], 'b')).toEqual(['a', 'b']);
			expect(setToObject(['a'], ['1'], { b: 'c' })).toEqual(['a', { b: 'c' }]);
		});
	});
});
