import { insertCharAt, insertCharAt1 } from '../InsertCharAt';

describe('insertCharAt', () => {
  it('should insert char at single index when given a valid string, char, and index', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [2];
    const result = insertCharAt(str, char, indexes);
    expect(result).toBe('he!llo');
  });

  it('should insert char at multiple indices when given a valid string, char, and indexes', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [1, 3];
    const result = insertCharAt(str, char, indexes);
    expect(result).toBe('h!el!lo');
  });

  it('should return original string when given an empty indexes array', () => {
    const str = 'hello';
    const char = '!';
    const indexes: number[] = [];
    const result = insertCharAt(str, char, indexes);
    expect(result).toBe('hello');
  });

  it('should handle inserting char at index greater than string length when given a valid string, char, and index', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [10];
    const result = insertCharAt(str, char, indexes);
    expect(result).toBe('hello!');
  });

  it('should handle inserting empty char when given a valid string, empty char, and index', () => {
    const str = 'hello';
    const char = '';
    const indexes = [2];
    const result = insertCharAt(str, char, indexes);
    expect(result).toBe('hello');
  });
});

describe('insertCharAt1', () => {
  it('should insert char at single index when given a valid string, char, and index', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [2];
    const result = insertCharAt1(str, char, indexes);
    expect(result).toBe('he!llo');
  });

  it('should insert char at multiple indices when given a valid string, char, and indexes', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [1, 3];
    const result = insertCharAt1(str, char, indexes);
    expect(result).toBe('h!el!lo');
  });

  it('should return original string when given an empty indexes array', () => {
    const str = 'hello';
    const char = '!';
    const indexes: number[] = [];
    const result = insertCharAt1(str, char, indexes);
    expect(result).toBe('hello');
  });

  it('should handle inserting char at index greater than string length when given a valid string, char, and index', () => {
    const str = 'hello';
    const char = '!';
    const indexes = [10];
    const result = insertCharAt1(str, char, indexes);
    expect(result).toBe('hello!');
  });

  it('should handle inserting empty char when given a valid string, empty char, and index', () => {
    const str = 'hello';
    const char = '';
    const indexes = [2];
    const result = insertCharAt1(str, char, indexes);
    expect(result).toBe('hello');
  });
});
