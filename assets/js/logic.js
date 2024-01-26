var timer = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionScrn = document.querySelector("#questions");
var startScrn = document.querySelector("#start-screen");
// questions in my array from question.js
var indexQues = 0; 
var timeLeft = 60;
var timeInterval;
var questionTitle = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var highscores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var goBackBtn = document.querySelector("#go-back");
var viewHighscores = document.querySelector("#view-highscores");

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


// function to display name and score into highscore.js page
function leaderBoard (){

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
        feedback.textContent = "Correct!";
        feedback.setAttribute("class", "feedback");
        setTimeout(function(){
            feedback.setAttribute("class", "feedback hide");
        }, 1000);
    }
    indexQues++;
    if (indexQues === quizQuestions.length){
        leaderBoard();
    } else {
        displayQues();
    }
}



// function to display highscores
function displayHighscores (){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.forEach(function(score){
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });

}

// function to clear highscores
function clearHighscores (){
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// function to go back to start screen
function goBack (){
    window.location.reload();
}

// function to view highscores
function viewHighscores (){
    var highscores = document.querySelector("#highscores");
    highscores.classList.remove("hide");
    startScrn.classList.add("hide");
    questionScrn.classList.add("hide");
    displayHighscores();
}

// function to save highscores
function saveHighscores (){
    var initials = document.querySelector("#initials").value.trim();
    if (initials !== ""){
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newScore = {
            score: timeLeft,
            initials: initials
        };
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        window.location.href = "highscores.html";
    }
}

// event listeners for buttons
// submitBtn.addEventListener("click", saveHighscores);
// clearBtn.addEventListener("click", clearHighscores);

// goBackBtn.addEventListener("click", goBack);
// viewHighscores.addEventListener("click", viewHighscores);


// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// running the  timer is needed
// go back button
// clear highscores button
// view highscores button
// highscores page
