/**
 * Takes a binary string as input and calculates the minimum number of bit flips required
 * to make the string a sequence of alternate characters.
 */
export const minFlipsForAlternation = (binaryString: string) => {
  if (!binaryString) {
    return 0;
  }
  let flipsForStartWithZero = 0;
  let flipsForStartWithOne = 0;

  for (let i = 0; i < binaryString.length; i++) {
    const expectedWhenStartsZero = i % 2 === 0 ? '0' : '1';
    const expectedWhenStartsOne = i % 2 === 0 ? '1' : '0';

    if (binaryString[i] !== expectedWhenStartsZero) {
      flipsForStartWithZero++;
    }

    if (binaryString[i] !== expectedWhenStartsOne) {
      flipsForStartWithOne++;
    }
  }

  return Math.min(flipsForStartWithZero, flipsForStartWithOne);
}
