import { findSubstringIndexes, findSubstringIndexes1 } from '../FindSubstring';

describe('findSubstringIndexes', () => {
  it('should return an array of indexes when substring is found in string', () => {
    expect(findSubstringIndexes('hello world', 'o')).toEqual([4, 7]);
    expect(findSubstringIndexes('hello world', 'world')).toEqual([6]);
    expect(findSubstringIndexes('hello world', 'l')).toEqual([2, 3, 9]);
  });

  it('should return -1 when substring is not found in string', () => {
    expect(findSubstringIndexes('hello world', 'z')).toEqual(-1);
    expect(findSubstringIndexes('hello world', 'foo')).toEqual(-1);
  });

  it('should return -1 when either string or substring is empty', () => {
    expect(findSubstringIndexes('', 'hello')).toEqual(-1);
    expect(findSubstringIndexes('hello', '')).toEqual(-1);
    expect(findSubstringIndexes('', '')).toEqual(-1);
  });

  it('should return an array with one index when substring is at the beginning of the string', () => {
    expect(findSubstringIndexes('hello world', 'hello')).toEqual([0]);
    expect(findSubstringIndexes('hello', 'hello')).toEqual([0]);
  });

  it('should return an array with one index when substring is at the end of the string', () => {
    expect(findSubstringIndexes('hello world', 'world')).toEqual([6]);
    expect(findSubstringIndexes('world', 'world')).toEqual([0]);
  });

  it('should return an array with multiple indexes when substring occurs multiple times in the string', () => {
    expect(findSubstringIndexes('hello world', 'l')).toEqual([2, 3, 9]);
    expect(findSubstringIndexes('hello', 'l')).toEqual([2, 3]);
  });
});

describe('findSubstringIndexes1', () => {
  it('should return an array of indexes when substring is found in string', () => {
    expect(findSubstringIndexes1('hello world', 'o')).toEqual([4, 7]);
    expect(findSubstringIndexes1('hello world', 'world')).toEqual([6]);
    expect(findSubstringIndexes1('hello world', 'l')).toEqual([2, 3, 9]);
  });

  it('should return -1 when substring is not found in string', () => {
    expect(findSubstringIndexes1('hello world', 'z')).toEqual(-1);
    expect(findSubstringIndexes1('hello world', 'foo')).toEqual(-1);
  });

  it('should return -1 when either string or substring is empty', () => {
    expect(findSubstringIndexes1('', 'hello')).toEqual(-1);
    expect(findSubstringIndexes1('hello', '')).toEqual(-1);
    expect(findSubstringIndexes1('', '')).toEqual(-1);
  });

  it('should return an array with one index when substring is at the beginning of the string', () => {
    expect(findSubstringIndexes1('hello world', 'hello')).toEqual([0]);
    expect(findSubstringIndexes1('hello', 'hello')).toEqual([0]);
  });

  it('should return an array with one index when substring is at the end of the string', () => {
    expect(findSubstringIndexes1('hello world', 'world')).toEqual([6]);
    expect(findSubstringIndexes1('world', 'world')).toEqual([0]);
  });

  it('should return an array with multiple indexes when substring occurs multiple times in the string', () => {
    expect(findSubstringIndexes1('hello world', 'l')).toEqual([2, 3, 9]);
    expect(findSubstringIndexes1('hello', 'l')).toEqual([2, 3]);
  });
});
