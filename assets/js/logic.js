//attaching highscores and quiz
document.addEventListener("DOMContentLoaded", function(){
  var quizPage = document.title === "Coding Game Quiz";
  var highScore = document.title === "High Scores";

// quiz logic

  var startContainer = document.getElementById("startContainer");
  var startButton = document.getElementById("startBtn");
  var quizContainer = document.getElementById("quizContainer");
  var questionContainer = document.getElementById("questionContainer");
  var questionText = document.getElementById("questions");
  var choicesList = document.getElementById("choices");
  var timerContainer = document.getElementById("timerContainer");
  var timerElement = document.getElementById("timer");
  var gameOverContainer = document.getElementById("gameOver");
  var finalScoreElement = document.getElementById("finalScore");
  var initialsInput = document.getElementById("initials");
  var saveScoreButton = document.getElementById("saveScoreBtn");

  var currentQuestionIndex = 0;
  var timer = 100; // will start with 100 seconds
  var quizStarted = false;
  var score = 0;

  startButton.addEventListener("click", startQuiz);
  saveScoreButton.addEventListener("click", saveScore);

  function startQuiz() {
      startContainer.style.display = "none";
      quizContainer.style.display = "block";
      quizStarted = true;
      startTimer();
      displayQuestion(currentQuestionIndex);
  }

  //timer function/ time will decrease as user takes quiz
  function startTimer() {
      var timerInterval = setInterval(() => {
          if (timer > 0) {
              timer--;
              timerElement.textContent = timer;
          } else {
              clearInterval(timerInterval);
              endQuiz();
          }
      }, 1000);
  }

  function displayQuestion(index) {
      var currentQuestion = questions[index];
      questionText.textContent = currentQuestion.question;
      choicesList.innerHTML = "";

      currentQuestion.choices.forEach((choice) => {
          var choiceButton = document.createElement("button");
          choiceButton.textContent = choice;
          choiceButton.addEventListener("click", () => checkAnswer(choice, currentQuestion.correctAnswer));
          choicesList.appendChild(choiceButton);
      });
  }

  function checkAnswer(selectedAnswer, correctAnswer) {
      if (selectedAnswer === correctAnswer) {
          timer += 10; // increase timer/score for correct answer
      } else {
          timer -= 10; // decrease timer/score for incorrect answer
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
          displayQuestion(currentQuestionIndex);
      } else {
          endQuiz();
      }
  }

  //end of quiz, will end if timer runs out or if user finishes quiz
  function endQuiz() {
      quizContainer.style.display = "none";
      gameOverContainer.style.display = "block";
      score = timer; //users score = time remaining
      finalScoreElement.textContent = score;
  }

  function saveScore() {
      var initials = initialsInput.value.trim();
      if (initials) {
          // save the score and initials with the "quiz_" prefix
          var key = "quiz_" + initials;
          localStorage.setItem(key, score);
          console.log(key);
          console.log(score);
  
          document.location = './highscore.html'; // Redirects to high score page
      }
  }
  
})
