import { nextNumberBinaryRepresentation } from '../NextNumberBinaryRepresentation';

describe('nextNumberBinaryRepresentation', () => {
  it('should return binary representation of next number when given a valid binary input', () => {
    expect(nextNumberBinaryRepresentation('101')).toBe('110');
    expect(nextNumberBinaryRepresentation('1111')).toBe('10000');
    expect(nextNumberBinaryRepresentation('1000000')).toBe('1000001');
  });

  it('should return same input when given an empty string', () => {
    expect(nextNumberBinaryRepresentation('')).toBe('');
  });

  it('should return "10000000000" when given "1111111111"', () => {
    expect(nextNumberBinaryRepresentation('1111111111')).toBe('10000000000');
  });

  it('should return "10" when given "1"', () => {
    expect(nextNumberBinaryRepresentation('1')).toBe('10');
  });

  it('should return "100" when given "11"', () => {
    expect(nextNumberBinaryRepresentation('11')).toBe('100');
  });
});
