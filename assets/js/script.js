
/*========== GLOBAL VARIABLES ==========*/
const mainPage = document.querySelector(".main__page");
const openPlaygroundBoardBtn = document.querySelector(".open__playground-btn");
const welcomeModalContainer = document.querySelector(".welcome__modal-container");
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

/*========== EVENT LISTENERS ==========*/
rulesButtons.forEach((rulesBtn) => rulesBtn.addEventListener("click", openRulesModal));
welcomeModalxMark.addEventListener("click", closeWelcomeModal);
playBtn.addEventListener("click", closeWelcomeModal);
rulesModalxMark.addEventListener("click", closeRulesModal);
openPlaygroundBoardBtn.addEventListener("click", openPlaygroundBoard);
userOptions.forEach((userOption) => userOption.addEventListener("click", playGame));
nextGameBtn.addEventListener("click", nextRound);

// Object of options and their sources
const options = {
  "fire": "assets/images/fire.svg",
  "wood": "assets/images/wood.svg",
  "water": "assets/images/water.svg",
  "metal": "assets/images/metal.svg",
  "earth": "assets/images/earth.svg"
};
// Will be used in image iteration
let imgIndex = 0;

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
window.addEventListener("click", e => {
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
// Close the modal on window click
window.addEventListener("click", e => {
  if (e.target === rulesModalContainer) {
    closeRulesModal();
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
  setTimeout(() => {
    playgroundBoard.classList.remove("hide");
    playgroundBoard.classList.add("animate__fadeIn");
    resultBoard.classList.add("hide");
  }, 750);
}

/**
 * Get user choice
 */
function getUserChoice(e) {
  let userSelected = e.target.id;
  return userSelected;
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
  const computerOptions = Object.keys(options);
  // Generate random computer choice
  let randomChoice = Math.floor(Math.random() * computerOptions.length);
  let computerChoice = computerOptions[randomChoice];
  return computerChoice;
}

/**
 * Render CPU choice
 */
function renderCpuChoice(choice) {
  cpuSelectedImg.src = options[choice];
}

/**
 * Play the game functionality. After the user makes choice, all other functions are executed within the playGame function.
 */
function playGame(e) {
  getUserChoice(e);
  let userChoice = getUserChoice(e);
  renderUserChoice(userChoice);
  let cpuChoice = getCpuChoice();
  renderCpuChoice(cpuChoice);
  openResultBoard();
}