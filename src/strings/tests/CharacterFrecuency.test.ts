import { characterFrecuency, characterFrecuency1 } from '../CharacterFrecuency';

describe('characterFrecuency', () => {
  it('should return the correct frequency when the input string has one character', () => {
    expect(characterFrecuency('a')).toBe('a1');
  });

  it('should return the correct frequency when the input string has multiple characters', () => {
    expect(characterFrecuency('hello')).toBe('h1e1l2o1');
  });

  it('should return the correct frequency when the input string has special characters and spaces', () => {
    expect(characterFrecuency('hello world!')).toBe('h1e1l3o2 1w1r1d1!1');
  });

  it('should return an empty string when the input string is empty', () => {
    expect(characterFrecuency('')).toBe('');
  });

  it('should return the correct frequency when the input string has only one character', () => {
    expect(characterFrecuency('aaaaa')).toBe('a5');
  });

  it('should return the correct frequency when the input string has all the same character', () => {
    expect(characterFrecuency('bbbbbb')).toBe('b6');
  });
});

describe('characterFrecuency1', () => {
  it('should return the correct frequency when the input string has one character', () => {
    expect(characterFrecuency1('a')).toBe('a1');
  });

  it('should return the correct frequency when the input string has multiple characters', () => {
    expect(characterFrecuency1('hello')).toBe('h1e1l2o1');
  });

  it('should return the correct frequency when the input string has special characters and spaces', () => {
    expect(characterFrecuency1('hello world!')).toBe('h1e1l3o2 1w1r1d1!1');
  });

  it('should return an empty string when the input string is empty', () => {
    expect(characterFrecuency1('')).toBe('');
  });

  it('should return the correct frequency when the input string has only one character', () => {
    expect(characterFrecuency1('aaaaa')).toBe('a5');
  });

  it('should return the correct frequency when the input string has all the same character', () => {
    expect(characterFrecuency1('bbbbbb')).toBe('b6');
  });
});
