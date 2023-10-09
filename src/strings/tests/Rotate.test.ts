import { rotate } from '../Rotate';

describe('rotate', () => {
  it('should return an array with one element when given a string with length 1', () => {
    expect(rotate('a')).toEqual(['a']);
  });

  it('should return an array with n elements when given a string with length n', () => {
    expect(rotate('abc')).toHaveLength(3);
    expect(rotate('abc')).toEqual(['abc', 'bca', 'cab']);
  });

  it('should return an array with all possible rotations of a given string', () => {
    expect(rotate('abc')).toEqual(['abc', 'bca', 'cab']);
    expect(rotate('hello')).toEqual([
      'hello',
      'elloh',
      'llohe',
      'lohel',
      'ohell'
    ]);
  });

  it('should return an empty array when given an empty string', () => {
    expect(rotate('')).toEqual([]);
  });
});
