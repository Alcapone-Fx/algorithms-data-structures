/**
 * Find if it is possible to make all its digits equal (either all 0’s or all 1’s)
 * by flipping exactly one bit.
 */
export const canMakeAllBinarySame = (binaryString: string) => {
  if (!binaryString || !/^[01]+$/.test(binaryString)) {
    return false;
  }
  let zeros = 0,
    ones = 0;

  for (const bit of binaryString) {
    if (bit === '0') {
      ++zeros;
    } else {
      ++ones;
    }
  }

  return zeros === 1 || ones === 1;
};
