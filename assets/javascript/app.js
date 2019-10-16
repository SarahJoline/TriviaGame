// Game starts with a start button
// When start button is pressed, game begins
// timer starts (2 minute timer)
//list of questions where you can only select 1 answer.
//button at the bottom
//when button is pressed it stops the timer and tells you how many answers
//you answered correctly/incorrectly/didn't answer.
//if the player runs out the timer game ends automatically.

var timer;
var twoMinutes = 5;
var correct;
var incorrect;
var unanswered;
var timerRunning = false;

//-------------Start Button code

startGame();

function startGame() {
  $(".startBtn").html(`<button>START</button>`);

  $(".startBtn").on("click", game);
}

//-----------Timer code.

function countdown() {
  twoMinutes--;
  $(".timeLeft").html(`<h1>${twoMinutes}</h1>`);
}

//MISSING: When timer hits 0 stop the game and show the results
//--------Game begins.

function game() {
  if (!timerRunning) {
    timer = setInterval(countdown, 1000);
    timerRunning = true;
  }
}

//------code to grade the game.

finishGame();

function finishGame() {
  $(".finished").html(`<button>DONE</button>`);

  $(".finished").on("click", checkForm);
}

function checkForm() {
  if (document.getElementById("true").checked) {
    correct++;
    console.log("doing something");
  } else if (document.getElementById("false").checked) {
    incorrect++;
    console.log("getting further");
  } else {
    unanswered++;
  }
}
// if value of selected answer is equal to true correct answers +1
//if value of selected answer is equal to false - wrong answers +1
//else unanswered questions +1

// var timer;

// var twoMinutes = 120;

// gameTime();

// function countdown() {
//   twoMinutes--;
//   $(".timeLeft").html(`<h1>${twoMinutes}</h1>`);
// }
// function gameTime() {
//   timer = setInterval(countdown, 1000);
//   console.log(twoMinutes);
//   console.log(timer);
//   //example of the toggle
//   $("#welcome")
//     .removeClass("show")
//     .addClass("hide");
// }
