var clearBtn = document.querySelector("#clearBtn");

// function to display the last 5 highscores from local storage on the highscores page in descending order
function displayHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores"));
    highScores.sort(function (a, b) {
        return b.score - a.score
    });
    console.log(highScores);
    highScores.splice(5);
    // append high scores from local storage to the high scores page
    const highScoresE1 = document.getElementById("highScores");
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        highScoresE1.appendChild(li);
    }
}

displayHighScores();

// // function to clear high scores from local storage
// function clearHighScores(){
//     window.localStorage.removeItem("highScores");
//     window.location.reload();
// }
//