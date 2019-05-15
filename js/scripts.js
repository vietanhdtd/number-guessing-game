let numberOfAvailableGuesses = 10

function guessNumber() {
  if (numberOfAvailableGuesses  === 0 ) {
    return
  }
  const generatedRandomNumber = '10'
  const guess = document.getElementById('guess').value

  if (guess < generatedRandomNumber) {
    document.getElementById('wrongGuess').style.visibility = 'visible'
  }

  if (guess > generatedRandomNumber) {
    document.getElementById('wrongGuess').style.visibility = 'visible'
  }

  if (guess === generatedRandomNumber) {
    document.getElementById('correctGuess').style.visibility = 'visible'
  }
  document.getElementById('guess').value = ''
  const remainingGuesses = document.getElementById('numberOfRemainingGuesses').innerHTML
  document.getElementById('numberOfRemainingGuesses').innerHTML = parseInt(remainingGuesses) - 1
  numberOfAvailableGuesses -= 1
}

function resetGame() {
  numberOfAvailableGuesses = 10
  document.getElementById('numberOfRemainingGuesses').innerHTML = 10
}