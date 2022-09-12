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

function circleColor() {
  // to put in random color
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
  for (let item of arrCircles) {
    let test = document.querySelector(`#${item}Q`);
    test.style.backgroundColor = randomColor();
  }
}

circleColor();
