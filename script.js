var correctAns = document.querySelector(".ans");
var greetings = document.querySelector(".greetings");
var next = document.querySelector(".next");

var score = parseInt(localStorage.getItem("score")) || 0;
var quesAnswered = parseInt(localStorage.getItem("quesAnswered")) || 0;

var correctAnsClicked=false;

var options=document.querySelectorAll(".answers div");



correctAns.addEventListener("click", function () {

    for (let i = 0; i < options.length; i++) {
        const element = options[i];
        element.classList.remove("option");
    }

    correctAns.style.backgroundColor = "green";
    greetings.classList.remove("invisible");
    next.classList.remove("invisible");
    correctAnsClicked = true;

    score += 10;
    quesAnswered++;
    localStorage.setItem("score", score);    
    localStorage.setItem("quesAnswered", quesAnswered);  
    console.log(score);
      
    if (quesAnswered === 5){

        document.querySelector(".greetings").classList.remove("display");
        setTimeout(() => {
            showScore(score);
            document.getElementById("scoreDisplay").textContent="Congratualations"
        }, 1000);
    }


    // document.getElementById("hidden").classList.add("invisible");
});

var wrongAnswers = document.querySelectorAll(".incorrect");

var wrongAnswerClicked = false;

wrongAnswers.forEach(function (wrongAns) {
    wrongAns.addEventListener("click", function () {
            
        if (correctAnsClicked) {
            wrongAnswerClicked = true;
        }

        if (!wrongAnswerClicked) {
            for (let i = 0; i < options.length; i++) {
                const element = options[i];
                element.classList.remove("option");
            }
            wrongAns.style.backgroundColor = "red";
            setTimeout(function () {
                correctAns.style.backgroundColor = "green";
            }, 1000);
            wrongAnswerClicked = true;
            setTimeout(() => {
                showScore(score)
                document.getElementById("scoreDisplay").textContent="Better luck next time"
            }, 1800);;

        }
    });
});

function showScore(score) {
    document.getElementById("scored").textContent=score;
    document.querySelector(".answers").classList.add("display")
    document.querySelector(".ques").classList.add("display");
    document.querySelector(".greetings").classList.add("display");
    document.querySelector(".nxt-btn").classList.add("display");
    correctAns.classList.add("display");
    document.querySelectorAll(".incorrect").forEach(element => {
        element.classList.add("display");
    });
    document.getElementById("scoreCard").classList.remove("invisible");
}