window.addEventListener("load", startGame);

function startGame() {
  console.log("Game started");

//jeg looper gennem mit "array", alle knapperne, og tilføjer klik
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", playersChoice);
  })
}

function playersChoice() {
  console.log("Players choice");

  rememberPlayerChoice();
}

function rememberPlayerChoice() {
  console.log("Remember players choice");
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("Making random computer choice");

  let myRandom = Math.floor((Math.random() * 3));
  
  if (myRandom === 0) {
    computer = "rock";
} else if (myRandom === 1) {
    computer = "scissors";
} else {
    computer = "paper";
}


  

  rememberComputerChoice();
}

function rememberComputerChoice() {
  showAnimations();
}

function showAnimations() {
  console.log("Show animations");

  //jeg looper gennem alle med class'en .player og giver dem class'en "shake"
  document.querySelectorAll(".player").forEach((player) => {
    player.classList.add("shake");
  })
  //når animationen er slut går vi videre til næste funktion
document.querySelector(".player").addEventListener("animationend", determineWinner)
}

function determineWinner() {
  console.log("Determine winner");
  //Faked so player always win
  winner = "computer";

  //if player won
  showWin();

  //if player lose
  showLose();

  // if draw
  showDraw();
}

function showWin() {
  console.log("Show win!");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  console.log("Show lose!");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  console.log("Show draw!");
  document.querySelector("#draw").classList.remove("hidden");
}
