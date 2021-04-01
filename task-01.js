const btnStart = document.querySelector(".btn__start");
const btnStop = document.querySelector(".btn__stop");
const body = document.querySelector("body");
btnStart.addEventListener("click", changeBgColor);
btnStop.addEventListener("click", stopChangeBgColor);
const colors = [
  "red",
  "green",
  "violet",
  "gray",
  "blue",
  "yellow",
  "magenta",
  "pink",
  "brown",
];
let changeBgColorAction = "start";
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function changeBgColor() {
  changeBgColorAction = "start";
  btnStart.setAttribute("disabled", "disabled");
  let intervalId = setInterval(() => {
    if (changeBgColorAction === "stop") {
      clearInterval(intervalId);
    } else {
      let num = randomIntegerFromInterval(0, colors.length - 1);
      body.style = `background-color: ${colors[num]}`;
    }
  }, 1000);
}
function stopChangeBgColor() {
  changeBgColorAction = "stop";
  btnStart.removeAttribute("disabled");
}
