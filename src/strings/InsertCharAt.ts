/**
 * Given a string str, a char to insert and an array of indices
 * that describes the indices in the original string where the char will be added.
 */
export const insertCharAt = (str: string, char: string, indexes: number[]) => {
  if (!str || !indexes || !indexes.length) {
    return str;
  }
  const strArray = str.split('');
  indexes.forEach((atIndex, i) => {
    strArray.splice(atIndex + i, 0, char);
  });
  return strArray.join('');
};

/**
 * Given a string str, a char to insert and an array of indices
 * that describes the indices in the original string where the char will be added.
 * Note: better performance
 */
export const insertCharAt1 = (str: string, char: string, indexes: number[]) => {
  if (!str || !indexes || !indexes.length) {
    return str;
  }
  let newStr = '';
  let indexesCount = 0;
  let outOfBoundsString = '';
  for (let index = 0; index < str.length; index++) {
    if (indexes[indexesCount] >= str.length) {
      outOfBoundsString += char;
      indexesCount++;
    }
    if (index === indexes[indexesCount]) {
        newStr += char;
        indexesCount++;
    }
    newStr += str[index];
  }
  return newStr + outOfBoundsString;
};
