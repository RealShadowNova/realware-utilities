import { deleteFromObject } from '../../src';

test('GIVEN deleteFromObject() THEN proper data', () => {
	expect(deleteFromObject({ a: 'b' }, 'a')).toEqual({});
	expect(deleteFromObject({ a: 'b' }, '[a]')).toEqual({});
	expect(deleteFromObject({ 0: 'a' }, '[0]')).toEqual({});
	expect(deleteFromObject({ a: { b: 'c' } }, 'a.b')).toEqual({ a: {} });
});
