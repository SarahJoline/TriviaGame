var intervalId;
var twoMinutes = 6;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerRunning = false;
var userGuess = [];
var myQuiz = [
  {
    question: "Who?",
    name: "Hey",
    answers: ["Me", "You", "Him", "I"],
    correctAnswer: 1
  },
  {
    question: "What?",
    name: "Ho",
    answers: ["Me", "You", "Him", "I"],
    correctAnswer: 3
  }
];

//-------------Start Button code
//Get into the habit of using $(document).ready(function() {---})

$(document).ready(function() {
  $("#btnStart").on("click", game);
  $("#btnDone").on("click", stopTimer);
});

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
  changeScreen(); //this works now
}

function stopTimer() {
  clearInterval(intervalId);
  timerRunning = false;
  // checkForm();
  gradeForm();
}

// is this the best way to turn multiple things invisible?
//or should I put the code into each function where this is
// called individually?
function changeScreen() {
  $("#btnStart")
    .removeClass("show")
    .addClass("hide");
}

//------code to grade the game.

play();

function play() {
  for (i = 0; i < myQuiz.length; i++) {
    $(`
    <h3>${myQuiz[i].question}</h3>`).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name}>${
        myQuiz[i].answers[0]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name}>${
        myQuiz[i].answers[1]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name}>${
        myQuiz[i].answers[2]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name}>${
        myQuiz[i].answers[3]
      }</input>`
    ).appendTo(".quiz-content");
  }
}
