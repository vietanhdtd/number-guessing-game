  let numberOfAvailableGuesses = 10
  let listOfGuessedNumber = [];
  let highscoreList = []

  function guessAlertStyle(_classAlert, _alertText) {
    document.getElementById('userAlert').style.visibility = 'visible'
    document.getElementById('userAlert').className = _classAlert
    document.getElementById('userAlert').innerHTML = _alertText
  }

  function inputBlank() {
    return document.getElementById('guess').value = ''
  }

  function guessNumber() {
    if (numberOfAvailableGuesses === 0) {
      document.getElementById('guessRemainingBtn').innerHTML = `Out of Guesses!!!`
      return
    }
    const generatedRandomNumber = Math.floor((Math.random() * 100) + 1);
    console.log('generatedRandomNumber', Math.floor((Math.random() * 100) + 1))
    const guess = document.getElementById('guess').value

    if (guess < generatedRandomNumber) {
      guessAlertStyle("text-danger h2 col-7", `Your guess of ${guess} was too low`)
    }

    if (guess > generatedRandomNumber) {
      guessAlertStyle("text-danger h2 col-7", `Your guess of ${guess} was too high`)
    }

    if (guess === generatedRandomNumber) {
      guessAlertStyle("text-success h3 col-7", `${guess} was Correct!!! Congratulation
      <br><small class="text-muted " id='small'>The game will reset in 5 seconds</small>`)
      highscoreList.push(11 - numberOfAvailableGuesses)
      document.getElementById('highscore').innerHTML = highscoreList.sort(function (a, b) {
        return a - b
      });
      setTimeout(resetGame, 5000);
    }
    for (let i = 0; i < listOfGuessedNumber.length; i++) {
      if (guess === listOfGuessedNumber[i]) {
        guessAlertStyle("text-warning h2 col-7", `You guess ${guess} before`)
        document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfAvailableGuesses;
        inputBlank()
        return
      }
    }
    inputBlank()
    const remainingGuesses = document.getElementById('numberOfRemainingGuesses').innerHTML
    document.getElementById('numberOfRemainingGuesses').innerHTML = parseInt(remainingGuesses) - 1
    numberOfAvailableGuesses -= 1;
    listOfGuessedNumber.push(guess);
    document.getElementById('guessed-number').innerHTML = listOfGuessedNumber;
  }

  function resetGame() {
    numberOfAvailableGuesses = 10
    document.getElementById('numberOfRemainingGuesses').innerHTML = 10
    listOfGuessedNumber = [];
    document.getElementById('guessed-number').innerHTML = ''
    inputBlank()
    document.getElementById('userAlert').style.visibility = 'hidden'
  }
  document.getElementById('guess').addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('guess-btn').click();
    }
  })
  