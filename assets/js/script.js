
/*========== GLOBAL VARIABLES ==========*/

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