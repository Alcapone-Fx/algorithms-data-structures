/**
 * Given a string, returns an array of all possible sub-sequences in the array.
 * Does not take into account the empty string sub-sequence.
 */
export const subsequences = (str: string) => {
  const combinations: string [] = [];
  // Starts with 1 to avoid the 0 binary string
  // Max possible subsequences: 2^n - 1, where n = length of string
  for (let combination = 1; combination < Math.pow(2,str.length); combination++) {
    const binaryString = combination.toString(2).padStart(str.length, '0');
    let subsequence = '';

    for (let index = 0; index < binaryString.length; index++) {
      if (binaryString[index] === '1') {
        subsequence+=str[index];
      }
    }
    combinations.push(subsequence);
  }
  return combinations;
};