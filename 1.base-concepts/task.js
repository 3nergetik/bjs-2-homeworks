function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict";
  let d = b**2 - 4 * a * c;
  arr = [];
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    x1 = (-b + Math.sqrt(d) )/(2*a);
    x2 = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x1);
    arr.push(x2);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
