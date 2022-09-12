// to generate a random colour
function randomColor() {
  // red, green, blue, yellow, white, black
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

// to generate question row of coloured circles
function circleColor() {
  // to put in random color for question circles
  for (let item of arrCircles) {
    let indivQCircleColour = document.querySelector(`#${item}Q`);
    indivQCircleColour.style.backgroundColor = randomColor();
  }
}

circleColor();

let userInput = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// event listeners on the colour options to take in user's choice
document.querySelector("#oneOption").addEventListener("click", userAnswer);
document.querySelector("#twoOption").addEventListener("click", userAnswer);
document.querySelector("#threeOption").addEventListener("click", userAnswer);
document.querySelector("#fourOption").addEventListener("click", userAnswer);
document.querySelector("#fiveOption").addEventListener("click", userAnswer);
document.querySelector("#sixOption").addEventListener("click", userAnswer);

// function adds in user's input and updates that changes have been made so that next user's click updates the next input
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

// countdown timer
let time = 15;

const countdownElement = document.querySelector("#countdown");

// user click on start button to start countdown timer
document.querySelector("#startButton").addEventListener("click", function () {
  let refreshIntervalId = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    countdownElement.innerHTML = `${time}`;
    time--;

    // to stop countdown timer once it hits 0
    if (time < 0) {
      clearInterval(refreshIntervalId);
    }

    // after timer hits 0, user cannot click on anymore options, calculate total score
    if (time === 0) {
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
    }

    // match user's answers to the given question and calculate total score
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
});
