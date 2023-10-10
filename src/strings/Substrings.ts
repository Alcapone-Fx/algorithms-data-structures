/**
 * This function takes a string as input and returns an array of all possible substrings of that string.
 */
export const substrings = (str: string) => {
  const subs: string[] = [];
  if (!str) {
    return subs;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      subs.push(str.slice(i, j + 1));
    }
  }

  return subs;
};
