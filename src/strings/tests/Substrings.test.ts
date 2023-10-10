import { substrings } from '../Substrings';

describe('substrings', () => {
  it('should return an array with one element when given a string of length 1', () => {
    expect(substrings('a')).toEqual(['a']);
  });

  it('should return an array with all possible substrings when given a string of length 2', () => {
    expect(substrings('ab')).toEqual(['a', 'ab', 'b']);
  });

  it('should return an array with all possible substrings when given a string of length 3 or more', () => {
    expect(substrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c']);
    expect(substrings('abcd')).toEqual(['a', 'ab', 'abc', 'abcd', 'b', 'bc', 'bcd', 'c', 'cd', 'd']);
  });

  it('should return an empty array when given an empty string', () => {
    expect(substrings('')).toEqual([]);
  });
});