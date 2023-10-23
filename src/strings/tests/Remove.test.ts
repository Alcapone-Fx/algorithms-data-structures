import { remove } from '../Remove';

describe('remove', () => {
  it('should remove all occurrences of the specified character in the string', () => {
    expect(remove('hello', 'l')).toBe('heo');
    expect(remove('hello', 'o')).toBe('hell');
    expect(remove('hello', 'h')).toBe('ello');
    expect(remove('hello', 'e')).toBe('hllo');
  });

  it('should return an empty string if the input string is empty', () => {
    expect(remove('', 'a')).toBe('');
    expect(remove('', '')).toBe('');
  });

  it('should return the same string if the specified character is not found in the input string', () => {
    expect(remove('hello', 'a')).toBe('hello');
    expect(remove('hello', 'z')).toBe('hello');
    expect(remove('', 'a')).toBe('');
  });

  it('should handle removing the first character of the string', () => {
    expect(remove('hello', 'h')).toBe('ello');
    expect(remove('hello', 'e')).toBe('hllo');
    expect(remove('hello', 'l')).toBe('heo');
  });

  it('should handle removing the last character of the string', () => {
    expect(remove('hello', 'o')).toBe('hell');
    expect(remove('hello', 'l')).toBe('heo');
    expect(remove('hello', 'e')).toBe('hllo');
  });

  it('should handle removing all characters in the string', () => {
    expect(remove('hello', 'h')).toBe('ello');
    expect(remove('hello', 'e')).toBe('hllo');
    expect(remove('hello', 'l')).toBe('heo');
    expect(remove('hello', 'o')).toBe('hell');
  });
});
