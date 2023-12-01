"use strict";

// Change every letter in a given string to the next letter in the alphabet. _______ DONE
// Spaces and special characters should remain the same.____________________________ DONE
// Capital letters should transfer in the same way but remain capitilized.

// solution: loop over string and if statements for every letter in the alphabet _____ DONE
// create an array [a,b,c, ...] as reference for alphabet ____________________________ DONE
// create a new string with the new letters ___________________________________________DONE
// compare str and newStr, when str[i] is capitalized
// then newStr[i] should be capitalized as well

function nextLetter(str) {
  const alphabet = [
    "a", // 0
    "b",
    "c", // 2
    "d",
    "e", // 4
    "f",
    "g", // 6
    "h",
    "i", // 8
    "j",
    "k", // 10
    "l",
    "m", // 12
    "n",
    "o", // 14
    "p",
    "q", // 16
    "r",
    "s", // 18
    "t",
    "u", // 20
    "v",
    "w", // 22
    "x",
    "y", // 24
    "z", // 25
    "A", // 26
    "B",
    "C", // 28
    "D",
    "E", // 30
    "F",
    "G", // 32
    "H",
    "I", // 34
    "J",
    "K", // 36
    "L",
    "M", // 38
    "N",
    "O", // 40
    "P",
    "Q", // 42
    "R",
    "S", // 44
    "T",
    "U", // 46
    "V",
    "W", // 48
    "X",
    "Y", // 50
    "Z", // 51
  ];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      let letterPosition = alphabet.indexOf(str[i]); // index of current letter
      if (letterPosition === 25) {
        newStr += alphabet[0];
      } else if (letterPosition === 51) {
        newStr += alphabet[26];
      } else newStr += alphabet[letterPosition + 1]; // add new letter
    } else newStr += str[i];
  }
  return newStr;
}
console.log(nextLetter("My Name Is zOo"));

// Best practice

function nextLetter(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    switch (c) {
      case "z":
        return "a";
      case "Z":
        return "A";
      default:
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
  });
}

// Chatgpt: The regular expression /[a-zA-Z]/g is used to match alphabetic characters (letters) in a string. Let's break down what this regular expression means:

/* /: Delimiters used to enclose the regular expression pattern. They indicate the start and end of the pattern.
[a-zA-Z]: This part of the regular expression is a character class. It matches a single character that is either a lowercase letter (from 'a' to 'z') or an uppercase letter (from 'A' to 'Z').
/: The closing delimiter for the regular expression pattern.
g: This is a flag that stands for "global." It instructs the regular expression engine to find all matches in the input string, rather than stopping at the first match. */
