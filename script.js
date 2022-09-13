// function generates a random colour from amongst:
// red, green, blue, yellow, white, black
function randomColor() {
  let arrColors = [
    "#ff0000",
    "#008000",
    "#0000FF",
    "#FFFF00",
    "#FFFFFF",
    "#000000",
  ];
  let randomIndex = Math.floor(Math.random() * 6);
  return arrColors[randomIndex];
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

// function generates question circles, each given a random colour
function circleColor() {
  for (let item of arrCircles) {
    let indivQCircleColour = document.querySelector(`#${item}Q`);
    indivQCircleColour.style.backgroundColor = randomColor();
  }
}

circleColor();

// array to track which answer circles has been filled with user's input
let userInput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// countdown timer initally set to 10s
let time = 10;

// variable to refer to countdown timer
const countdownElement = document.querySelector("#countdown");

// question circles and random number initally hidden
let question = document.querySelector("#question");
question.style.visibility = "hidden";

////////////////// user clicks on reveal button ///////////////////
document.querySelector("#startButton").addEventListener("click", revealCircles);

// revealCircles function runs when user clicks 'REVEAL!'
function revealCircles() {
  // reveal countdown timer starts
  let revealInterval = setInterval(revealCountdown, 1000);
  // question circles becomes visible for 10s
  question.style.visibility = "visible";
  let randomNumber = document.querySelector("#randomNumber");
  randomNumber.innerText = Math.floor(Math.random() * 999);

  function revealCountdown() {
    countdownElement.innerHTML = `${time}`;
    time--;

    // when reveal countdown timer hits 0
    if (time < 0) {
      // to stop countdown timer once it hits 0
      clearInterval(revealInterval);

      // question circles becomes hidden
      question.style.visibility = "hidden";

      // button text change from "REVEAL!" to "START!"
      document.querySelector("#startButton").innerText = "START!";
    }
  }
  // remove event listener from button to prepare for next event listener
  document
    .querySelector("#startButton")
    .removeEventListener("click", revealCircles);

  // add event listener to button for user to start game
  document.querySelector("#startButton").addEventListener("click", startGame);
}

// startGame function runs when user clicks 'START!'
function startGame() {
  // reset countdown timer to 15s
  time = 15;
  // game countdown timer starts
  let gameInterval = setInterval(gameCountdown, 1000);

  // user can start clicking on options
  // event listeners added on option circles to take in user's choice
  document.querySelector("#oneOption").addEventListener("click", userAnswer);
  document.querySelector("#twoOption").addEventListener("click", userAnswer);
  document.querySelector("#threeOption").addEventListener("click", userAnswer);
  document.querySelector("#fourOption").addEventListener("click", userAnswer);
  document.querySelector("#fiveOption").addEventListener("click", userAnswer);
  document.querySelector("#sixOption").addEventListener("click", userAnswer);

  // when timer starts:
  // function adds in user's input
  // function updates tracking array so that next user's click updates the next answer circle
  function userAnswer(e) {
    let currentChoice = userInput.indexOf(0);

    if (currentChoice !== -1) {
      switch (e.target.id) {
        case "oneOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#ff0000";
          userInput[currentChoice] = 1;
          break;
        case "twoOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#008000";
          userInput[currentChoice] = 1;
          break;
        case "threeOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#0000FF";
          userInput[currentChoice] = 1;
          break;
        case "fourOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#FFFF00";
          userInput[currentChoice] = 1;
          break;
        case "fiveOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#FFFFFF";
          userInput[currentChoice] = 1;
          break;
        case "sixOption":
          document.querySelector(
            `#${arrCircles[currentChoice]}A`
          ).style.backgroundColor = "#000000";
          userInput[currentChoice] = 1;
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
      }

      const printScore = document.createElement("h3");
      printScore.innerText = `Your score: ${score}!`;
      document.querySelector("#score").append(printScore);
    }
  }
}
