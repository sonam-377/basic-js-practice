const num1 = Number(prompt("enter your 1st number"));
const num2 = Number(prompt("enter your second number"));
const ask = Number(prompt("if u want to  add type 1"));
const sum = num1 + num2;
const subtract = num1 - num2;
if (ask === 1) {
  alert(`sum is ${sum}`);
} else {
  alert(`you have subtracted the both numbers to gain ${subtract}`);
}
