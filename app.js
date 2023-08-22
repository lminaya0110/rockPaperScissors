// COMPUTER CHOICE SELECTION

function getRandomChoice(arr) {
  // get random index value from any array argument
  const randomIndex = Math.floor(Math.random() * arr.length);

  // assign choice based on random index
  const randomChoice = choices[randomIndex];

  // return the random item from array
  return randomChoice;
}

// ARRAY CONTAINING THE CHOICES
let choices = ["Rock", "Paper", "Scissors"];

// SELECTING THE DIVS THAT WILL BE MANIPULATED BY DOM
let userChoiceDisplay = document.getElementById("userChoiceDisplay");
let compChoiceDisplay = document.getElementById("compChoiceDisplay");
let userScoreDisplay = document.getElementById("userCurrScore");
let compScoreDisplay = document.getElementById("compCurrScore");
let roundsRemaining = document.getElementById("roundsRemaining");
let resetDisplay = document.getElementById("resetDisplay");
let finalResults = document.getElementById("finalResults");
let currentUserScore = document.createElement("h3");
let currentCompScore = document.createElement("h3");
let currentRound = document.createElement("p");
let winningMsg = document.createElement("h2");
let loosingMsg = document.createElement("h2");

// SETTING GLOBAL VARIABLES
let rounds = 0;
let resetBtn;
let userScore = 0;
let compScore = 0;
let userChoiceHeader;
let userChoiceImg;
let compChoiceHeader;
let compChoiceImg;

// SELECTING USER BUTTONS BY IDS
let rockBtn = document.getElementById("userRockBtn");
let paperBtn = document.getElementById("userPaperBtn");
let scissorsBtn = document.getElementById("userScissorsBtn");

// ALL CHOICES
let userBtns = document.getElementsByClassName("userChoice");

// ALL FUNCTIONS

function shootRock() {
  let compChoice = getRandomChoice(choices);
  console.log("Computer chose: " + compChoice);

  console.log("You chose Rock");

  if (compChoice === "Rock") {
    console.log("DRAW");
  } else if (compChoice === "Paper") {
    console.log("Paper covers rock, YOU LOSE");
    compScore += 1;
  } else {
    console.log("Rock smashes scissors, YOU WIN!");
    userScore += 1;
  }

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  // display user choice header
  const userChoiceHeader = document.createElement('p');
  userChoiceHeader.setAttribute("id", "userChoiceCurrRound");
  userChoiceHeader.textContent = "You Chose: ";
  userChoiceDisplay.appendChild(userChoiceHeader);
  // display user choice img
  const userChoiceImg = document.createElement("img");
  userChoiceImg.setAttribute("id", "userChoiceImgCurrRound");
  userChoiceImg.src = "assets/7-2-rock-free-png-image.png";
  userChoiceDisplay.appendChild(userChoiceImg);

  // display computer choice header
  const compChoiceHeader = document.createElement("p");
  compChoiceHeader.setAttribute = ("id", "compChoiceHeaderCurrRound");
  compChoiceHeader.textContent = "Computer Chose: ";
  compChoiceDisplay.appendChild(compChoiceHeader);

  // display computer choice img
  if (compChoice == "Rock") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/7-2-rock-free-png-image.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else if (compChoice == "Paper") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-torn-notebook-paper-white-coil-png-image_5317122.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-an-office-scissors-illustration-image_1227636.jpg";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  }

  // reset button
  resetBtn = document.createElement("button");
  resetBtn.textContent = "Go Again";
  resetDisplay.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
  rounds++;
  updateScore();
  updateRounds();
}

function shootPaper() {
  let compChoice = getRandomChoice(choices);
  console.log("Computer chose: " + compChoice);

  console.log("You chose Paper");

  if (compChoice === "Paper") {
    console.log("DRAW");
  } else if (compChoice === "Rock") {
    console.log("Paper covers rock, YOU WIN!");
    userScore += 1;
  } else {
    console.log("Scissors cuts Paper, YOU LOSE!");
    compScore += 1;
  }

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

  // display user choice header
  const userChoiceHeader = document.createElement('p');
  userChoiceHeader.setAttribute("id", "userChoiceCurrRound");
  userChoiceHeader.textContent = "You Chose: ";
  userChoiceDisplay.appendChild(userChoiceHeader);

  // display user choice img
  const userChoiceImg = document.createElement("img");
  userChoiceImg.src = "assets/pngtree-torn-notebook-paper-white-coil-png-image_5317122.png";
  userChoiceImg.setAttribute("id", "userChoiceImgCurrRound");
  userChoiceDisplay.appendChild(userChoiceImg);

  // display computer choice header
  const compChoiceHeader = document.createElement("p");
  compChoiceHeader.setAttribute = ("id", "compChoiceHeaderCurrRound");
  compChoiceHeader.textContent = "Computer Chose: ";
  compChoiceDisplay.appendChild(compChoiceHeader);

  // display computer choice img
  if (compChoice == "Rock") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/7-2-rock-free-png-image.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else if (compChoice == "Paper") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-torn-notebook-paper-white-coil-png-image_5317122.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-an-office-scissors-illustration-image_1227636.jpg";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  }

  resetBtn = document.createElement("button");
  resetBtn.textContent = "Go Again";
  resetDisplay.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
  rounds++;
  updateScore();
  updateRounds();
}

