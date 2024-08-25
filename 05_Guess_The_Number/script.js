const userNumberInput = document.querySelector("#user-number-input");
const form = document.querySelector("form");
const randomNumber = Math.ceil(Math.random() * 100);
const hint = document.querySelector(".hint");
const previoiusGuesses = document.querySelector(".previous-guess");
const startGameButton = document.querySelector(".start-game-button");
const submitButton = document.querySelector(".submit-btn");
let userInputCount = 0;
let startButtonClickable = false;

function checkUserNumberInput(userNum) {
  console.log("random num by computer", randomNumber);
  previoiusGuesses.classList.remove("hide");
  if (userNum === randomNumber) {
    previoiusGuesses.innerText = `${previoiusGuesses.innerText} ${userNum},`; //
    hint.innerText = `You got it! Congrats`; //
    disableButtons();
  } else if (userNum > randomNumber) {
    hint.innerText = `Too high!`;
    previoiusGuesses.innerText = `${previoiusGuesses.innerText} ${userNum},`;
  } else {
    hint.innerText = `Too low!`;
    previoiusGuesses.innerText = `${previoiusGuesses.innerText} ${userNum},`;
  }
}
function disableButtons() {
  userNumberInput.disabled = true;
  userNumberInput.classList.add("no-cursor");
  submitButton.disabled = true;
  submitButton.classList.add("no-cursor");
  startGameButton.classList.remove("no-cursor");
  startGameButton.classList.add("glow-start-btn");
  startButtonClickable = true;
}
function restartGame() {
  randomNumber = Math.ceil(Math.random() * 100);
  userInputCount = 0;
  hint.innerText = "";
  previoiusGuesses.classList.add("hide");
  previoiusGuesses.innerText = `Your guesses:`;

  userNumberInput.disabled = false;
  userNumberInput.classList.remove("no-cursor");

  submitButton.disabled = false;
  submitButton.classList.remove("no-cursor");
  startGameButton.classList.add("disable-btn");
  startGameButton.classList.remove("glow-start-btn");
  startButtonClickable = false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //user guess can not be empty
  if (userNumberInput.value === "") {
    alert("Enter a Number");
    return;
  }
  ++userInputCount;
  const userGuessNumber = Number(userNumberInput.value);
  if (userInputCount <= 10) {
    userNumberInput.value = "";
    checkUserNumberInput(userGuessNumber);
  }
  if (userInputCount === 10) {
    hint.innerText = `You lost! The number was ${randomNumber}`;
    disableButtons();
    return;
  }
});

startGameButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (startButtonClickable) {
    restartGame();
  }
});

userNumberInput.focus();


