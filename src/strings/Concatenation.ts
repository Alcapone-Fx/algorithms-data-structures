/**
 * The process of combining more than one string together is known as Concatenation.
 * String Concatenation is the technique of combining two strings.
 **/

// String concatenation without using any inbuilt methods:
export const concatenate = (str1: string, str2: string) => {
  const length1 = str1.length;
  const length2 = str2.length;
  const str3Array: string[] = [];

  for (let i = 0; i < length1; i++) {
    str3Array.push(str1.charAt(i));
  }

  for (let i = 0; i < length2; i++) {
    str3Array.push(str2.charAt(i));
  }

  return str3Array.join('');
};
