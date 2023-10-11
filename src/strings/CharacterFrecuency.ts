/**
 * Given a string str, returns the frequency of each of the characters of str in order of appereance.
 * e.g. input: hello, output: 'h1e1l2o1'
 */
export const characterFrecuency = (str: string) => {
  const map = new Map();

  for (const char of str) {
    const value = (map.get(char) || 0) + 1;

    map.set(char, value);
  }

  return [...map].toString().replace(/,/g, '');
};

/**
 * Given a string str, returns the frequency of each of the characters of str in order of appereance.
 * e.g. input: hello, output: 'h1e1l2o1'
 * Note: best performance
 */
export const characterFrecuency1 = (str: string) => {
  const frequencies: { [index: string]: number } = {};

  for (const char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  return Object.entries(frequencies)
    .map(([char, count]) => `${char}${count}`)
    .join('');
};