function shootScissors() {
  let compChoice = getRandomChoice(choices);
  console.log("Computer chose: " + compChoice);

  console.log("You chose Scissors");

  if (compChoice === "Scissors") {
    console.log("DRAW");
  } else if (compChoice === "Rock") {
    console.log("Rock smashes Scissors, YOU LOSE!");
    compScore += 1;
  } else {
    console.log("Scissors cuts Paper, YOU WIN!");
    userScore += 1;
  }

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;

// display user choice header
  const userChoiceHeader = document.createElement('p');
  userChoiceHeader.setAttribute("id", "userChoiceCurrRound");
  userChoiceHeader.textContent = "You Chose: ";
  userChoiceDisplay.appendChild(userChoiceHeader);
  // display user choice
  const userChoiceImg = document.createElement("img");
  userChoiceImg.src = "assets/pngtree-an-office-scissors-illustration-image_1227636.jpg";
  userChoiceImg.setAttribute("id", "userChoiceImgCurrRound");
  userChoiceDisplay.appendChild(userChoiceImg);
  

  // display computer choice header
  const compChoiceHeader = document.createElement("p");
  compChoiceHeader.textContent = "Computer Chose: ";
  compChoiceHeader.setAttribute = ("id", "compChoiceHeaderCurrRound");
  compChoiceDisplay.appendChild(compChoiceHeader);

  // display computer choice img
  if (compChoice == "Rock") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/7-2-rock-free-png-image.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else if (compChoice == "Paper") {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-torn-notebook-paper-white-coil-png-image_5317122.png";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  } else {
    const compChoiceImg = document.createElement("img");
    compChoiceImg.src = "assets/pngtree-an-office-scissors-illustration-image_1227636.jpg";
    compChoiceImg.setAttribute = ("id", "compChoiceImgCurrRound");
    compChoiceDisplay.appendChild(compChoiceImg);
  }


  resetBtn = document.createElement("button");
  resetBtn.textContent = "Go Again";
  resetDisplay.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
  rounds++;
  updateRounds();
  updateScore();
}

function updateScore() {
  currentUserScore.textContent = "Player Score: " + userScore;
  userScoreDisplay.append(currentUserScore);

  currentCompScore.textContent = "Computer Score: " + compScore;
  compScoreDisplay.append(currentCompScore);
}

function updateRounds() {
  currentRound.textContent = "Round " + rounds;
  roundsRemaining.append(currentRound);
}

function resetGame() {
  // remove reset btn
  resetBtn.parentNode.removeChild(resetBtn);

  // end game at 5 rounds
  if (rounds == 5) {
    endGame();
  }

  // disable all other choices
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;


  // remove user choice of current round
  const userChoiceHeader = document.getElementById("userChoiceCurrRound");
  const userChoiceImg = document.getElementById("userChoiceImgCurrRound");
  userChoiceHeader.parentNode.removeChild(userChoiceHeader);
  userChoiceImg.parentNode.removeChild(userChoiceImg);


  // remove computer choice of current round
  const compChoiceHeader = document.getElementById("compChoiceHeaderCurrRound");
  const compChoiceImg = document.getElementById("compChoiceImgCurrRound");
  compChoiceHeader.parentNode.removeChild(compChoiceHeader);
  compChoiceImg.parentNode.removeChild(compChoiceImg);
}

function endGame() {
  if (userScore > compScore) {
    winningMsg.textContent = "CONGRATS YOU WON!";
    finalResults.append(winningMsg);
  } else if (userScore < compScore) {
    console.log("YOU LOST");
    loosingMsg.textContent = "YOU LOST!";
    finalResults.append(loosingMsg);
  } else {
    console.log("WOW its a DRAW");
  }
}
