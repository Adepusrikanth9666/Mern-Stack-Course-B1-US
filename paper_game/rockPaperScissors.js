let playerScore = 0;
let computerScore = 0;
const options = document.querySelectorAll(".option");
const message = document.querySelector("#message");
const playerScoreElemennt = document.getElementById("palyerscore");
const computerScoreElement = document.getElementById("computerscore");

const generateComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
};
const draw = () => {
  message.innerText = "It's a tie. play again";
  message.style.backgroundColor = "#2d2d2d";
};
options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.getAttribute("id");
    playGame(playerChoice);
  });
});
const showWinner = (playerWins, playerChoice, computerChoice) => {
  if (playerWins) {
    playerScore = playerScore + 1;
    console.log("playerScore", playerScore);
    playerScoreElemennt.innerHTML = playerScore;
    message.innerText = `you win! your ${playerChoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
  } else {
    computerScore = computerScore + 1;
    console.log("computerScore", computerScore);
    computerScoreElement.innerText = computerScore;
    message.innerText = `you lost! ${computerChoice} beats ${playerScore}`;
    message.style.backgroundColor = "red";
  }
};

const playGame = (playerChoice) => {
  console.log("playerChoice", playerChoice);
  const computerChoice = generateComputerChoice();
  console.log("computerChoice", computerChoice);
  if (playerChoice === computerChoice) {
    draw();
  } else {
    let playerWins = true;
    if (playerChoice === "Rock") {
      playerWins = computerChoice === "Paper" ? false : true;
    } else if (playerChoice === "Paper") {
      playerWins = computerChoice === "Scissors" ? false : true;
    } else if (playerChoice === "Scissors") {
      playerWins = computerChoice === "Rock" ? false : true;
    }
    showWinner(playerWins, playerChoice, computerChoice);
  }
};
