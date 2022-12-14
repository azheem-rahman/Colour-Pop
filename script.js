//=======================================================
//============= Initialisation Stage ====================
//=======================================================

// function generates a random colour from amongst:
function generateRandomColor() {
  let arrColors = [
    "#ff6060",
    "#fabed4",
    "#d3d3d3",
    "#cc9e48",
    "#aaffc3",
    "#ffd580",
  ];
  let randomIndex = Math.floor(Math.random() * 6);
  return arrColors[randomIndex];
}

// function generates random number 0-999
function generateRandomNumber() {
  return Math.floor(Math.random() * 999);
}

// array to refer to for prefixes
let arrCircles = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

// function generates question circles, each given a random colour and number
function circleColor() {
  for (let item of arrCircles) {
    let indivQCircleColour = document.querySelector(`#${item}Q`);
    indivQCircleColour.style.backgroundColor = generateRandomColor();
    indivQCircleColour.innerText = generateRandomNumber();
  }
}

circleColor();

// array to track which answer circles' colour has been filled with user's input
let userInputColour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// array to track which answer circles' number has been filled with user's input
let userInputNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// countdown timer initally set to 10s
let time = 30;

// variable to refer to countdown timer
const countdownElement = document.querySelector("#countdown");

// question circles initally hidden
let question = document.querySelector("#question");
question.style.visibility = "hidden";

//=======================================================
//================= Reveal Stage ========================
//=======================================================

document
  .querySelector("#startButton")
  .addEventListener("click", revealQuestion);

// revealQuestion function runs when user clicks 'REVEAL!'
function revealQuestion() {
  // reveal countdown timer starts
  let revealInterval = setInterval(revealCountdown, 1000);
  // question becomes visible for 10s
  question.style.visibility = "visible";

  function revealCountdown() {
    countdownElement.innerHTML = `${time}`;
    time--;

    // when reveal countdown timer hits 0
    if (time < 0) {
      // to stop countdown timer once it hits 0
      clearInterval(revealInterval);

      // question becomes hidden
      question.style.visibility = "hidden";

      // button text change from "REVEAL!" to "START!"
      document.querySelector("#startButton").innerText = "START!";
    }
  }
  // remove event listener from button to prepare for next event listener
  document
    .querySelector("#startButton")
    .removeEventListener("click", revealQuestion);

  // add event listener to button for user to start game
  document.querySelector("#startButton").addEventListener("click", startGame);
}

//=======================================================
//=============== Start Game Stage ======================
//=======================================================

// startGame function runs when user clicks 'START!'
function startGame() {
  // reset countdown timer to 30s
  time = 30;
  // game countdown timer starts
  let gameInterval = setInterval(gameCountdown, 1000);

  // user can start clicking on options
  // event listeners added on option circles to take in user's choice from clicking
  document.querySelector("#oneOption").addEventListener("click", userAnswer);
  document.querySelector("#twoOption").addEventListener("click", userAnswer);
  document.querySelector("#threeOption").addEventListener("click", userAnswer);
  document.querySelector("#fourOption").addEventListener("click", userAnswer);
  document.querySelector("#fiveOption").addEventListener("click", userAnswer);
  document.querySelector("#sixOption").addEventListener("click", userAnswer);

  // user can start typing and press enter for answer circles to take in number
  let numInput = document.querySelector("#userNumInput");
  numInput.addEventListener("keyup", userPressEnterNum);
  function userPressEnterNum(e) {
    e.preventDefault();
    // user types in number > press Enter > take in input
    if (e.code === "Enter") {
      let currentNumberChoice = userInputNumber.indexOf(0);
      // find the answer circles which have not been updated with user's number
      if (currentNumberChoice !== -1) {
        // add in text in answer circle with user's number
        document.querySelector(
          `#${arrCircles[currentNumberChoice]}A`
        ).innerText = parseInt(numInput.value);
        // update array tracking which answer circles have been updated with user's number
        userInputNumber[currentNumberChoice] = 1;
      }

      // clear input field after user press Enter
      numInput.value = "";
    }
  }

  // when timer starts:
  // function adds in user's input
  // function updates tracking array so that next user's click updates the next answer circle
  function userAnswer(e) {
    let currentColourChoice = userInputColour.indexOf(0);

    if (currentColourChoice !== -1) {
      switch (e.target.id) {
        case "oneOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#ff6060";
          userInputColour[currentColourChoice] = 1;
          break;
        case "twoOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#fabed4";
          userInputColour[currentColourChoice] = 1;
          break;
        case "threeOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#d3d3d3";
          userInputColour[currentColourChoice] = 1;
          break;
        case "fourOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#cc9e48";
          userInputColour[currentColourChoice] = 1;
          break;
        case "fiveOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#aaffc3";
          userInputColour[currentColourChoice] = 1;
          break;
        case "sixOption":
          document.querySelector(
            `#${arrCircles[currentColourChoice]}A`
          ).style.backgroundColor = "#ffd580";
          userInputColour[currentColourChoice] = 1;
          break;
      }
    }
  }

  function gameCountdown() {
    countdownElement.innerHTML = `${time}`;
    time--;

    // when countdown timer hits 0:
    if (time < 0) {
      // stop countdown timer
      clearInterval(gameInterval);

      // question circles becomes visible
      question.style.visibility = "visible";

      // after timer hits 0, user cannot click on anything anymore
      document
        .querySelector("#oneOption")
        .removeEventListener("click", userAnswer);
      document
        .querySelector("#twoOption")
        .removeEventListener("click", userAnswer);
      document
        .querySelector("#threeOption")
        .removeEventListener("click", userAnswer);
      document
        .querySelector("#fourOption")
        .removeEventListener("click", userAnswer);
      document
        .querySelector("#fiveOption")
        .removeEventListener("click", userAnswer);
      document
        .querySelector("#sixOption")
        .removeEventListener("click", userAnswer);

      countScore();

      document
        .querySelector("#startButton")
        .removeEventListener("click", startGame);

      numInput.removeEventListener("keyup", userPressEnterNum);
    }

    // match user's answers to the given question, calculate, and display total score
    function countScore() {
      let score = 0;

      for (let i = 0; i < 10; i++) {
        if (
          document.querySelector(`#${arrCircles[i]}A`).style.backgroundColor ===
          document.querySelector(`#${arrCircles[i]}Q`).style.backgroundColor
        ) {
          score++;
        }
        if (
          document.querySelector(`#${arrCircles[i]}A`).innerText ===
          document.querySelector(`#${arrCircles[i]}Q`).innerText
        ) {
          score++;
        }
      }

      const printScore = document.createElement("h3");
      printScore.innerText = `Your score: ${score}/20!`;
      document.querySelector("#score").append(printScore);
    }
  }
}
