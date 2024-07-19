//statements
// 1. if else

// const gender = prompt("enter your gender");

// if (gender) alert("your'e male");
// else alert("youre female");
// //=
// == data type and value compare
// ===
// const gender = prompt("enter m for male and f for female");
// if (gender === "m") alert("youre male");
// else {
//   alert("youre femlae");
// }

//2. switch case

// write a js code to check the grade of the student

const percent = prompt("enter your percentgae");
switch (true) {
  case percent >= 80:
    alert("your grade is a");
    break;
  case percent >= 60 && percent <= 80:
    alert("your grade is b");
    break;
  default:
    alert("you have failed yourself");
}

//conditional opertaor

//if and else == ES5

const gender = "m";
if (gender === "m" ? console.log("m") : console.log("f"));
