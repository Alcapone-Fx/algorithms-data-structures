import { isPalindrome, isPalindrome1 } from '../IsPalindrome';

describe('isPalindrome', () => {
  it('should return true when the string is a palindrome with even length', () => {
    expect(isPalindrome('abccba')).toBe(true);
  });

  it('should return true when the string is a palindrome with odd length', () => {
    expect(isPalindrome('abcba')).toBe(true);
  });

  it('should return true when the string is a single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('should return false when the string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return false when the string contains only non-alphanumeric characters', () => {
    expect(isPalindrome('!@#$')).toBe(false);
  });
});

describe('isPalindrome1', () => {
  it('should return true when the string is a palindrome with even length', () => {
    expect(isPalindrome1('abccba')).toBe(true);
  });

  it('should return true when the string is a palindrome with odd length', () => {
    expect(isPalindrome1('abcba')).toBe(true);
  });

  it('should return true when the string is a single character', () => {
    expect(isPalindrome1('a')).toBe(true);
  });

  it('should return false when the string is not a palindrome', () => {
    expect(isPalindrome1('hello')).toBe(false);
  });

  it('should return false when the string contains only non-alphanumeric characters', () => {
    expect(isPalindrome1('!@#$')).toBe(false);
  });
});
