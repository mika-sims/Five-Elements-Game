/*========== GLOBAL VARIABLES ==========*/
const warningMessage = document.querySelector(".warning__modal-container");
const mainPage = document.querySelector(".main__page");
const openPlaygroundBoardBtn = document.querySelector(".open__playground-btn");
const welcomeModalContainer = document.querySelector(
  ".welcome__modal-container"
);
const welcomeModal = document.querySelector(".welcome__modal");
const welcomeModalxMark = document.querySelector(".welcome__modal-x-mark");
const playBtn = document.querySelector(".play__btn");
const rulesButtons = document.querySelectorAll(".rules__btn");
const rulesModalxMark = document.querySelector(".rules__modal-x-mark");
const rulesModalContainer = document.querySelector(".rules__modal-container");
const rulesModal = document.querySelector(".rules__modal");
const mainRulesBtn = document.querySelector(".main__rules-btn");
const footer = document.querySelector(".footer");
const playgroundBoard = document.querySelector(".playground");
const scoreboard = document.querySelector(".scoreboard");
const userOptions = document.querySelectorAll(".user__option");
const resultBoard = document.querySelector(".result__board");
const nextGameBtn = document.querySelector(".next__game-btn");
const userSelectedImg = document.querySelector(".user__choice-img");
const cpuSelectedImg = document.querySelector(".cpu__choice-img");
const resultText = document.querySelector(".result__text");
const roundContainer = document.querySelector(".round__container");
const userScoreBoard = document.querySelector(".user__score");
const cpuScoreBoard = document.querySelector(".cpu__score");
const totalRoundButtons = document.querySelectorAll(".total__round-btn");
const winnerModalContainer = document.querySelector(
  ".game__winner-modal-container"
);
const winnerModal = document.querySelector(".game__winner-modal");
const winnerTextContainer = document.querySelector(".game__winner-text");
const winnerModalxMark = document.querySelector(".winner__modal-x-mark");
const startNewGameBtn = document.querySelector(".new__game-btn");
let roundCounter = 0;
let totalRound = 3;
let userScore = 0;
let cpuScore = 0;

/*========== EVENT LISTENERS ==========*/
window.addEventListener("resize", screenSizewarning);
rulesButtons.forEach((rulesBtn) =>
  rulesBtn.addEventListener("click", openRulesModal)
);
welcomeModalxMark.addEventListener("click", closeWelcomeModal);
playBtn.addEventListener("click", closeWelcomeModal);
rulesModalxMark.addEventListener("click", closeRulesModal);
openPlaygroundBoardBtn.addEventListener("click", openPlaygroundBoard);
totalRoundButtons.forEach((totalRoundBtn) =>
  totalRoundBtn.addEventListener("click", getTotalRound)
);
userOptions.forEach((userOption) =>
  userOption.addEventListener("click", playGame)
);
winnerModalxMark.addEventListener("click", closeWinnerModal);
nextGameBtn.addEventListener("click", nextRound);
startNewGameBtn.addEventListener("click", startNewGame);

// Object of options and their sources
const options = {
  fire: "assets/images/fire.svg",
  wood: "assets/images/wood.svg",
  water: "assets/images/water.svg",
  metal: "assets/images/metal.svg",
  earth: "assets/images/earth.svg",
};

/**
 * Check creen hight and show the warning message on screens less than 440px high(probably landscape mode)
 */
function screenSizewarning() {
  if (screen.availHeight < 440) {
    warningMessage.classList.remove("hide");
  }
  else {
    warningMessage.classList.add("hide");
  }
}


/* ========== PRELOADER SECTION FUNCTIONALITY ========== */
/**
 * Hide preloader after page load and remove preloader section from the DOM
 */
window.addEventListener("load", () => {
  const preloaderPage = document.querySelector(".preloader");
  setTimeout(() => {
    preloaderPage.classList.add("hide__preloader");
    setTimeout(() => {
      document.body.removeChild(preloaderPage);
    }, 1000);
    // Stop interval
    clearInterval(preloaderInterval);
  }, 4700);
});

// Will be used in image iteration
let imgIndex = 0;

/**
 * Iterate over the options images in the game while the page is loading
 */
function preloader() {
  let imgSrc = Object.values(options);
  const imgTag = document.querySelector(".preloader__img");
  imgIndex += 1;
  imgTag.src = imgSrc[imgIndex];
  if (imgIndex === imgSrc.length - 1) {
    imgIndex = 0;
  }
}
/**
 * Assign setInterval to a variable and call the preloader function inside the setInterval function to iterate every 1000 seconds.
 */
let preloaderInterval = setInterval(preloader, 1000);

