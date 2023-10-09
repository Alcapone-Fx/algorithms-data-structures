import { trim, trim1 } from '../Trim'; 

describe('trim', () => {
  it('should remove spaces from a string with no leading or trailing spaces', () => {
    expect(trim('hello')).toBe('hello');
  });

  it('should remove spaces from a string with leading spaces', () => {
    expect(trim('   hello')).toBe('hello');
  });

  it('should remove spaces from a string with trailing spaces', () => {
    expect(trim('hello   ')).toBe('hello');
  });

  it('should return an empty string when given an empty string', () => {
    expect(trim('')).toBe('');
  });

  it('should return an empty string when given an empty string', () => {
    expect(trim(' ')).toBe('');
  });

  it('should remove all empty spaces', () => {
    expect(trim('h   e l l  o   ')).toBe('hello');
  });
});

describe('trim1', () => {
  it('should remove spaces from a string with no leading or trailing spaces', () => {
    expect(trim1('hello')).toBe('hello');
  });

  it('should remove spaces from a string with leading spaces', () => {
    expect(trim1('   hello')).toBe('hello');
  });

  it('should remove spaces from a string with trailing spaces', () => {
    expect(trim1('hello   ')).toBe('hello');
  });

  it('should return an empty string when given an empty string', () => {
    expect(trim1('')).toBe('');
  });

  it('should return an empty string when given an empty string', () => {
    expect(trim1(' ')).toBe('');
  });

  it('should remove all empty spaces', () => {
    expect(trim1('h   e l l  o   ')).toBe('hello');
  });
});
