/**
 * Given a binary input that represents binary representation of positive number, 
 * find a binary representation of the nextr number.
 */
export const nextNumberBinaryRepresentation = (binaryString: string) => {
  if (!binaryString || !/^[01]+$/.test(binaryString)) {
    return binaryString;
  }
  let num = parseInt(binaryString, 2);
  ++num;

  return num.toString(2);
};
