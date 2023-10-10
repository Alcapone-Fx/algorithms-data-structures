/**
 * Checks if a given string is a palindrome, which means it reads the same forwards and backwards.
 */
export const isPalindrome = (str: string) => {
  if (!str) {
    return false;
  }
  const reversedString = str.split('').reverse().join('');

  return str.toLowerCase() === reversedString.toLowerCase();
};

/**
 * Checks if a given string is a palindrome, which means it reads the same forwards and backwards.
 * Note: best performace
 */
export const isPalindrome1 = (str: string) => {
  if (!str) {
    return false;
  }

  let reversedString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  return str.toLowerCase() === reversedString.toLowerCase();
};
