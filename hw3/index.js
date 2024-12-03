"use strict";

//part 1
function recursiveOddSumTo(number) {
  if (number <= 0) return 0;

  if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number - 1);
  } else {
    return recursiveOddSumTo(number - 1);
  }
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(10));

//part 2
function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(10));
