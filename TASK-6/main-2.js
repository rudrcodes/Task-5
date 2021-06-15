// 2) WAP in js for performing arithmetic operation on 2 number according to input operator.

let x = prompt("Enter NUM 1:");
let y = prompt("Enter NUM 2:");
let oprtr = prompt("Enter operation to perform :");
let num1 = parseInt(x);
let num2 = parseInt(y);
switch (oprtr) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
}

document.write(
  "Question -2) WAP in js for performing arithmetic operation on 2 number according to input operator."
);
