var startBtnEl = document.querySelector('#start-btn');
var quizEl = document.querySelector('.quiz');
var idInput= document.querySelector('#score_submit');
var welcomeEl = document.querySelector('.start-section');
var trueWrongEl = document.querySelector('.question-status');
var quesEl = document.querySelector('.que_text');
var scoreEl = document.querySelector('.score');
var submitBtnEl=document.querySelector('.submit');
var highScoreEl=document.querySelector('.highscore');
var answerEl= document.querySelector('.answers');
var viewHscoreEl = document.querySelector('#highscore');
var playerScoreEl = document.querySelector('#player_name');
var pointEl = document.querySelector('#point');
var submitPointEl = document.querySelector('#point_score');
var questions = [
    {
        no: 1,
        question: 'Commonly Used Data Types Do NOT include __:',
        answer: '3.alerts',
        options: [
            '1.strings',
            '2.booleans',
            '3.alerts',
            '4.numbers'
        ]
    },
    {
        no: 2,
        question: 'The condition in an if statement enclosed within __',
        answer: '2.curly brackets',
        options: [
            '1.quotes',
            '2.curly brackets',
            '3.parantheses',
            '4.square'
        ]
    },
    {
        no: 3,
        question: 'Arrays in JavaScript can be used to store __:',
        answer: '4.all of the above',
        options: [
            '1. numbers and strings',
            '2.other arrays',
            '3.booleans',
            '4.all of the above'
        ]
    },
    {
        no: 4,
        question: 'String values must be enclosed within __ when being assigned to variables.',
        answer: '3.quotes',
        options: [
            '1.commas',
            '2.curly brackets',
            '3.quotes',
            '4.parantheses'
        ]
    },
    {
        no: 5,
        question: 'Avery useful tool used during development  and debugging for printing content to the debugger is:',
        answer: '4.console.log',
        options: [
            '1.JavaScript',
            '2.terminal/bash',
            '3.for loops',
            '4.console.log'
        ]
    },
    {
        no: 5,
        question: 'Avery useful tool used during development  and debugging for printing content to the debugger is:',
        answer: '4.console.log',
        options: [
            '1.JavaScript',
            '2.terminal/bash',
            '3.for loops',
            '4.console.log'
        ]
    }
]

viewHscoreEl.onclick=highScoreCheck;
function highScoreCheck(){
    welcomeEl.style.display = 'none';
    highScoreEl.style.display = 'block';
    quizEl.style.display='none';
    scoreEl.style.display='none';
}


answerEl.onclick=questionCheck;

var i=0;
var userScore=0;
function questionCheck(event) {
    i++;
    getQuestions(i);
    
   var chosen_answ =  event.target.innerText;
    switch (chosen_answ) {
        case '3.alerts':
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='true';
            trueWrongEl.classList.add('correct');
            userScore += 10;
            break;
        case '2.curly brackets':
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='true';
            trueWrongEl.classList.add('correct');
            userScore += 10;
            break;
        case '4.all of the above':
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='true';
            trueWrongEl.classList.add('correct');
            userScore += 10;
            break;
        case '3.quotes':
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='true';
            trueWrongEl.classList.add('correct');
            userScore += 10;
            break;
        case '4.console.log':
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='true';
            trueWrongEl.classList.add('correct');
            userScore += 10;
            break;
            default:
            trueWrongEl.style.display='block';
            trueWrongEl.textContent='wrong';
            trueWrongEl.classList.add('wrong');
            trueWrongEl.classList.remove('correct');   
     }
            pointEl.innerHTML=userScore;
            submitPointEl.innerHTML=userScore;
}
   


var startFunc = function () {
    welcomeEl.style.display = 'none';
    trueWrongEl.style.display = 'none';
    quizEl.style.display = 'block';
    var seconds = document.getElementById('count').textContent;
    var countdown = setInterval(function () {
        seconds--;
        document.getElementById('count').textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
            quizEl.style.display = 'none';
            scoreEl.style.display = 'block';
        }
    },
        1000);
        getQuestions(i);
}




function submitScoreBtn() {
    scoreEl.style.display = 'none';
    var score_submit = document.querySelector('#score_submit').value;
    if 
    (score_submit ===''){
    alert('error');
    scoreEl.style.display = 'block';
    }else {
    alert('success');
    highScoreEl.style.display = 'block';
    localStorage.setItem('score_submit',score_submit);
    localStorage.setItem('point_score',userScore);
    var local_submit = localStorage.getItem('score_submit');
    var point_score = localStorage.getItem('point_score');
    submitPointEl.innerHTML=point_score;
    playerScoreEl.innerHTML=local_submit;

    console.log(local_submit);
    console.log(point_score);
    
    
    }
}

  


var getQuestions = function (i) {
    
    console.log(questions[i].question);
    var que_text = document.querySelector('.que_text');
    var answer_text = document.querySelector('.answers');
    var que_tag = '<div class="que_text"><span>'+questions[i].question+'</span></div>';
    var answer_tag = '<span>'+ questions[i].options[0]+ '</span>'
                    +'<span>'+ questions[i].options[1]+ '</span>'
                    +'<span>'+ questions[i].options[2]+ '</span>'
                    +'<span>'+ questions[i].options[3]+ '</span>';
    que_text.innerHTML = que_tag;
    answer_text.innerHTML=answer_tag;
}






startBtnEl.addEventListener('click', startFunc);
submitBtnEl.addEventListener('click',submitScoreBtn);


