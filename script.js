// Game State Variables
let playerCoins = 10;
let wager = 1;
let roundResult = '';

const choices = ['rock', 'paper', 'scissors']; // Map numbers to choices

function showSelections(playerSelection, computerSelection) {
  const playerImage = document.getElementById('playerSelection');
  const computerImage = document.getElementById('computerSelection');

  playerImage.src = images[choices[playerSelection - 1]];
  computerImage.src = images[choices[computerSelection - 1]];
}

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
  showSelections(playerChoice, computerChoice);
}

const wagerButtons = document.querySelectorAll('.coins'); // Replace '.coins' with the selector for your wager buttons

wagerButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove the selected class from all buttons
    wagerButtons.forEach(btn => {
      btn.classList.remove('selected');
    });

    // Add the selected class to the clicked button
    this.classList.add('selected');
  });
});

const images = {
  1: 'images/original/ROCK.png', // Replace with your image paths
  2: 'images/original/PAPER.png',
  3: 'images/original/SCISSORS.png',
};

function showSelections(playerSelection, computerSelection) {
  const playerImage = document.getElementById('playerSelection');
  const computerImage = document.getElementById('computerSelection');

  playerImage.src = images[playerSelection];
  computerImage.src = images[computerSelection];
}

// Call this function in your game result function, passing the player's and computer's selections

// Sets the wager amount
function setWager(amount) {
  wager = amount;
}

// Start the game
updateScore();