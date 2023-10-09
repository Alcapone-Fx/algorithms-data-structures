import { reverse } from '../Reverse';

describe('reverse', () => {
  it('should return empty string when input is empty', () => {
    const result = reverse('');
    expect(result).toEqual('');
  });

  it('should return same string when input is a single character', () => {
    const result = reverse('a');
    expect(result).toEqual('a');
  });

  it('should return reversed string when input has multiple characters', () => {
    const result = reverse('hello');
    expect(result).toEqual('olleh');
  });

  it('should handle input with non-ASCII characters', () => {
    const result = reverse('こんにちは');
    expect(result).toEqual('はちにんこ');
  });

  it('should handle input with leading/trailing spaces', () => {
    const result = reverse('  hello  ');
    expect(result).toEqual('  olleh  ');
  });

  it('should handle input with consecutive spaces', () => {
    const result = reverse('hello  world');
    expect(result).toEqual('dlrow  olleh');
  });
});
