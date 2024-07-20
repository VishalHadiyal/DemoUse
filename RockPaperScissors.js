

function playRound(playerChoice) {
    // Generate a random computer choice (0: rock, 1: paper, 2: scissors)
    const computerChoice = Math.floor(Math.random() * 3);
    const choices = ["rock", "paper", "scissors"];
  
    // Determine the winner
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return `You win! ${playerChoice} beats ${choices[computerChoice]}.`;
    } else {
      return `You lose! ${choices[computerChoice]} beats ${playerChoice}.`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      const playerChoice = prompt("Enter your choice (rock, paper, scissors):").toLowerCase();
      const result = playRound(playerChoice);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  game();
  