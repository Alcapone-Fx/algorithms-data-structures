import { subsequences } from '../Subsequences';

describe('subsequences', () => {
  it('should return all possible sub-sequences when given a non-empty string', () => {
    const result = subsequences('abc');
    expect(result).toEqual(['c', 'b', 'bc', 'a', 'ac', 'ab', 'abc']);
  });

  it('should return an array of length 2^n - 1 when given a non-empty string', () => {
    const result = subsequences('abcd');
    expect(result.length).toBe(Math.pow(2, 'abcd'.length) - 1);
  });

  it('should return an array of strings with valid sub-sequences when given a non-empty string', () => {
    const result = subsequences('xyz');
    expect(
      result.every(
        (subseq) => typeof subseq === 'string' && subseq.length <= 'xyz'.length
      )
    ).toBe(true);
  });

  it('should return an empty array when given an empty string', () => {
    const result = subsequences('');
    expect(result).toEqual([]);
  });

  it('should return an array containing the input string when given a string of length 1', () => {
    const result = subsequences('a');
    expect(result).toEqual(['a']);
  });

  it('should handle strings containing only unique characters', () => {
    const result = subsequences('123');
    expect(result).toEqual(['3', '2', '23', '1', '13', '12', '123']);
  });
});
