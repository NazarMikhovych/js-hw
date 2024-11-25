"use strict";

//part 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ЛолКек");
  } else if (i % 3 === 0) {
    console.log("Лол");
  } else if (i % 5 === 0) {
    console.log("Кек");
  } else {
    console.log(i);
  }
}

//part 2

//for
let value1 = 10;
if (typeof value1 === "number" && !isNaN(value1)) {
  for (let i = 2; i < value1; i += 2) {
    console.log(i);
  }
} else {
  console.log("Таке чуство шо Бог десь наказує нас за шось");
}

//while

let value2 = 10;
if (typeof value2 === "number" && !isNaN(value2)) {
  let i = 2;
  while (i < value2) {
    console.log(i);
    i += 2;
  }
} else {
  console.log("Таке чуство шо Бог десь наказує нас за шось");
}
