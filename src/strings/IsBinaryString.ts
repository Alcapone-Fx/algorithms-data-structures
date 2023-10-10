/**
 * Returns true if the given char is binary
 */
export const isBinaryChar = (char: string) => {
  if (!char) {
    return false;
  }

  return char === '1' || char === '0';
};

/**
 * Checks if a given string is a binary string, which means it only contains the characters '0' and '1'.
 */
export const isBinaryString = (str: string) => {
  if (!str) {
    return false;
  }

  return str.split('').every(isBinaryChar);
};

/**
 * Checks if a given string is a binary string, which means it only contains the characters '0' and '1'.
 * Note: better performance
 */
export const isBinaryStringRegex = (str: string) => /^[01]{1,}$/.test(str);