/*========== OPEN AND CLOSE THE MODALS FUNCTIONALITY ==========*/

// Close welcome modal
function closeWelcomeModal() {
  welcomeModal.classList.remove("animate__fadeInRightBig");
  welcomeModal.classList.add("animate__fadeOutLeftBig");
  setTimeout(() => {
    welcomeModalContainer.classList.add("hide");
  }, 500);
}
// Close the modal on window click
window.addEventListener("click", (e) => {
  if (e.target === welcomeModalContainer) {
    closeWelcomeModal();
  }
});

// Open/Close rules modal
function openRulesModal() {
  rulesModalContainer.classList.remove("hide");
  rulesModal.classList.remove("animate__fadeOutDownBig");
  rulesModal.classList.add("animate__fadeInDownBig");
}
function closeRulesModal() {
  rulesModal.classList.remove("animate__fadeInDownBig");
  rulesModal.classList.add("animate__fadeOutDownBig");
  setTimeout(() => {
    rulesModalContainer.classList.add("hide");
  }, 400);
}
// Close the rules modal on window click
window.addEventListener("click", (e) => {
  if (e.target === rulesModalContainer) {
    closeRulesModal();
  }
});

// Close winner modal
function closeWinnerModal() {
  winnerModal.classList.add("animate__zoomOut");
  setTimeout(() => {
    winnerModalContainer.classList.add("hide");
    winnerModal.classList.remove("animate__zoomIn");
  }, 400);
  startNewGame();
}

// Close the winner modal on window click
window.addEventListener("click", (e) => {
  if (e.target === winnerModalContainer) {
    startNewGame();
  }
});

/**
 * Provide transition from main page to playground page
 */
function openPlaygroundBoard() {
  mainPage.classList.add("animate__fadeOutLeftBig");
  playgroundBoard.classList.remove("animate__zoomOut");
  playgroundBoard.classList.add("animate__zoomIn");
  scoreboard.classList.add("animate__zoomIn");
  mainRulesBtn.classList.add("animate__zoomIn");
  welcomeModal.classList.add("animate__fadeInRightBig");
  footer.classList.add("animate__fadeInUpBig");
  setTimeout(() => {
    mainPage.classList.add("hide");
    playgroundBoard.classList.remove("hide");
    scoreboard.classList.remove("hide");
    mainRulesBtn.classList.remove("hide");
    welcomeModalContainer.classList.remove("hide");
    footer.classList.remove("hide");
  }, 500);
}

/**
 * Provide transition from playground board to result board
 */
function openResultBoard() {
  playgroundBoard.classList.remove("animate__zoomIn");
  playgroundBoard.classList.remove("animate__fadeIn");
  playgroundBoard.classList.add("animate__fadeOut");
  resultBoard.classList.remove("animate__fadeOut");
  setTimeout(() => {
    playgroundBoard.classList.add("hide");
    resultBoard.classList.remove("hide");
    resultBoard.classList.add("animate__fadeIn");
  }, 500);
}

/**
 * Apart from providing the next round function, it also provides the transition from the result board to the playground board.
 */
function nextRound() {
  resultBoard.classList.remove("animate__fadeIn");
  playgroundBoard.classList.remove("animate__fadeOut");
  resultBoard.classList.add("animate__fadeOut");
  userSelectedImg.classList.remove("animate__flash");
  cpuSelectedImg.classList.remove("animate__flash");
  resultText.classList.remove("animate__flash");
  setTimeout(() => {
    playgroundBoard.classList.remove("hide");
    playgroundBoard.classList.add("animate__fadeIn");
    resultBoard.classList.add("hide");
  }, 750);
  removeDisabledAttribute();
}

/**
 * Get the total number of rounds from users input and render it
 */
function getTotalRound(e) {
  totalRound = e.target.innerHTML;
  e.target.classList.add("selected__round");
  totalRoundButtons.forEach(
    (totalRoundBtn) =>
      totalRoundBtn !== e.target &&
      totalRoundBtn.classList.remove("selected__round")
  );
  return totalRound;
}

/**
 * Get user choice
 */
function getUserChoice(e) {
  let userSelected = e.target.id;
  return userSelected;
}

/**
 * Prevent multiclick
 */

function setDisabledAttribute() {
  for (const userOption of userOptions) {
    userOption.setAttribute("disabled", "");
  }
}

/**
 * Remove disabled attribute to be able to click next round
 */

function removeDisabledAttribute() {
  for (const userOption of userOptions) {
    userOption.removeAttribute("disabled", "");
  }
}

/**
 * Render user choice
 */
function renderUserChoice(choice) {
  userSelectedImg.src = options[choice];
}

/**
 * Get CPU choice
 */
