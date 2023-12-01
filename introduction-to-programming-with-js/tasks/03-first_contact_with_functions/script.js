// task 03-01 === Greet function

function welcomeMsg(a, b) {
  return b + a;
}
console.log(welcomeMsg("Jane", "Welcome "));

// task 03-02 === Gross price function

/* function calcGrossPrice(a, b) {
  console.log(a + a * b);
} */

function calcGrossPrice(a, b) {
  return a + a * b;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

// task 03-03 === Add positive function

function addPositive(a, b) {
  return a + b;
}
console.log(addPositive(2, 3));
// result1 should be 5

function addPositive(a, b) {
  return (a + b) * -1;
}
console.log(addPositive(3, -5));
// result1 should be 8

function addPositive(a, b) {
  return (a + b) * -1;
}
console.log(addPositive(-1, -8));
// result1 should be 9
