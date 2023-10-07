/**
 * Given two strings S1 and S2, The task is to find if S1 is a substring of S2.
 * Return all the indexes of the occurrences, else return -1.
 */
export const findSubstringIndexes = (str: string, subString: string) => {
  if (!str.length || !subString.length) {
    return -1;
  }

  const indexes: number[] = [];

  for (let strIndex = 0; strIndex < str.length; strIndex++) {
    let match = true;

    for (let subStrIndex = 0; subStrIndex < subString.length; subStrIndex++) {
      if (str[strIndex + subStrIndex] !== subString[subStrIndex]) {
        match = false;
        break;
      }
    }
    match && indexes.push(strIndex);
  }

  return indexes.length ? indexes : -1;
};

/**
 * Given two strings S1 and S2, The task is to find if S1 is a substring of S2.
 * Return all the indexes of the occurrences, else return -1.
 * Using String.indexOf
 */
export const findSubstringIndexes1 = (str: string, subString: string) => {
  if (!str.length || !subString.length) {
    return -1;
  }

  let currentIndex = 0;
  const indexes: number[] = [];

  while (true) {
    currentIndex = str.indexOf(subString, currentIndex);
    if (currentIndex === -1) {
      break
    }

    indexes.push(currentIndex);
    currentIndex++;
  }

  return indexes.length ? indexes : -1;
};
