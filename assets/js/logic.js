var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionScrn = document.querySelector("#questions");
var startScrn = document.querySelector("#start-screen");
// questions in my array from question.js
var indexQues = 0; 
var timeLeft = 60;
var timeInterval;
var score = 0;
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#go-back");
var viewHighscores = document.querySelector("#view-highscores");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");





// audio for correct answer
var correctAudio = new Audio("assets/sfx/correct.wav");
// audio for wrong answer
var wrongAudio = new Audio("assets/sfx/incorrect.wav");

// what happens when the start button is clicked
startBtn.addEventListener("click", function () {
    startScrn.classList.add("hide");
    questionScrn.classList.remove("hide");
    startTime();
    displayQues();
});

// timer function
function startTime ( ){
    timeInterval = setInterval(function(){
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            timer.textContent = 0;
            leaderBoard();
        }
    }, 1000);

}

// function to display questions
function displayQues (){
    questionTitle.textContent = quizQuestions[indexQues].question;
    choicesDiv.innerHTML = "";
    quizQuestions[indexQues].choices.forEach(function(choice, i){
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.onclick = answerClick;
        choicesDiv.appendChild(choiceBtn);
    });


}


// function to check if answer is correct
function answerClick (){
    if (this.value !== quizQuestions[indexQues].correctAnswer){
        timeLeft -= 5;
        timer.textContent = timeLeft;
        wrongAudio.play();
        feedback.textContent = "Wrong!";
        feedback.setAttribute("class", "feedback");
        setTimeout(function(){
            feedback.setAttribute("class", "feedback hide");
        }, 1000);
    }else{
        correctAudio.play();
        score++;
        feedback.textContent = "Correct!";
        feedback.setAttribute("class", "feedback");
        setTimeout(function(){
            feedback.setAttribute("class", "feedback hide");
        }, 1000);
    }
   

    indexQues++;

    if (indexQues < quizQuestions.length){
        displayQues();
    } else {
        endQuiz();
    }
    
}

// Function to end the quiz
function endQuiz(){
    clearInterval(timer);
    questionScrn.classList.add("hide");
    endScreen.classList.remove("hide");
    showFeedback("");
    finalScore.innerText = score;
}

// Function to show feedback after each question
function showFeedback(message){
    feedback.classList.remove('hide');
    feedback.innerText = message;
}

// Add event listener to the submit button to save user initials and score, and redirect to highscores page
submitBtn.addEventListener("click", function(){
    const userInitial = document.getElementById("initials").value;
    localStorage.setItem("initial", userInitial);
    localStorage.setItem("score", score);
    location.href = "highscores.html";
});

