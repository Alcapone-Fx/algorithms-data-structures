/**
 * Given a string, return the reverse string
 */
export const reverse = (str: string) => {
  if (!str) {
    return '';
  }

  let newString = '';

  for (let index = str.length - 1; index >= 0; index--) {
    newString += str[index];
  }

  return newString;
};
