import { concatenate } from '../concatenation';

describe('concatenate', () => {
  it('Should return empty string', () => {
    expect(concatenate('', '')).toBe('');
  });

  it('Should return the concatenation of 2 strings', () => {
    expect(concatenate('abc ', 'def')).toBe('abc def');
  });
});