var intervalId;
var twoMinutes = 120;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timerRunning = false;
var myQuiz = [
  {
    question: "What was Emperor Norton's first name?",
    name: "first-name",
    answers: ["John", "Joshua", "Jeremiah", "James"],
    correctAnswer: 1
  },
  {
    question: "What year was Emperor Norton Born?",
    name: "age",
    answers: ["1819", "1805", "1823", "1811"],
    correctAnswer: 0
  },
  {
    question: "What did Emperor Norton declare himself the protector of?",
    name: "protector",
    answers: ["Whales", "The people", "Mexico", "Nature"],
    correctAnswer: 2
  },
  {
    question: "How did Emperor Norton lose his fortune?",
    name: "fortune",
    answers: ["Kale", "Potatoes", "Corn", "Rice"],
    correctAnswer: 3
  },
  {
    question: "What year did he declare himself Emperor?",
    name: "year",
    answers: ["1856", "1859", "1861", "1864"],
    correctAnswer: 1
  }
];

$(document).ready(function() {
  $("#btnStart").on("click", game);
  $("#btnDone").on("click", stopTimer);
});

function countdown() {
  twoMinutes--;
  $(".timeLeft").html(`<h1>${twoMinutes}</h1>`);
  if (twoMinutes == 0) {
    stopTimer();
  }
}

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
  changeScreen2();
  gradeForm();
}

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

play();

function play() {
  for (i = 0; i < myQuiz.length; i++) {
    $(`
    <h3>${myQuiz[i].question}</h3>`).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="0" >${
        myQuiz[i].answers[0]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="1" >${
        myQuiz[i].answers[1]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name=${myQuiz[i].name} value="2" >${
        myQuiz[i].answers[2]
      }</input>`
    ).appendTo(".quiz-content");
    $(
      `<input type="radio" name="${myQuiz[i].name}" value="3" >${
        myQuiz[i].answers[3]
      }</input>`
    ).appendTo(".quiz-content");
  }
}

function gradeForm() {
  for (var i = 0; i < myQuiz.length; i++) {
    var userGuess = $("input[name='" + myQuiz[i].name + "']:checked").val();

    if (userGuess) {
      if (userGuess == myQuiz[i].correctAnswer) {
        correct++;
        $(".correct-guesses").html(`<h3>Correct Guesses: ${correct} </h3>`);
      } else {
        incorrect++;
        $(".incorrect-guesses").html(
          `<h3>Incorrect Guesses: ${incorrect} </h3>`
        );
      }
    } else {
      unanswered++;
      $(".unanswered-qs").html(`<h3>Unanswered Questions: ${unanswered} </h3>`);
    }
  }
}
