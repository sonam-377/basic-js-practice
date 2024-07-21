/*
for
while
do while

*/
// for Syntax

//write a js program for multiplicaton

// const table = Number(prompt("enter a number for table"));
// if (isNaN(table)) {
//   alert("you didnt enter a number");
// }
// for (i = 1; i <= 10; i++) {
//   console.log(`${table}*${i}=${table * i}`);
// }

//do while
//begin step
//do{
//       //   code execution
//       // increase begin step
//}while(/*step condition*/)

// const table = Number(prompt("enter a number for table"));
// if (isNaN(table)) {
//   alert("you didnt enter a number");
// }
// let i = 1;
// do {
//   console.log(`${table}*${i}=${table * i}`);
//   i++;
// } while (i <= 10);

// while
const table = Number(prompt("enter a number for table"));
if (isNaN(table)) {
  alert("you didnt enter a number");
}
let i = 1;
while (i <= 10) {
  console.log(`${table}*${i}=${table * i}`);
  i++;
}
