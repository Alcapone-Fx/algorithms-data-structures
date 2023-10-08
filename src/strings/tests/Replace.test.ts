import { replace } from '../Replace';

describe('replace', () => {
  it('should replace a single occurrence of oldSubstring with newSubstring', () => {
    const str = 'Hello World';
    const oldSubstring = 'World';
    const newSubstring = 'Universe';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('Hello Universe');
  });

  it('should replace multiple occurrences of oldSubstring with newSubstring', () => {
    const str = 'Hello World, Hello Universe, Hello World';
    const oldSubstring = 'Hello';
    const newSubstring = 'Hi';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('Hi World, Hi Universe, Hi World');
  });

  it('should replace oldSubstring at the beginning of the string', () => {
    const str = 'Hello World';
    const oldSubstring = 'Hello';
    const newSubstring = 'Hi';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('Hi World');
  });

  it('should return empty string when str is empty', () => {
    const str = '';
    const oldSubstring = 'Hello';
    const newSubstring = 'Hi';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('');
  });

  it('should return str when oldSubstring is empty', () => {
    const str = 'Hello World';
    const oldSubstring = '';
    const newSubstring = 'Hi';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('Hello World');
  });

  it('should return str when oldSubstring is not found', () => {
    const str = 'Hello World';
    const oldSubstring = 'Universe';
    const newSubstring = 'Hi';

    const result = replace(str, oldSubstring, newSubstring);

    expect(result).toBe('Hello World');
  });
});
