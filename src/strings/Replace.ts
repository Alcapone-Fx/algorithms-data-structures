/**
 * Given a string replace a substring with a new substring
 */
export const replace = (str: string, oldSubstring: string, newSubstring: string) => {
  if(!str || !oldSubstring) {
    return str;
  }
  let newString = str;
  while (true) {
    const indexStart = newString.indexOf(oldSubstring);
    if (indexStart === -1) {
      break;
    }
    const leftString = newString.slice(0, indexStart);
    const rightString = newString.slice(indexStart + oldSubstring.length);

    newString = leftString + newSubstring + rightString;
  }
  return newString;
};
 