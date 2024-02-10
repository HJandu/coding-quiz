# <p align="center"><ins>Coding Quiz</ins></p>

<p align="center">
  <img width="100%" height="400" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/main_page.jpg">
</p>

## Deployment
### Do you think you are brave enough to take the quiz? If so, then click [here](https://hjandu.github.io/coding-quiz/).
<br> 
<br>

## Background

As I proceed in my journey to becoming a front-end web developer, it’s likely that I will be asked to complete a coding assessment, perhaps as part of an interview process. A typical coding assessment is a combination of multiple-choice questions and interactive coding challenges. 

To help me become familiar with these tests and give me a chance to apply the skills, I have built a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that I have written. It has a clean, polished, and responsive user interface. The timed quiz stores the high scores details, so that anyone can gauge their progress compared to their peers.


## Features

The coding quiz features the following:

 * A start button that when clicked (see above image), a timer starts and the first question appears.
 
  * Questions contain buttons for each answer.
    ![Screenshot 2024-02-10 194628](https://github.com/HJandu/coding-quiz/assets/116304118/d237c98c-5543-4f16-80b8-51120ee5dbc2)

    
  * When the answer is clicked, the next question appears.<br>

  <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/correct_ans.jpg">
 
    
  * If the answer clicked is incorrect then 10 minuntes are subtracted from the clock.
    
  <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/wrong_ans.jpg">

    
  * You will hear different sounds depending on whether your answer is right or wrong.
 
  <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/sound_files.jpg">


  * The quiz ends when all questions are answered or the timer reaches 0.

  * When the game ends, it displays your score and gives you the ability to save your name and your score.

![image](https://github.com/HJandu/coding-quiz/assets/116304118/e7e6f17d-e6be-4670-95d0-4b28b921b6ad)

* Name or initials and score is saved in local storage as an array.
  
 <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/score_localstorage.jpg">

 <img width="90%" height="50" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/score_json.jpg">

 * Top 5 highest scores can be viewed.

 <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/display_highscore.jpg">

 * You have the option to clear the high scores board. However, before the scores are cleared, the user is asked if they are sure they would like to clear the scores.

 <img width="90%" height="300" src="https://github.com/HJandu/coding-quiz/blob/main/assets/images/clear_prompt.jpg">

## License
Licensed by MIT License. &copy;Hardip Jandu
