"use strict";

//part 1
let a = 100;
let b = 28;

let addition = a + b;
console.log("Сумма додавання:" + addition);

let subtraction = a - b;
console.log("Сумма віднімання:" + subtraction);

let multiplication = a * b;
console.log("Сумма множення:" + multiplication);

let division = a / b;
console.log("Ділення: " + division);

let exponentiation = Math.pow(b, 2);
console.log("Зведення в ступінь: " + exponentiation);

let squareRoot = Math.sqrt(a);
console.log("Квадратний корінь: " + squareRoot);

//part 2
let variable = 20;

let toString = String(variable);
console.log("Рядок: " + toString);

let toNumber = Number(toString);
console.log("Число: " + toNumber);

let toBoolean = Boolean(toNumber);
console.log("Булеве значення: " + toBoolean);
