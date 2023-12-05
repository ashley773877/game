let secretNumber;
let attempts;
const maxAttempts = 3;

function startGame() {
 
  secretNumber = Math.floor(Math.random() * 10) + 1;

 
  attempts = 0;

  
  playGame();
}

function playGame() {
  //tell the user to guess the number
  const userGuess = parseInt(prompt('Guess the number between 1 and 10:'));

  // put in the attempts
  attempts++;

  // Check if the guess is correct
  if (userGuess === secretNumber) {
    displayResult(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
  } else {
    // give a hint based on the user's guess
    const hint = userGuess > secretNumber ? 'Too high.' : 'Too low.';

    // Display the hint to the user
    displayResult(`Incorrect. ${hint} Try again.`);

    // Check if the maximum attempts are reached
    if (attempts < maxAttempts) {
      // 
      setTimeout(playGame, 500);
    } else {
      // End the game if the maximum attempts are reached
      displayResult(`Sorry, you've reached the maximum attempts. The correct number was ${secretNumber}.`);
    }
  }
}

function displayResult(message) {
  // Update the DOM to display the game result
  const resultElement = document.getElementById('result');
  resultElement.textContent = message;
}