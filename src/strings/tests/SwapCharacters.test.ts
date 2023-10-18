import { swapCharacters, swapCharactersArray } from '../SwapCharacters';

describe('swapCharacters', () => {
  it('should swap characters in a string with valid input values', () => {
    const str = 'abcdef';
    const swapTimes = 2;
    const places = 3;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('decabf');
  });

  it('should not swap characters in a string with B=0 and C=0', () => {
    const str = 'abcdef';
    const swapTimes = 0;
    const places = 0;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });

  it('should swap characters in a string with B=1 and C=1', () => {
    const str = 'abcdef';
    const swapTimes = 1;
    const places = 1;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('bacdef');
  });

  it('should not swap characters in an empty string', () => {
    const str = '';
    const swapTimes = 2;
    const places = 3;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('');
  });

  it('should not swap characters in a string with B=0 and C>0', () => {
    const str = 'abcdef';
    const swapTimes = 0;
    const places = 3;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });

  it('should not swap characters in a string with B>0 and C=0', () => {
    const str = 'abcdef';
    const swapTimes = 2;
    const places = 0;
    const result = swapCharacters(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });
});

describe('swapCharactersArray', () => {
  it('should swap characters in a string with valid input values', () => {
    const str = 'abcdef';
    const swapTimes = 2;
    const places = 3;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('decabf');
  });

  it('should not swap characters in a string with B=0 and C=0', () => {
    const str = 'abcdef';
    const swapTimes = 0;
    const places = 0;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });

  it('should swap characters in a string with B=1 and C=1', () => {
    const str = 'abcdef';
    const swapTimes = 1;
    const places = 1;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('bacdef');
  });

  it('should not swap characters in an empty string', () => {
    const str = '';
    const swapTimes = 2;
    const places = 3;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('');
  });

  it('should not swap characters in a string with B=0 and C>0', () => {
    const str = 'abcdef';
    const swapTimes = 0;
    const places = 3;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });

  it('should not swap characters in a string with B>0 and C=0', () => {
    const str = 'abcdef';
    const swapTimes = 2;
    const places = 0;
    const result = swapCharactersArray(str, swapTimes, places);
    expect(result).toEqual('abcdef');
  });
});
