const age = Number(prompt("enter your age"));
switch (true) {
  case age >= 18 && age < 50:
    alert("your can vote for for the politcal party your'e supporting");
    break;

  case age < 18:
    alert("you cannot vote according to the constitution of our country");
    break;

  default:
    alert("look at the keyboard and type carefully u dumbass");
}
