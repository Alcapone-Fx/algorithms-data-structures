import { minFlipsForAlternation } from '../MinFlipsForAlternation';

describe('minFlipsForAlternation', () => {
  it('should return 0 when given an empty string', () => {
    expect(minFlipsForAlternation('')).toBe(0);
  });

  it('should return 0 when given a string of length 1', () => {
    expect(minFlipsForAlternation('0')).toBe(0);
    expect(minFlipsForAlternation('1')).toBe(0);
  });

  it('should return 0 when given a string of alternating 0s and 1s', () => {
    expect(minFlipsForAlternation('010101')).toBe(0);
    expect(minFlipsForAlternation('101010')).toBe(0);
  });

  it('should return 0 when given a string of all 0s or all 1s', () => {
    expect(minFlipsForAlternation('00000')).toBe(2);
    expect(minFlipsForAlternation('11111')).toBe(2);
  });
});
