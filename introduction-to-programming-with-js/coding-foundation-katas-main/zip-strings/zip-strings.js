/* function zipStrings(strA, strB) {
  let result = "";
  const maxLength = Math.max(strA.length, strB.length);

  for (let i = 0; i < maxLength; i++) { */
/*     if (i < strA.length) {
      result += strA[i];
    }

    if (i < strB.length) {
      result += strB[i];
    } */

/*     result += (strA[i] || "") + (strB[i] || "");
  }

  return result;
} */

function zipStrings(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length + str2.length; i++) {
    result +=
      (str1[i] !== undefined ? str1[i] : "") +
      (str2[i] !== undefined ? str2[i] : "");
  }
  return result;
}
