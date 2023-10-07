import { findCharacter } from '../FindCharacter';

describe('Find Character', () => {
  it('Should return empty string', () => {
    expect(findCharacter('', '')).toBe(-1);
  }); 

  it('Should return empty string', () => {
    expect(findCharacter('', 'a')).toBe(-1);
  }); 

  it('Should return the concatenation of 2 strings', () => {
    expect(findCharacter('abc def', 'e')).toBe(5);
  });

  it('Should return the concatenation of 2 strings', () => {
    expect(findCharacter('abc def', 'z')).toBe(-1);
  });
});
