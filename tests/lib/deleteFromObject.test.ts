import { deleteFromObject } from '../../src';

describe('deleteFromObject()', () => {
	describe('can delete values from objects', () => {
		test('GIVEN object w/ paths THEN deletes at path', () => {
			expect(deleteFromObject({ a: 'b' }, ['a'])).toEqual({});
			expect(deleteFromObject({ a: { b: 'c' } }, ['a', 'b'])).toEqual({ a: {} });
		});
	});
});