function getCpuChoice() {
  // Return an array containing the names of options
  const cpuOptions = Object.keys(options);
  // Generate random computer choice
  let randomChoice = Math.floor(Math.random() * cpuOptions.length);
  let cpuChoice = cpuOptions[randomChoice];

  return cpuChoice;
}

/**
 * Render CPU choice
 */
function renderCpuChoice(choice) {
  cpuSelectedImg.src = options[choice];
}

/**
 * Count the rounds
 */
function countRounds() {
  roundCounter += 1;
  renderRound();
  return roundCounter;
}

/**
 * Render the round
 */

function renderRound() {
  roundContainer.innerHTML = `ROUND ${roundCounter}`;
}

/**
 * Count and render scores
 */

function countScores(winner) {
  if (winner === "user") {
    userScore += 1;
    setTimeout(() => {
      userScoreBoard.innerHTML = `${userScore}`;
    }, 1500);
    return userScore;
  } else if (winner === "cpu") {
    cpuScore += 1;
    setTimeout(() => {
      cpuScoreBoard.innerHTML = `${cpuScore}`;
    }, 1500);
    return cpuScore;
  } else {
    return userScore, cpuScore;
  }
}

/**
 * Get round winner
 */
function roundWinner(user, cpu) {
  if (user === cpu) {
    return "draw";
  } else if (
    (user === "fire" && cpu === "wood") ||
    (user === "fire" && cpu === "metal")
  ) {
    return "user";
  } else if (
    (user === "wood" && cpu === "water") ||
    (user === "wood" && cpu === "earth")
  ) {
    return "user";
  } else if (
    (user === "water" && cpu === "metal") ||
    (user === "water" && cpu === "fire")
  ) {
    return "user";
  } else if (
    (user === "metal" && cpu === "earth") ||
    (user === "metal" && cpu === "wood")
  ) {
    return "user";
  } else if (
    (user === "earth" && cpu === "fire") ||
    (user === "earth" && cpu === "water")
  ) {
    return "user";
  } else {
    return "cpu";
  }
}

/**
 * Render round winner
 */
function renderRoundWinner(roundWinner) {
  if (roundWinner === "user") {
    resultText.innerHTML = "YOU WON";
    userSelectedImg.classList.add("animate__flash");
  } else if (roundWinner === "cpu") {
    resultText.innerHTML = "CPU WON";
    cpuSelectedImg.classList.add("animate__flash");
  } else if (roundWinner === "draw") {
    resultText.innerHTML = "DRAW";
    resultText.classList.add("animate__flash");
  }
}

/**
 * Play the game functionality. After the user makes choice, all other functions are executed within the playGame function.
 */
function playGame(e) {
  let userChoice = getUserChoice(e);
  setDisabledAttribute();
  let cpuChoice = getCpuChoice();
  openResultBoard();
  renderUserChoice(userChoice);
  renderCpuChoice(cpuChoice);
  let winner = roundWinner(userChoice, cpuChoice);
  renderRoundWinner(winner);
  countScores(winner);
  getGameWinner(userScore, cpuScore);
}

/**
 * Determine the winner of the game and render
 */

function getGameWinner(userScore, cpuScore) {
  if (userScore > cpuScore) {
    winnerTextContainer.innerHTML = "YOU WON THIS GAME";
  } else if (cpuScore > userScore) {
    winnerTextContainer.innerHTML = "CPU WON THIS GAME";
  } else {
    winnerTextContainer.innerHTML = "IT'S A DRAW";
  }

  finishGame();
}

/**
 * Finis the game
 */

function finishGame() {
  let rounds = countRounds();
  if (rounds == totalRound) {
    nextGameBtn.classList.add("hide");
    nextGameBtn.setAttribute("disabled", "");
    setTimeout(() => {
      winnerModal.classList.remove("animate__zoomOut");
      winnerModalContainer.classList.remove("hide");
      winnerModal.classList.add("animate__zoomIn");
    }, 2000);
  }
}

/**
 * Reset all counters and start new game
 */

function startNewGame() {
  userScore = 0;
  cpuScore = 0;
  roundCounter = 0;
  setTimeout(() => {
    nextGameBtn.classList.remove("hide");
    nextGameBtn.removeAttribute("disabled", "");
  }, 500);
  userScoreBoard.innerHTML = 0;
  cpuScoreBoard.innerHTML = 0;
  roundContainer.innerHTML = "ROUND 0";
  winnerModal.classList.add("animate__zoomOut");
  setTimeout(() => {
    winnerModalContainer.classList.add("hide");
    winnerModal.classList.remove("animate__zoomIn");
  }, 400);
  nextRound();
}
