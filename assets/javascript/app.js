// Game starts with a start button
// When start button is pressed, game begins
// timer starts (2 minute timer)
//list of questions where you can only select 1 answer.
//button at the bottom
//when button is pressed it stops the timer and tells you how many answers
//you answered correctly/incorrectly/didn't answer.
//if the player runs out the timer game ends automatically.
startGame();

function startGame() {
  $(".startBtn").html(`<button>START</button>`);
  $(".startBtn").on("click", game);
}

function placeholder() {
  $(".startBtn").on("click", game);
}

var timer;

var twoMinutes = 120;

function countdown() {
  twoMinutes--;
  $(".timeLeft").html(`<h1>${twoMinutes}</h1>`);
}

function game() {
  timer = setInterval(countdown, 1000);
  console.log(twoMinutes);
  console.log(timer);
}

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
