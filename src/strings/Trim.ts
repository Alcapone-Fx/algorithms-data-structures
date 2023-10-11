/**
 * Remove spaces from a given string
 */
export const trim = (str: string) => {
  if (!str) {
    return '';
  }

  let newString = str.split('');
  let lastCharIndex = 0;

  for (let index = 0; index < str.length; index++) {
    if (newString[index] !== ' ') {
      newString[lastCharIndex++] = newString[index];
    }
  }

  return newString.slice(0, lastCharIndex).join('');
};

/**
 * Remove spaces from a given string
 * Best performance
 */
export const trim1 = (str: string) => {
  if (!str) {
    return '';
  }

  let trimmedString = '';
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== ' ') {
      trimmedString += str[index];
    }
  }
  return trimmedString;
};
