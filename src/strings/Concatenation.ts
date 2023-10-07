/*
 * The process of combining more than one string together is known as Concatenation.
 * String Concatenation is the technique of combining two strings.
 */

// 
/**
 * String concatenation without using any inbuilt methods:
 */
export const concatenate = (str1: string, str2: string) => {
  const str3Array: string[] = [];

  for (let i = 0; i < str1.length; i++) {
    str3Array.push(str1[i]);
  }

  for (let i = 0; i < str2.length; i++) {
    str3Array.push(str2[i]);
  }

  return str3Array.join('');
};
