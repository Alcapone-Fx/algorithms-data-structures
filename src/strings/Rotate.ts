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
