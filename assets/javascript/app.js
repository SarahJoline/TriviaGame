// Game starts with a start button
// When start button is pressed, game begins
// timer starts (2 minute timer)
//list of questions where you can only select 1 answer.
//button at the bottom
//when button is pressed it stops the timer and tells you how many answers
//you answered correctly/incorrectly/didn't answer.
//if the player runs out the timer game ends automatically.
var intervalId;
var twoMinutes = 6;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerRunning = false;

//-------------Start Button code
//Get into the habit of using $(document).ready(function() {---})

$(document).ready(function() {
  $("#btnStart").on("click", game);
  $("#btnDone").on("click", stopTimer);
});

// function game2() {
//   setTimeout(checkForm(), 1000 * 10);
//   console.log("hey");
// }

//-----------Timer code.

function countdown() {
  twoMinutes--;
  $(".timeLeft").html(`<h1>${twoMinutes}</h1>`);
}

//MISSING: When timer hits 0 stop the game and show the results
//--------Game begins.

function game() {
  if (!timerRunning) {
    intervalId = setInterval(countdown, 1000);
    timerRunning = true;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  timerRunning = false;
  checkForm();
}

// //------code to grade the game.

// finishGame();

// function finishGame() {
//   $("#btnDone").on("click", stopTimer);
// }

// if (document.getElementByClass(".finished").clicked) {
//   stopTimer();
//   checkForm();
// } else if (timer == 0) {
//   checkForm();
// }

function checkForm() {
  if (document.getElementById("true").checked) {
    correct++;
    $(".correct-guesses").html(`<h3>Correct Guesses: ${correct} </h3>`);
  } else if (document.getElementById("false").checked) {
    incorrect++;
    $(".incorrect-guesses").html(`<h3>Incorrect Guesses: ${incorrect} </h3>`);
  } else {
    unanswered++;
    $(".unanswered-qs").html(`<h3>Unanswered Questions: ${unanswered} </h3>`);
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

// document.getElementById("#btnDone").addEventListener("click", checkForm);
// document.getElementById("#btnDone").addEventListener("click", stopTimer);
//timer = setTimeout("checkForm()", 1000);
