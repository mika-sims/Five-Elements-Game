# **Five Elements Game**

The Five Elements Game is an extended variation of the classic Rock Paper Scissors game that many of us have played. The game has five elements (fire, earth, metal, water, wood) for the user to choose from. Each element defeats or is defeated by another element. In the classic game, we can predict the next move of the opponents according to their mimics, but in the Five Elements game, the opponent is the computer and computer's choices are completely random. Let's see if you can beat the computer...

You can view the live site here - \*\* [Five Elements Game](https://mika-sims.github.io/Five-Elements-Game/)

<p align="center">
<img src="assets/images/five_elements_game.gif" alt="game promo gif" width="600">
</p>

# Contents

- [**User Experience UX**](#user-experience-ux)

  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
  - [Site Structure](#site-structure)
  - [Design](#design)
    - [Typography](#typography)
    - [Colour Scheme](#colour-scheme)
    - [Imagery](#imagery)
    - [Social Media Icons](#social-media-icons)
    - [Favicon](#favicon)

- [**Features**](#features)

  - [**Existing Features**](#existing-features)
    - [Preloader](#preloader)
    - [Main Page](#main-page)
    - [Modals](#modals)
    - [Playground Section](#playground-section)
    - [Result Section](#result-section)
    - [Footer](#footer)
  - [**Future Features**](#future-features)

- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)
  - [Responsiveness Testing](#responsiveness-testing)
  - [Lighthouse Tests](#lighthouse-tests)
  - [Browser Compatibility](#browser-compatibility)
- [**Bugs**](#bugs)
- [**Deployment**](#deployment)
  - [Create GitHub repository](#create-github-repository)
  - [Deploy GitHub Page](#deploy-github-page)
  - [Fork GitHub Repository](#fork-github-repository)
- [**Credits**](#credits)
- [**Acknowledgements**](#acknowledgements)

# User Experience UX

## User Stories

- As a user, I want to be able to understand the purpose of Five Elements Game from the main page.
- As a user, would like to see the title and images that give information about the content of the game.
- As a user, I would like to see how I can navigate the page with CTAs.
- As a user, I don't have to just click x-mark to close modals
- As a user, I would lik to see the rules of the game.
- As a user, I would like to see different round options available.
- As a user, I would like to see descriptive images of the choices I will make.
- As a user, I would like to be able to see the rules whenever I want while playing the game.
- As a user, I would like to see my and my opponent's scores on the scoreboard.
- As a user, I would like to see the round on the scoreboard.
- As a user, I would like to see a decisive effect when I hover over the option I want to select.
- As a user, I would like to see an effect that shows the round winner for each round played.
- As a user, I would like to see an effect that also clearly shows the draw.
- As a user, I would like to see a modal that shows the winner of the game when the game is over.
- As a user, I would like to see an option to play a new game after the game is over
- As a user, I want a default game to start even if I do not choose the total round I want to play.
- As a user, I would like to see social media icons

[Back to top](#contents)

## Wireframes

Wireframes were designed using [Balsamiq](https://balsamiq.com). Although wireframes show a very basic and simple design, a different result was obtained by modeling ideas and other sources that came to mind during the project development phase.

Wireframes design fils can be find at [Wireframes](assets/wireframes) folder.

[Back to top](#contents)

## Site Structure

Five Elements Game is a one-page website with a simple design. It provides the user with all the information about the page in simple and relatively less text. From color selection to typeface selection, everything is designed in a way that does not tire the eyes. There are no texts that require long readings. The user is shown how to use the site with short sentences and CTAs in a very simpl way.

[Back to top](#contents)

## Design

The page design has emerged as a result of a long-term research. The main design of the page was developed by modeling a challenge on the [Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH) site.

[Back to top](#contents)

- ### Typography

Two fonts are preferred to have a simple design. Fonts are imported using the googlefonts API. "Poppins" is used in the body of the page and in all CTAs, "Roboto Condensed" in all titles, and the sans-serif font family is used as the fallback of both fonts.

[Back to top](#contents)

### Colour Scheme

Body background color is a radial-gradient color consisting of the combination of colors with HEX codes #28456b and #1b1c47.

<img src="assets/design_files/body_background_color.png" width="600">

The colors of the icons have been chosen by considering the colors corresponding to these elements in nature.

<img src="assets/design_files/icons_color_code.png" width="600">

All other colors are used as indicated in the image below.

<img src="assets/design_files/color_codes_and_usage.png" width="600">

[Back to top](#contents)

### Imagery

- Game Icons

I downloaded the SVG image on [this](https://www.mosherhealth.com/mosher-health-system/chinese-medicine/yin-yang/five-elements) site that came across in the Five Element SVG search on Google and opened it with [Figma](https://www.figma.com/). After restyling the icons in Figma, I placed them on the web page. The original image is below.

<details>
<summary>See Game Icons original image</summary>
<img src="assets/design_files/icons_original_img.svg" width="600">
</details>

- Main page background image

I found this image as a result of google searches. The original image was in .jpg format. I converted this image to svg format using [this](https://convertio.co/jpg-svg/) site and then re-styled it with Figma. The original image is below.

<details>
<summary>See Main page background image</summary>
<img src="assets/design_files/body_bg_img_original.png" width="200">
</details>

- Game board background image

I designed the image with a dotted border and a star inside the circle in the background of the game board in figma and imported it as SVG.

<img src="assets/design_files/gameboard_bg.png" width="200">

[Back to top](#contents)

### Social Media Icons

Social media icons are used in Figma by importing them into Figma using the [Iconify](https://www.figma.com/community/plugin/735098390272716381/Iconify) plugin and changing their colors.

[Back to top](#contents)

### Favicon

The background image of the main page is used as the favicon of the page. The favicon images and links that can be compatible with different devices are produced using the [Real Favicon Generator](https://realfavicongenerator.net/) web site.

[Back to top](#contents)

# Features

Five Elements Game has been designed in such a way that it provides an easily understandable experience to the user. Many potential features can be added and expanded. Five Elements Game is designed to fit user experience design and accessibility practices.

[Back to top](#contents)

## Existing Features

### Preloader

Preloader is an animation in which the game icons are shown to the user at the page opening, rather than a preloader in the full sense. The "Loading..." text under the icons is also presented to the user to create the impression that the page is loading. However, taking longer than a normal preloader loading, may makes questioning whether this feature is necessary. But still, this is intended as part of the page's design rather than a page preloader.

<img src="assets/design_files/preloader.gif">

[Back to top](#contents)

### Main Page

After the preloader is fade-out, a very simple main page appears. It gives information about the page in simple and short writing and guides the user to the next section with animated CTA.

<details>
<summary>See  Main Page Image</summary>
<img src="assets/design_files/main_page.png" width="600">
</details>

[Back to top](#contents)

### Modals

There are various modals to guide and inform the user about the game.

- Greeting Modal

After clicking the LET'S START button on the main page, the greeting modal opens. The greeting modal presents the user two options. To see the rules of the game or skip to the next section to play the game right away. When the RULES button is clicked in the greeting modal, a modal with the table showing the rules opens. The greeting modal also lags behind this modal, because the button that will take the user to the next section after the rules modal is closed is in this modal.

<details>
<summary>See Greeting Modal</summary>
<img src="assets/design_files/greeting_modal.png" width="300">
</details>
<br>

[Back to top](#contents)

- Rules Modal

The rules modal presents the rules of the game in a table. The table has three columns and 11 rows. İlk satırda mağlubiyet, mağlubiyet ve bu iki başlık arasında mağlubiyetin hangi yöntemi kullandığını gösteren yer almaktadır. When the x-mark in the modal or outside the modal is clicked, the rules modal is closed. After the rules modal is closed, the greeting modal reappears. As in the rules modal, clicking the x-mark or outside of the modal in greeting modal closes the modal and moves to the next section.

<details>
<summary>See Rules Modal</summary>
<img src="assets/design_files/rules_modal.png" width="300">
</details>
<br>

[Back to top](#contents)

- Round Selection Modal

In this modal, the user is given three options for how many rounds they want to complete the game. The background of the item showing the selected number of rounds changes to a reddish color. If the PLAY button is clicked after the option is selected or without the option being selected, the playground section will be opened. If the user presses the PLAY button without choosing how many rounds to play, the game will be 3 Rounds by default. In order to close this model, it is necessary to click the PLAY button.

<details>
<summary>See Round Selection Modal</summary>
<img src="assets/design_files/rounds_selection_modal.png" width="300">
</details>
<br>

[Back to top](#contents)

- Game Winner Modal

The Game Winner modal appears automatically after the number of rounds to be played is over and shows the winner of the game with an animated text. Also, this modal prompts the user to play a new game or return to the homepage. In this modal, the user can select the number of rounds again or start a new game by clicking the x-mark in the modal or outside the modal.

<details>
<summary>See Game Winner Modal</summary>
<img src="assets/design_files/game_winner_modal.png" width="300">
</details>
<br>

[Back to top](#contents)

### Playground Section

The playground section, where the names of the icons in the game are used as the title, and under this title, the smaller versions of the icons are placed. The design of this section was inspired by the challenge on the Frontend Mentor site. Just below the icons, there is a RULES button so that the user can check it whenever needed. As with all sections, there are social media icons that lead to social media accounts at the bottom of this section.

<details>
<summary>See Game Winner Modal</summary>
<img src="assets/design_files/playground_section.png" width="300">
</details>
<br>

[Back to top](#contents)

### Result Section

The result section appears after the user has made the selection, with an animated transition and fade-out of the playground section and fade-in of the result section. The icon of the winning side is highlighted with a flash effect. If the result is a draw, the text DRAW is displayed in the same way. The winning side's score and round increase. Below the icons is the CTA that directs the user to play the next round. When the NEXT ROUND CTA is clicked, with fade-out and fade-in animation effect, the result section and the playground section are replaced.

<details>
<summary>See Game Winner Modal</summary>
<img src="assets/design_files/result_section.png" width="300">
</details>
<br>

[Back to top](#contents)

### Footer

In the footer section there are only two icons showing social media accounts. The colors are not very distinctive in order not to distract.

<details>
<summary>See Game Winner Modal</summary>
<img src="assets/design_files/footer.png" width="300">
</details>
<br>

[Back to top](#contents)

## Future Features

It is possible to improve the Five Elements Game. Below is a list of potential features that could be added.

- The game can be played online with another user.
- The ability to write a username can be added while playing with another user.
- Rather than 3-5-7 roundad options, an input option can be offered where the user enters the number of rounds
- After the selections are made, an animation can be added showing the selections fighting in the middle of the game board.
- After the user starts the game, a timer can be added that requires the user to choose within a certain time. If the user does not make a choice within this time, they lose the round.

[Back to top](#contents)

# Technologies Used

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - Provides the content and structure for the website.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Provides the styling for the website.
- [JavaScript](https://www.javascript.com/) - Provides the site interactivity and functionality.
- [Visual Studio Code](https://code.visualstudio.com/) - A standalone source code editor was used to edit and build the site.
- [GitHub](https://github.com/) - Used to create the project repository and monitor changes.
- [Git](https://git-scm.com/) - Was used as the version control system in the terminal.
- [Chrome DevTools](https://developers.google.com/web/tools) was used during the development phase of the website for debugging and responsiveness, and to test performance and accessibility on different screen sizes.
- [Google Fonts](https://fonts.google.com/) was used to determine the fonts and to import them via Google Fonts application programming interface (API) link.
- [Animate.css](https://animate.style/) - CSS animation library. It was used to perform the animations on the site.
- [Balsamiq](https://balsamiq.com/) - Was used to design the wireframes of the website.
- [Figma](https://www.figma.com/) - Used to design and edit all images.
- [Am I Responsive](https://ui.dev/amiresponsive) was used to take screenshots of the website in different screen sizes.

[Back to top](#contents)

# Testing

All code files have been verified via [W3C HTML Validator](https://validator.w3.org/), [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) and [JSHint Validator](https://jshint.com/). A few warnings were encountered in the HTML file and they were fixed immediately. Below are screenshots showing the HTML warnings and their corrected versions.

### HTML Validation

- First HTML warning
<details>
<summary>See image</summary>
<img src="assets/validation_screenshots/html_validation_1.png" width="600">
</details>
<br>

- First HTML warning (fixed)
<details>
<summary>See image</summary>
<img src="assets/validation_screenshots/html_validation_1_fixed.png" width="600">
</details>
<br>

- Second HTML warning

Lots of warnings due to slashes in `<img>` tags. After deleting the slashes all warnings disappeared.

<details>
<summary>See image</summary>
<img src="assets/validation_screenshots/html_validation_2.png" width="600">
</details>
<br>

- Second HTML warning (fixed)
<details>
<summary>See image</summary>
<img src="assets/validation_screenshots/html_validation_2_fixed.png" width="600">
</details>
<br>

### CSS Validation

There are no errors related to CSS.

<details>
<summary>See image</summary>
<img src="assets/validation_screenshots/css_validation_1.png" width="600">
</details>
<br>

### JavaScript Validation

While writing the JS code, all the errors were fixed while writing the code, as I had loaded JSHint, which is an extension of VS Code.

[Back to top](#contents)

## Responsiveness Testing

The webpage has been tested for responsiveness on multiple physical devices and through the Chrome Developer Tools, [Am I Responsive](https://ui.dev/amiresponsive?url=https://mika-sims.github.io/Five-Elements-Game/), and [Responsive Design Checker](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fmika-sims.github.io%2FFive-Elements-Game%2F&width=1400&height=700).Responsiveness tests have been tested with all devices available on the Responsive Design Checker site. No errors were found in the layout, appearance or functionality on any device. Screenshots of Am I Responsive tests are below.

<details>
<summary>See screenshots</summary>
<img src="assets/validation_screenshots/amI_esponsiveness_1.png" width="600">
<img src="assets/validation_screenshots/amI_esponsiveness_2.png" width="600">
<img src="assets/validation_screenshots/amI_esponsiveness_3.png" width="600">
<img src="assets/validation_screenshots/amI_esponsiveness_4.png" width="600">
<img src="assets/validation_screenshots/amI_esponsiveness_5.png" width="600">
<img src="assets/validation_screenshots/amI_esponsiveness_6.png" width="600">
</details>
P.S. : There was only one bug that will be mentioned in the bugs section.
<br>

[Back to top](#contents)

## Lighthouse Tests

Page was tested with Chrome Dev Tools - Lighthouse for performance, accessibility, best practices, and SEO. The site passed all the tested criteria. The reason why the performance ratio for mobile devices is a little low compared to the performance ratio of desktop devices is the high visual content on the site.

<details>
<summary>See Lighthouse test screenshot for mobile</summary>
<img src="assets/validation_screenshots/lighthouse_test_mobile.png" width="400">
</details>
<br>

<details>
<summary>See Lighthouse test screenshot for desktop</summary>
<img src="assets/validation_screenshots/lighthouse_test_desktop.png" width="400">
</details>
<br>

[Back to top](#contents)

## Browser Compatibility

The page has been tested in multiple different browsers to check for compatibility issues. Browser compatibility tests on Google Chrome, Safari, and Firefox were performed with no apparent issues with layout, appearance, or functionality.

[Back to top](#contents)

# Bugs

The application has an unresolved bug. Since the game area does not fit on the screen when the application is opened in landscape mode on mobile phones, an attempt was made to display a modal that displays a warning message when the user tries to view the application in landscape mode. However, although this warning message appeared on Android phones in manual tests, it did not appear on Apple phones.

However, in all tests made in the Google Developer Tool, a modal with a warning message was displayed. Below is the screenshot of the test made with the Developer Tool iPhone 4.

[Back to top](#contents)

<details>
<summary>See Lighthouse test screenshot for desktop</summary>
<img src="assets/validation_screenshots/warning_message.png" width="400">
</details>
<br>

- Solution suggestion

A JS library can be used to detect all devices, the browsers they use, and whether the device is used in landscape or portrait mode. Like [detect.js](https://github.com/darcyclarke/Detect.js/) or [mobile-detect.js](http://hgoebl.github.io/mobile-detect.js/).

[Back to top](#contents)

# Deployment

- ### Create GitHub Repository

VS Code, GitHub and Git were used in the deployment process of the website. To make the project live, the website was deployed to GitHub pages. The stages of the deployment took place as follows.

1. First I created a repo on GitHub called Five-Elements-Game. There are several ways to create a GitHub repo.
<details>
<summary>See screenshots of GitHub repo creation</summary>
<img src="assets/github_documentation/create_repo_01.png" width="200"><br>
<img src="assets/github_documentation/create_repo_02.png" width="200"><br>
<img src="assets/github_documentation/create_repo_03.png" width="200"><br>
<img src="assets/github_documentation/create_repo_04.png" width="200">
</details>
<br>

2. I cloned the repo using Git Bash to my computer using 'git clone' command.
<details>
<summary>See screenshots of GitHub repo cloning</summary>
<img src="assets/github_documentation/clone_repo_01.png" width="300"><br>
<img src="assets/github_documentation/clone_repo_02.png" width="300"><br>
</details>
<br>

3. I opened the repo that was cloned to my computer with VS Code.

[Back to top](#contents)

- ## Deploy GitHub Page

I used GitHub pages for the deployment of the project. To deploy a GitHub page, see the [GitHub deployment](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) documentation.

[Back to top](#contents)

- ## Fork GitHub Repository

To fork a GitHub repo, see the [Fork a GitHub repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) documentation.

[Back to top](#contents)

# Credits

- Ideas and rules about the game are taken from [this](https://sinclairinternalarts.com/five-element-theory-vs-rock-paper-scissors-lizard-spock/) site.

-The idea for the design was taken from the [Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH)'s Rock Paper Scissors challenge.

- The idea of displaying a warning message in landscape mode was inspired by the project of [Mike](https://github.com/MikeR94/CI-Project-Portfolio-2), who is also a Code Institute student.

- Subject researches related to Javascript were made from [The MDN Web Docs](https://developer.mozilla.org/en-US/).

[Back to top](#contents)

# Acknowledgements

I would like to thanks;

to Code Institute for course content,
to my mentor Precious Ijege for guiding me,
to Cuneyt Ergun, for project review,
to Alistair Cohen, for testing the game and giving feedback,

and to Code Institute's Slack community:

- Dave Horrocks
- Hiwa Awrel
- Anna Gabain
- Gerard Kelly
- Jamie King

for their comments, ideas and contributions to the development of the project.

[Back to top](#contents)
