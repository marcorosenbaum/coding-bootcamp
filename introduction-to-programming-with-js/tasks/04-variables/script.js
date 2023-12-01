"use strict";
// task 04-01 Spot the errors and fix them

let userName = "Brad";
userName = "Jenna";
const result = userName.length;

function getUserNameLength(userName) {
  return result;
}

console.log(getUserNameLength(userName) > 4);
// ^______________ Should log true

console.log("task 04-02");
// ======================================================

// task 04-02 isString function

// TODO: Implement the isString function

const num = "string";

const isString = function (something) {
  return typeof something === typeof num;
};

console.log(isString("Hello"));
// result should be true

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
