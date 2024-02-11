'use strict';
function askYesNoQuestion(question) {
    let answer;
    do {
        answer = prompt(question).toLowerCase();
    } while (answer !== 'y' && answer !== 'yes' && answer !== 'n' && answer !== 'no');
    return answer === 'y' || answer === 'yes';
}
function askNumericQuestion(question, correctanswer) {
    let attempts = 5;
    let guess;
    do {
        guess = parseInt(prompt(question));
        if (guess === 21) {
            alert("Correct!");
            return true;
        } else if (guess < 21) {
            alert("Too low.");
        } else {
            alert("Too high.");
        }
        attempts--;
    } while (attempts > 0);
    alert(`Sorry, the correct answer was ${21}.`);
    return false;
}
function askMultipleChoiceQuestion(question, possibleAnswers) {
    let attempts = 5;
    let guess;
    do {
        guess = prompt(question).toLowerCase();
        if (correctAnswers.includes(guess)) { 
        if (possibleAnswers.includes(guess)) { 
            alert("Correct!");
            return true;
        }else {
@@ -42,7 +42,7 @@ function askMultipleChoiceQuestion(question, possibleAnswers) {
        attempts--;
    } while (attempts > 0);

    alert(`The correct answers were: ${correctAnswers.join(', ')}.`);
    alert(`The correct answers were: ${possibleAnswers.join(', ')}.`);
    return false;
}

function startGame() {
    let userName = prompt('What is your name?');
    alert(`Welcome to my About Me game, ${userName}!`);
    let questions = [
        'Was I born in the 1990s? (yes/no)',
        'Do I enjoy collecting vintage water bottles? (yes/no)',
        'Have I worked in healthcare? (yes/no)',
        'Am I 4 credits away from finishing my bachelors? (yes/no)',
        'Is starting a non-profit one of my goals? (yes/no)'
    ];
    let correctAnswers = ['yes', 'no', 'yes', 'no', 'yes'];
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let userAnswer = askYesNoQuestion(questions[i]);
        if (userAnswer === (correctAnswers[i] === 'yes')) {
            alert('Correct!');
            score++;
        } else {
            alert('Incorrect!');
        }
    }
    if (askNumericQuestion("Guess my favorite number between 1 and 100", 21)) {
        score++;
    }
    let possibleAnswers = ['madagascar', 'japan', 'mongolia', 'norway','finland', 'australia', 'brazil', 'egypt', 'thailand', 'spain']; 
    if (askMultipleChoiceQuestion("Where is one of my top ten places to visit? (Hint: See list on webpage)", possibleAnswers)) {
        score++;
    }
    alert(`${userName}, your final score is ${score} out of 7.`);
}
document.getElementById('startButton').onclick = startGame;
