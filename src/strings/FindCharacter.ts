/**
* Given a string and a character, returns the first position of the character in the string or -1
**/
export const findCharacter = (str: string, targetChar: string) => {
  let i = 0;
  while (i < str.length) {
    if (str.charAt(i) === targetChar) {
      return i;
    }
    i++;
  }
  return -1;
}
