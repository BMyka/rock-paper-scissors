let computerScore = 0;
let userScore = 0;
let buttonsAdded = false;

const winningCombinations = [
    [2, 1], // paper beats rock
    [3, 2], // scissors beats paper
    [1, 3] // rock beats scissors
];


function playRound(computerGenerated, computerPick, userPick) {
  const userPickText = ["Rock", "Paper", "Scissors"][userPick - 1];
  
  switch (true) {
    case computerGenerated === userPick:
      return `We picked the same thing!`;
    case winningCombinations.some(([cg, up]) => cg === computerGenerated && up === userPick):
      computerScore++;
      return `I won, ${computerPick} beats ${userPickText}!`;
    default:
      userScore++;
      return `You won, ${userPickText} beats ${computerPick}!`;
  }
}

let counter = 0;
function game(e) {
      counter++;
              // Computer chooses
      const computerGenerated = Math.floor(Math.random() * 3) + 1;
      const computerPick = ["Rock", "Paper", "Scissors"][computerGenerated - 1];

      // Users chooses his pick
      const pick = parseInt(e.target.getAttribute('data-pick'));

      const result = document.querySelector('.result');
      result.textContent = playRound(computerGenerated, computerPick, pick)
      
      
    const score = document.querySelector('.score');
    if (computerScore === userScore) {
        score.textContent = `It was a draw: ${userScore} - ${computerScore}`;
    } else if (computerScore > userScore) {
        score.textContent = `Score: ${userScore} - ${computerScore}`;
    } else {
        score.textContent = `Score: ${userScore} - ${computerScore}`;
    }


    if(counter === 5){
      hideSquares();

      const container = document.querySelector('#container');
      const paragraph = document.createElement('p');
      const tryAgain = document.createElement('div');
      tryAgain.classList.add('question');
      tryAgain.textContent = "Do you want to play again?";
      let answer = ""
      const yes = document.createElement('button');
      const no = document.createElement('button');
      yes.classList.add('yes');
      no.classList.add('no');
      yes.textContent = "Yes";
      no.textContent = "No";
      tryAgain.append(yes, no);
      container.append(tryAgain);
      
      const YES = document.querySelector('.yes');
      const NO = document.querySelector('.no');
    
      YES.addEventListener('click', function(e) {
        answer = e.target.textContent;
        console.log(answer);
      });
    
      NO.addEventListener('click', function(e) {
        answer = e.target.textContent;
        console.log(answer);
      });

      return new Promise((resolve, reject) => {
        const checkAnswer = setInterval(() => {
          if (answer !== "") {
            clearInterval(checkAnswer);
            if (answer == "Yes") {
              container.removeChild(tryAgain);
              showSquares();
              score.textContent = "";
              result.textContent = "";
              computerScore = 0;
              userScore = 0;
              counter = 0;
              const header = document.querySelector('h1');
              header.textContent = "Computer vs Human... Who will win"
              resolve();
            }
            if (answer == "No") {
              container.removeChild(tryAgain);
              score.textContent = "Ok, have it your way";
              result.textContent = "";
              computerScore = 0;
              userScore = 0;
              counter = 0;
              const header = document.querySelector('h1');
              header.textContent = ""
              resolve();
            }
          }
        }, 100);
      });

    }  

}
const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('click', game))



const hideSquares = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.display = 'none';
  });
};


const showSquares = () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.style.display = 'block';
  });
};

