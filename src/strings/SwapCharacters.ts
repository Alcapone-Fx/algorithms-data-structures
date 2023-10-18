/**
 * Given a String S of length N, two integers B and C, the function traverse characters
 * starting from the beginning, swapping a character with the character after C places from it
 * Repeat this process B times, advancing one position at a time.
 */
export const swapCharacters = (
  str: string,
  swapTimes: number,
  places: number
) => {
  if (!str) {
    return '';
  }

  if (!places) {
    return str;
  }
  
  let newStr = str;
  let leftChar = '';
  let rightChar = '';
  let str1 = '';
  let str2 = '';
  let str3 = '';
  for (let swapTime = 0; swapTime < swapTimes; swapTime++) {
    const rightCharPos = (swapTime + places) % str.length;
    if (swapTime % str.length < rightCharPos) {
      leftChar = newStr[swapTime % str.length];
      rightChar = newStr[rightCharPos];
      str1 = newStr.slice(0, swapTime % str.length);
      str2 = newStr.slice((swapTime % str.length) + 1, rightCharPos);
      str3 = newStr.slice(rightCharPos + 1);
    } else {
      rightChar = newStr[swapTime % str.length];
      leftChar = newStr[rightCharPos];
      str1 = newStr.slice(0, rightCharPos);
      str2 = newStr.slice(rightCharPos + 1, swapTime % str.length);
      str3 = newStr.slice((swapTime % str.length) + 1);
    }
    newStr = str1 + rightChar + str2 + leftChar + str3;
  }

  return newStr;
};

/**
 * Given a String S of length N, two integers B and C, the function traverse characters
 * starting from the beginning, swapping a character with the character after C places from it
 * Repeat this process B times, advancing one position at a time.
 * Convert to array approach
 * Note: Better performance
 */
export const swapCharactersArray = (
  str: string,
  swapTimes: number,
  places: number
) => {
  if (!str) {
    return '';
  }

  if (!places) {
    return str;
  }
  
  const N = str.length;
  const result = str.split('');

  for (let i = 0; i < swapTimes; i++) {
    let currentPosition = i % N;
    let targetPosition = (currentPosition + places) % N;

    const temp = result[currentPosition];
    result[currentPosition] = result[targetPosition];
    result[targetPosition] = temp;
  }

  return result.join(''); // Convert the array back to a string
};
