import { canMakeAllBinarySame } from '../CanMakeAllBinarySame';

describe('canMakeAllBinarySame', () => {
  it('should return false when input is "0000"', () => {
    expect(canMakeAllBinarySame('0000')).toBe(false);
  });

  it('should return false when input is "1111"', () => {
    expect(canMakeAllBinarySame('1111')).toBe(false);
  });

  it('should return true when input is "0001"', () => {
    expect(canMakeAllBinarySame('0001')).toBe(true);
  });

  it('should return false when input is a long string of zeros', () => {
    expect(canMakeAllBinarySame('0000000000000000000000000000000000000000000000000000000000000000')).toBe(false);
  });

  it('should return false when input is a long string of ones', () => {
    expect(canMakeAllBinarySame('1111111111111111111111111111111111111111111111111111111111111111')).toBe(false);
  });

  it('should return true when input is a long string of zeros with a single one', () => {
    expect(canMakeAllBinarySame('0000000000000000000000000000000000000000000000000000000000000001')).toBe(true);
  });
});
