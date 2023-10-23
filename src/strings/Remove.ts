/**
 * Remove all the occurrences of a character in the string.
 */
export const remove = (str: string, charToRemove: string) => {
  if (!str || !charToRemove) {
    return str;
  }
  let newStr = '';

  for (const char of str) {
    if (char !== charToRemove) {
      newStr += char;
    }
  }

  return newStr;
};
