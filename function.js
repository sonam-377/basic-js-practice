//function
//function are them main building block of any program
//2 core principiles
//a.DRY
//b.SoC

//2 ways to write function
//ES5

// Write a sum  function for adding two numbers
// function sum(a, b) {
//   //logic

//   const c = a + b;
//   return c;
// }
// const result = sum(2, 3);
// console.log({ result });

// write javascript program for finding square of a number

function square(a) {
  const b = a * a;
  return b;
}
const num = Number(prompt("enter a number"));
const result = square(num);
console.log({ result });

//ES6

const squares = (x) => {
  return x * x;
};
const newAnswer = squares(6);
console.log({ newAnswer });
