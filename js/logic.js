// logic:timer & button

var timeLeft = document.getElementById("timerunningOut"); 
var startButton = document.getElementById("startButton"); 

var timer = question.length * 60 ; // each question has a set timer of 60's 

function timeShown() {  
    timeLeft.textContent  = timer;  // declaring the timer function 
}

startButton.addEventListener("Click", function (event)  { 
    event.preventDefault(); 
     var timerCount = setInterval (function () {
            timeShown(); 
            timer--; 
         },  1000);  

    
}); 
