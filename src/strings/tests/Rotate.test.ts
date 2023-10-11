import { rotate, rightRotate, rightRotate1, leftRotate, leftRotate1 } from '../Rotate';

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

describe('rightRotate', () => {
  it('should return the original string when rotate is 0', () => {
    const str = 'hello';
    const rotate = 0;
    const result = rightRotate(str, rotate);
    expect(result).toBe(str);
  });

  it('should return the original string when rotate is a multiple of string length', () => {
    const str = 'hello';
    const rotate = 10;
    const result = rightRotate(str, rotate);
    expect(result).toBe(str);
  });

  it('should return the expected rotated string when rotate is less than string length', () => {
    const str = 'hello';
    const rotate = 2;
    const result = rightRotate(str, rotate);
    expect(result).toBe('lohel');
  });

  it('should return an empty string when given an empty string', () => {
    const str = '';
    const rotate = 3;
    const result = rightRotate(str, rotate);
    expect(result).toBe('');
  });

  it('should return the original string when given a negative rotate value', () => {
    const str = 'hello';
    const rotate = -2;
    const result = rightRotate(str, rotate);
    expect(result).toBe(str);
  });

  it('should return correct value when given a rotate value greater than 2 times the string length', () => {
    const str = 'hello';
    const rotate = 12;
    const result = rightRotate(str, rotate);
    expect(result).toBe('lohel');
  });
});

describe('rightRotate1', () => {
  it('should return the original string when rotate is 0', () => {
    const str = 'hello';
    const rotate = 0;
    const result = rightRotate1(str, rotate);
    expect(result).toBe(str);
  });

  it('should return the original string when rotate is a multiple of string length', () => {
    const str = 'hello';
    const rotate = 10;
    const result = rightRotate1(str, rotate);
    expect(result).toBe(str);
  });

  it('should return the expected rotated string when rotate is less than string length', () => {
    const str = 'hello';
    const rotate = 2;
    const result = rightRotate1(str, rotate);
    expect(result).toBe('lohel');
  });

  it('should return an empty string when given an empty string', () => {
    const str = '';
    const rotate = 3;
    const result = rightRotate1(str, rotate);
    expect(result).toBe('');
  });

  it('should return the original string when given a negative rotate value', () => {
    const str = 'hello';
    const rotate = -2;
    const result = rightRotate1(str, rotate);
    expect(result).toBe(str);
  });

  it('should return correct value when given a rotate value greater than 2 times the string length', () => {
    const str = 'hello';
    const rotate = 12;
    const result = rightRotate1(str, rotate);
    expect(result).toBe('lohel');
  });
});

describe('leftRotate', () => {
  it('should rotate string by 1 element', () => {
    const str = 'hello';
    const rotate = 1;
    const expected = 'elloh';
    const result = leftRotate(str, rotate);
    expect(result).toEqual(expected);
  });

  it('should rotate string by length of string - 1 elements', () => {
    const str = 'hello';
    const rotate = str.length - 1;
    const expected = 'ohell';
    const result = leftRotate(str, rotate);
    expect(result).toEqual(expected);
  });

  it('should return empty string when rotating empty string', () => {
    const str = '';
    const rotate = 2;
    const expected = '';
    const result = leftRotate(str, rotate);
    expect(result).toEqual(expected);
  });

  it('should rotate string by length of string + 1 elements', () => {
    const str = 'hello';
    const rotate = str.length + 1;
    const expected = 'elloh';
    const result = leftRotate(str, rotate);
    expect(result).toEqual(expected);
  });

  it('should return original string when rotating by negative number of elements', () => {
    const str = 'hello';
    const rotate = -2;
    const expected = 'hello';
    const result = leftRotate(str, rotate);
    expect(result).toEqual(expected);
  });
});

