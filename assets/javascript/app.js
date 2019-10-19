var intervalId;
var twoMinutes = 121;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerRunning = false;
var myQuiz = [
  {
    question: "What was Emperor Norton's first name?",
    name: "first-name",
    answers: ["John", "Joshua", "Jeremiah", "James"],
    correctAnswer: 2
  },
  {
    question: "What year was Emperor Norton Born?",
    name: "age",
    answers: ["1819", "1805", "1823", "1811"],
    correctAnswer: 1
  },
  {
    question: "What year was Emperor Norton Born?",
    name: "Ho",
    answers: ["1819", "1805", "1823", "1811"],
    correctAnswer: 1
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
  if (twoMinutes == 0) {
    stopTimer();
  }
}

//MISSING: When timer hits 0 stop the game and show the results
//--------Game begins.

function game() {
  if (!timerRunning) {
    intervalId = setInterval(countdown, 1000);
    timerRunning = true;
  }
  changeScreen1();
}

function stopTimer() {
  clearInterval(intervalId);
  timerRunning = false;
  // checkForm();
  changeScreen2();
  gradeForm();
}

// is this the best way to turn multiple things invisible?
//or should I put the code into each function where this is
// called individually?
function changeScreen1() {
  $("#btnStart")
    .removeClass("show")
    .addClass("hide");
  $("#quiz")
    .removeClass("hide")
    .addClass("show");
}

function changeScreen2() {
  $("#quiz")
    .removeClass("show")
    .addClass("hide");
  $("#results")
    .removeClass("hide")
    .addClass("show");
}

//------code to grade the game.

play();

function play() {
  for (i = 0; i < myQuiz.length; i++) {
    $(`
    <h3>${myQuiz[i].question}</h3>`).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="1">${
        myQuiz[i].answers[0]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="2">${
        myQuiz[i].answers[1]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="3">${
        myQuiz[i].answers[2]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="4">${
        myQuiz[i].answers[3]
      }</input>`
    ).appendTo(".quiz-content");
  }
}

//it knows that something has been selected, but will only check for the first question
// function gradeForm() {
//   for (var i = 0; i < myQuiz.length; i++) {
//     if ($("input:radio[name]").is(":checked")) {
//       console.log("yo");
//     } else {
//       unanswered++;
//       $(".unanswered-qs").html(`<h3>Unanswered Questions: ${unanswered} </h3>`);
//     }
//   }
// }

function gradeForm() {
  console.log("I");
}

// function gradeForm() {
//   var userGuess = $("input[value]:checked").val();
//   console.log(userGuess);
//   for (var i = 0; i < myQuiz.length; i++) {
//     if (userGuess == myQuiz.correctAnswer) {
//       correct++;
//       console.log("heeeeey ya");
//     } else if (userGuess !== myQuiz.correctAnswer) {
//       incorrect++;
//       $(".incorrect-guesses").html(`<h3>Incorrect Guesses: ${incorrect} </h3>`);
//     } else {
//       unanswered++;
//       $(".unanswered-qs").html(`<h3>Unanswered Questions: ${unanswered} </h3>`);
//     }
//   }
// }
