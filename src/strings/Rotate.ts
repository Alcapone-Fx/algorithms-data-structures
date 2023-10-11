/**
 * Given a string, return an array with all possible rotations
 */
export const rotate = (str: string) => {
  const rotations: string[] = [];
  if (!str) {
    return rotations;
  }

  const doubleString = str + str;

  for (let rotationIndex = 0; rotationIndex < str.length; rotationIndex++) {
    rotations.push(
      doubleString.slice(rotationIndex, rotationIndex + str.length)
    );
  }

  return rotations;
};

/**
 * Right rotate the given string by d elements
 */
export const rightRotate = (str: string, rotate: number) => {
  if (!str || rotate <= 0) {
    return str;
  }

  const repeated = str + str;
  const strLength = str.length;
  const offset = rotate % strLength || strLength;

  return repeated.slice(-strLength - offset, -offset);
};

/**
 * Left rotate the given string by d elements
 */
export const leftRotate = (str: string, rotate: number) => {
  if (!str || rotate <= 0) {
    return str;
  }

  const repeated = str + str;
  const strLength = str.length;
  const offset = rotate % strLength || strLength;

  return repeated.slice(offset, strLength + offset);
};

/**
 * Left rotate the given string by d elements
 * Note: best performance
 */
export const leftRotate1 = (str: string, rotate: number) => {
  if (!str || rotate <= 0) {
    return str;
  }

  rotate = rotate % str.length; // Handle cases where d is greater than the string length
  const leftPart = str.slice(rotate);
  const rightPart = str.slice(0, rotate);

  return leftPart + rightPart;
};

/**
 * Right rotate the given string by d elements
 * Note: best performance
 */
export const rightRotate1 = (str: string, rotate: number) => {
  if (!str || rotate <= 0) {
    return str;
  }

  const n = str.length;
  rotate = rotate % n; // Handle cases where d is greater than the string length
  const leftPart = str.slice(n - rotate);
  const rightPart = str.slice(0, n - rotate);

  return leftPart + rightPart;
};
