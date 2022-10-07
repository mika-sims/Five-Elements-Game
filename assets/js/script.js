
/*========== GLOBAL VARIABLES ==========*/
const openPlaygroundPageBtn = document.querySelector(".open__playground-btn");
const rulesButtons = document.querySelectorAll(".rules__btn");
const rulesModalxMark = document.querySelector(".rules__modal-x-mark");
const rulesModalContainer = document.querySelector(".rules__modal-container");
const rulesModal = document.querySelector(".rules__modal");

/*========== EVENT LISTENERS ==========*/

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

rulesButtons.forEach((rulesBtn) => rulesBtn.addEventListener("click", openRulesModal));

function openRulesModal() {
  rulesModalContainer.classList.remove("hide");
  rulesModal.classList.remove("animate__fadeOutDownBig");
  rulesModal.classList.add("animate__fadeInDownBig");
}

rulesModalxMark.addEventListener("click", closeRulesModal);

function closeRulesModal() {
  rulesModal.classList.remove("animate__fadeInDownBig");
  rulesModal.classList.add("animate__fadeOutDownBig");
  setTimeout(() => {
    rulesModalContainer.classList.add("hide");
  }, 400);
}

window.addEventListener("click", e => {
  if (e.target === rulesModalContainer) {
    closeRulesModal();
  }
});


/*========== PAGE TRANSITION FROM MAIN PAGE TO PLAYGROUND PAGE FUNCTIONALITY ==========*/

/**
 * Add click event to openPlaygroundPageBtn and provide transition from main page to playground page
 */
openPlaygroundPageBtn.addEventListener("click", () => {
  // Get elements from DOM
  const mainPage = document.querySelector(".main__page");
  const playgroundPage = document.querySelector(".playground");
  const scoreboard = document.querySelector(".scoreboard");
  const mainRulesBtn = document.querySelector(".main__rules-btn");
  const welcomeModalContainer = document.querySelector(".welcome__modal-container");
  const welcomeModal = document.querySelector(".welcome__modal");
  const footer = document.querySelector(".footer");

  mainPage.classList.add("animate__fadeOutLeftBig");
  playgroundPage.classList.add("animate__zoomIn");
  scoreboard.classList.add("animate__zoomIn");
  mainRulesBtn.classList.add("animate__zoomIn");
  welcomeModal.classList.add("animate__fadeInRightBig");
  footer.classList.add("animate__fadeInUpBig");
  setTimeout(() => {
    mainPage.classList.add("hide");
    playgroundPage.classList.remove("hide");
    scoreboard.classList.remove("hide");
    mainRulesBtn.classList.remove("hide");
    welcomeModalContainer.classList.remove("hide");
    footer.classList.remove("hide");
  }, 500);
});