import { getFromObject } from '../../src';

test('GIVEN getFromObject() THEN proper data', () => {
	expect(getFromObject({ a: 'b' }, '')).toEqual({ a: 'b' });
	expect(getFromObject({ a: 'b' }, 'a')).toBe('b');
	expect(getFromObject({ a: 'b' }, '[a]')).toBe('b');
	expect(getFromObject({ a: { b: 'c' } }, 'a.b')).toBe('c');
	expect(getFromObject({ a: { b: 'c' } }, 'a[b]')).toBe('c');
	expect(getFromObject({ a: { b: { c: ['d'] } } }, 'a.b.c')).toEqual(['d']);
	expect(getFromObject({ a: { b: { c: ['d'] } } }, 'a.b.c[0]')).toBe('d');
	expect(getFromObject({ a: { b: { c: ['d', ['e']] } } }, 'a.b.c[1]')).toEqual(['e']);
	expect(getFromObject({ a: { b: { c: ['d', ['e']] } } }, 'a.b.c[1][0]')).toBe('e');
	expect(getFromObject([{ a: 'b' }], '[0].a')).toBe('b');
	expect(getFromObject(['a', { b: 'c' }], '[1].b')).toBe('c');
	expect(getFromObject(['a', { b: { c: ['d'] } }], '[1].b.c')).toEqual(['d']);
});
