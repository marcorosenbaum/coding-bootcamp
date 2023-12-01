"use strict";

// there is a cat and a dog

// Cat years = 15 cat years for the first human year
// 9 cat years for the second human year
// +4 cat years for each year after that

// dog years = 15 dog years for the first human year
// 9 dog years for the second human year
// 5 dog years for each year after that

const humanYearsCatYearsDogYears = function (humanYears) {
  let result = [humanYears];
  let catYears = 0;
  let dogYears = 0;
  if (humanYears < 2) {
    catYears = 15;
    dogYears = 15;
    result.push(catYears);
    result.push(dogYears);
  } else if (humanYears < 3) {
    catYears = 24;
    dogYears = 24;
    result.push(catYears);
    result.push(dogYears);
  } else if (humanYears >= 3) {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
    result.push(catYears);
    result.push(dogYears);
  }
  return result;
};

console.log(humanYearsCatYearsDogYears(3));
