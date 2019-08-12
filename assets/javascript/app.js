// count down timer for each question.
var timeRemaining = 7;
var countDown;
var currentDiv = 0;
var correctGuesses = 0;
var incorrectGuesses = 0;
var unanswered = 0;

// time count down function
function finalCountDown(){
    timeRemaining = 7;
    countDown = setInterval(function (){
        timeRemaining--
        $('#time-slot').text(timeRemaining)
        if(timeRemaining === 0){
            timesUp();
        }
    }, 1000)
} 

// time reset function 
function resetCountDown() {
    timeRemaining = 7;
    $('#time-slot').text(timeRemaining)
    clearInterval(countDown)
}

// if time runs out, run timeOut function
function timesUp (){
    if(timeRemaining === 0){
        // alert user they got the answer correctly.
        alert('You ran out of time!')
        // apply incorrect/correct-answer-display classes so they are styled.
        $('.incorrect-answer').addClass('incorrect-answer-display')
        $('.correct-answer').addClass('correct-answer-display')
        // show answers for 4 seconds, then remove previous classes
        setTimeout(() => {
            $('.incorrect-answer').removeClass('incorrect-answer-display')
            $('.correct-answer').removeClass('correct-answer-display')
        }, 4 * 1000);
    }
    resetCountDown()
    unanswered++
    currentDiv++
    nextQuestion()
}

// to start the game, press the button to display first question
$('#start-btn').click(function(){
    // hide the start button
    $('#start-btn').addClass("hide")
    // hide the info
    $('#info').addClass("hide")
    // add "active" class to the first question.
    $('#question-1').removeClass("hide")
    // begin timer
    finalCountDown()
});

// reset button
$('#reset-btn').click(function(){
    currentDiv = 1;
    correctGuesses = 0;
    incorrectGuesses = 0;
    unanswered = 0;
    // hide the start button
    $('.questions').addClass("hide")
    // add "active" class to the first question.
    $('#question-1').removeClass("hide")
    // hide game-over screen
    $('.game-over').addClass('hide')
    // begin timer
    finalCountDown()
});

// click on the answer. 
$('li').click(function(){
    var clicked = this.className
    if(clicked === 'incorrect-answer'){
        incorrectAnswer();
    } else if(clicked === 'correct-answer'){
        correctAnswer();
    } 
});

// If the li clicked is incorrect, run incorrect function
function incorrectAnswer (){
    // alert user they got the answer incorrectly.
    alert('Wrong answer!')
    resetCountDown();
    // apply incorrect/correct-answer-display classes so they are styled.
    $('.incorrect-answer').addClass('incorrect-answer-display')
    $('.correct-answer').addClass('correct-answer-display')
    // show answers for 4 seconds, then remove previous classes
    setTimeout(() => {
        $('.incorrect-answer').removeClass('incorrect-answer-display')
        $('.correct-answer').removeClass('correct-answer-display')
    }, 4000);
    currentDiv++
    incorrectGuesses++
    nextQuestion()
}

// if the li clicked is correct, run correct function
function correctAnswer (){
    // alert user they got the answer correctly.
    alert('Correct answer!')
    resetCountDown();
    // apply incorrect/correct-answer-display classes so they are styled.
    $('.incorrect-answer').addClass('incorrect-answer-display')
    $('.correct-answer').addClass('correct-answer-display')
    // show answers for 4 seconds, then remove previous classes
    setTimeout(() => {
        $('.incorrect-answer').removeClass('incorrect-answer-display')
        $('.correct-answer').removeClass('correct-answer-display')
    }, 4000); 
    currentDiv++
    correctGuesses++
    nextQuestion()
}

function nextQuestion() {
    if(currentDiv === 0){
        $('.questions').addClass('hide') 
    } else if(currentDiv === 1){
        setTimeout(() => {
            finalCountDown() 
            $('.questions').addClass('hide') 
            $('#question-2').removeClass('hide') 
        }, 4000)
    } else if (currentDiv === 2){
        setTimeout(() => {
            finalCountDown() 
            $('.questions').addClass('hide')
            $('#question-3').removeClass('hide')
        }, 4000)
    } else if (currentDiv === 3){
        setTimeout(() => {
            finalCountDown() 
            $('#question-3').addClass('hide')
            $('#question-4').removeClass('hide')
        }, 4000)
    } else if (currentDiv === 4){
        setTimeout(() => {
            finalCountDown() 
            $('#question-4').addClass('hide')
            $('#question-5').removeClass('hide')
        }, 4000)
    } else if (currentDiv === 5){
        setTimeout(() => {
            finalCountDown() 
            $('#question-5').addClass('hide')
            $('#question-6').removeClass('hide')
        }, 4000)
    } else if (currentDiv === 6){
        setTimeout(() => {
            finalCountDown() 
            $('#question-6').addClass('hide')
            $('#question-7').removeClass('hide')
        }, 4000)
    } else if (currentDiv === 7){
        $('#question-7').addClass('hide')
        $('.game-over').removeClass('hide')
        $('#correct-end').text(correctGuesses)
        $('#incorrect-end').text(incorrectGuesses)
        $('#unanswered-end').text(unanswered)
    }
}




