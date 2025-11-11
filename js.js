function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) return "rock";
    if (randomNum === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper or scissors").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else { 
        console.log("Invalid choice. Try again!");
        return getHumanChoice(); // repeat prompt until valid 
    }
}

// Step 4 + 5: Play one round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}.`);
    return "tie";
  }

  const win =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (win) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
  }
}

// Step 6: Play the full game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);
    if (result === "human") humanScore++;
    else if (result === "computer") computerScore++;

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
  }

  console.log("--- Final Result ---");
  if (humanScore > computerScore) console.log("🎉 You win the game!");
  else if (computerScore > humanScore) console.log("😢 Computer wins the game!");
  else console.log("It's a tie overall!");
}

// Run it
playGame();


