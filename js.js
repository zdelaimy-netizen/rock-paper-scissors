// --- ROCK PAPER SCISSORS UI VERSION ---

let humanScore = 0;
let computerScore = 0;

// randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// play one round and update scores
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

// update the DOM with current score and message
function updateResults(message) {
  resultsDiv.textContent = message;
  scoreDiv.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "🎉 You won the game!" : "💀 Computer wins!";
    resultsDiv.textContent = winner;
    disableButtons();
  }
}

// disable buttons once game is over
function disableButtons() {
  buttons.forEach((button) => (button.disabled = true));
}

// --- DOM STUFF ---

const buttons = document.querySelectorAll(".choice");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

// handle each button click
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const resultMessage = playRound(playerChoice, computerChoice);
    updateResults(resultMessage);
  });
});
