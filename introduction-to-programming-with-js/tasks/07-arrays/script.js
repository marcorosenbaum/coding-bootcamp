"use strict";
/* console.log("===== Don't do it like this.. =====");

function removeItem2(givenArray, index) {
  let copyGivenArray = givenArray.slice(); // create copy of array
  const result = copyGivenArray.splice(index - 1, 1); // "const result" gets the deleted elements through splice
  return result; // return the deleted element which are saved in "const result"
}

const animals2 = ["Dog", "Cat", "Lion"];
console.log(removeItem2(animals2, 1));
// result should be: ["Cat", "Lion"]

console.log(animals2);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits2 = [
  "Watermelon",
  "Banana",
  "Cherry",
  "Kiwi",
  "Pineapple",
  "Apple",
];
console.log(removeItem2(fruits2, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits2);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

console.log("===== Do it like this ====="); */
console.log("===== Task 07-01 =====");

function removeItem(givenArray, index) {
  let copyGivenArray = givenArray.slice(); // create copy of array
  copyGivenArray.splice(index - 1, 1); // remove items of the array copy
  return copyGivenArray; // return the array without the removed items
}
const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

console.log(" ===== Task 07-02 =====");

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(givenArray) {
  let strings = "";
  for (let index = 0; index < givenArray.length; index++) {
    if (typeof givenArray[index] === "string") {
      strings += givenArray[index];
    }
  }

  return strings.length;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
