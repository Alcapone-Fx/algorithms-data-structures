import { isBinaryChar, isBinaryString, isBinaryStringRegex } from '../IsBinaryString';

describe('isBinaryString', () => {
  it("should return true for a valid binary string '101010'", () => {
    expect(isBinaryString('101010')).toBe(true);
  });

  it("should return true for a valid binary string '0000'", () => {
    expect(isBinaryString('0000')).toBe(true);
  });

  it("should return true for a valid binary string '1111'", () => {
    expect(isBinaryString('1111')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isBinaryString('')).toBe(false);
  });

  it("should return false for a string with non-binary characters '10102'", () => {
    expect(isBinaryString('10102')).toBe(false);
  });

  it("should return false for a string with spaces '1 0 1'", () => {
    expect(isBinaryString('1 0 1')).toBe(false);
  });
});

describe('isBinaryStringRegex', () => {
  it("should return true for a valid binary string '101010'", () => {
    expect(isBinaryStringRegex('101010')).toBe(true);
  });

  it("should return true for a valid binary string '0000'", () => {
    expect(isBinaryStringRegex('0000')).toBe(true);
  });

  it("should return true for a valid binary string '1111'", () => {
    expect(isBinaryStringRegex('1111')).toBe(true);
  });

  it('should return false for an empty string', () => {
    expect(isBinaryStringRegex('')).toBe(false);
  });

  it("should return false for a string with non-binary characters '10102'", () => {
    expect(isBinaryStringRegex('10102')).toBe(false);
  });

  it("should return false for a string with spaces '1 0 1'", () => {
    expect(isBinaryStringRegex('1 0 1')).toBe(false);
  });
});

describe('isBinaryChar', () => {
  it('should return true when the input is \'0\'', () => {
    expect(isBinaryChar('0')).toBe(true);
  });

  it('should return true when the input is \'1\'', () => {
    expect(isBinaryChar('1')).toBe(true);
  });

  it('should return false when the input is any character other than \'0\' or \'1\'', () => {
    expect(isBinaryChar('2')).toBe(false);
    expect(isBinaryChar('a')).toBe(false);
    expect(isBinaryChar('@')).toBe(false);
  });

  it('should return false when the input is an empty string', () => {
    expect(isBinaryChar('')).toBe(false);
  });
});
