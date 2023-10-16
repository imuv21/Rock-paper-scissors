//rock paper scissor game with cer


let playAgain = true;
let uscore = 0;
let cscore = 0;

while (playAgain) {
  let choises = ['R', 'P', 'S'];
  let computer = choises[Math.floor(Math.random() * 
  choises.length)];
  let user = prompt("So what's it gonna be? : ")
  if (user == 'R' && computer == 'P' ||
    user == 'S' && computer == 'R' ||
    user == 'P' && computer == 'S') {
    console.log("Computer wins")
    cscore = cscore + 1;
  } else if (user == 'R' && computer == 'R' ||
    user == 'S' && computer == 'S' ||
    user == 'P' && computer == 'P') {
    console.log("they cancle each other")
  }
  else {
    console.log("User wins")
    uscore = uscore + 1;
  }
  console.log("Computer chose : " + computer)
  console.log("user score : "+ uscore, "computer score : "+ cscore)
  playAgain = confirm("Do u wanna guess again?")
}

if (uscore > cscore){
  console.log("User is userper")
}else if (uscore == cscore){
  console.log("Are u kidding me?")
}else{
  console.log("So how do you feel after loosing against a random function?")
}

