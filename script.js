// Game State Variables
let playerCoins = 10;
let wager = 1;
let roundResult = '';

// Updates score and checks if game is over
function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.textContent = `Coins: ${playerCoins} | Wager: ${wager}`;

  if (playerCoins >= 30) {
    roundResult = 'Congratulations! You won the game!';
    disableButtons();
  } else if (playerCoins <= 0) {
    roundResult = 'Game Over! You ran out of coins!';
    disableButtons();
  }

  document.getElementById('result').textContent = roundResult;
}

// Disables the buttons and wager options
function disableButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Play a round of Rock Paper Scissors 
function play(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (playerChoice === computerChoice) {
    roundResult = "It's a tie!";
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    playerCoins += wager * 2;
    roundResult = `You win this round! You earned ${wager * 2} coins!`;
  } else {
    playerCoins -= wager;
    roundResult = `You lose this round! You've lost ${wager} coins!`;
  }

  updateScore();
}

// Sets the wager amount
function setWager(amount) {
  wager = amount;
}

// Start the game
updateScore();