import { setFromObject } from '../../src';

test('GIVEN setFromObject() THEN proper data', () => {
	expect(setFromObject({}, 'a', 'b')).toEqual({ a: 'b' });
	expect(setFromObject({}, '[a]', 'b')).toEqual({ a: 'b' });
	expect(setFromObject({}, '[0]', 'a')).toEqual({ 0: 'a' });
	expect(setFromObject({ a: 'b' }, 'a.b', 'c')).toEqual({ a: { b: 'c' } });
	expect(setFromObject({ a: ['b'] }, 'a', 'b')).toEqual({ a: 'b' });
	expect(setFromObject([], '0', 'a')).toEqual(['a']);
	expect(setFromObject(['a'], '0', { a: 'b' })).toEqual([{ a: 'b' }]);
	expect(setFromObject({}, [], 'b')).toEqual('b');
});
