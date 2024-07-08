function guessingGame() {
  let target = Math.floor(Math.random() * 100);
  let count = 1;
  let winner = false;
  return function (guess) {
    if (winner) {
      return `The game is over, you already won!`;
    } else if (guess === target) {
      winner = true;
      return `You win! You found ${target} in ${count} guesses.`;
    } else if (guess < target) {
        count++;
        return `${guess} is too low!`
    } else {
        count++;
        return `${guess} is too high!`
    }
  };
}

module.exports = { guessingGame };
