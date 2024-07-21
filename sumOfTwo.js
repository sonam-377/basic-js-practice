const a = Number(prompt("enter a integer"));
const b = Number(prompt("enter another  integer"));
const sum = a + b;
const sure = confirm("do you want to add two numbers?");
if (a === b) {
  const sum1 = (a + b) * 3;
  alert(
    `because you have given the same value, your ans will be tripple the vale of which is ${sum1}`
  );
} else {
  alert(`your sum is ${sum}`);
}
