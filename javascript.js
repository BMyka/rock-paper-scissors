let computerScore;
let userScore;

const winningCombinations = [
    [2, 1], // paper beats rock
    [3, 2], // scissors beats paper
    [1, 3] // rock beats scissors
];


function playRound(computerGenerated, computerPick, userPick) {
  const userPickText = ["Rock", "Paper", "Scissors"][userPick - 1];

  switch (true) {
    case computerGenerated === userPick:
      return `It was a draw!`;
    case winningCombinations.some(([cg, up]) => cg === computerGenerated && up === userPick):
      computerScore++;
      return `I won, ${computerPick} beats ${userPickText}!`;
    default:
      userScore++;
      return `You won, ${userPickText} beats ${computerPick}!`;
  }
}

function game() {
  while (true) {
    computerScore = 0;
    userScore = 0;

    for (let i = 1; i <= 5; i++) {


      // Computer chooses
      const computerGenerated = Math.floor(Math.random() * 3) + 1;
      const computerPick = ["Rock", "Paper", "Scissors"][computerGenerated - 1];

      // Users chooses his pick

      const userInput = prompt("Enter your pick, Rock/Paper/Scissors").toLowerCase();
      const userPick = ["rock", "paper", "scissors"].indexOf(userInput) + 1;

      alert(playRound(computerGenerated, computerPick, userPick));
    }

    if (computerScore === userScore) {
      alert(`It was a draw: ${userScore} - ${computerScore}`);
    } else if (computerScore > userScore) {
      alert(`You lost: ${userScore} - ${computerScore}`);
    } else {
      alert(`You won: ${userScore} - ${computerScore}`);
    }

    // ask the user if they want to play again
    const playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain !== "yes") {
      break; // exit the loop
    }
  }
}

game();


