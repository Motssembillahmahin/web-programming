const result = document.getElementById("result");
console.log(result)
let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));

let multiplication = num1 * num2;
let division = num1 / num2;

console.log(`Multiplication of ${num1} and ${num2} is: ${multiplication}`);
console.log(`Division of ${num1} and ${num2} is: ${division}`);
result.innerHTML = `Multiplication of ${num1} and ${num2} is: ${multiplication} <br> Division of ${num1} and ${num2} is: ${division}`