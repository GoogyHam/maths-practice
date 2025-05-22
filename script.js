const inputs = document.querySelectorAll(".num-input")
const inputValues = [];
const calculation = [];
let problemAnswer = 0;

let questionsGiven = 0;
let scoreTotal = 0;

let tabPosition = 1;

let quizStart = 0;

let fullStartTime = 0;

document.getElementById("mainButton").addEventListener("click", generateProblem)

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("mainButton").click()
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();
        tabPosition += 1;
        if (tabPosition > 4) {
            tabPosition = 1;
        }
        document.getElementById("test").innerHTML = tabPosition;
        tabNavigator();
    }

    if (event.key === "ArrowRight") {
        event.preventDefault();
        tabPosition -= 1;
        if (tabPosition < 1) {
            tabPosition = 4;
        }
        tabNavigator();
    }

});

document.getElementById("lastTab").addEventListener("focus", function(){
    document.getElementById("firstTab").focus();
});



document.getElementById("mainButton").innerHTML = "Begin [Enter]";

tabNavigator()

function takeInputs(){

    inputs.forEach((input, index) => {
        inputValues[index] = input.value; 
    });
    /* Add the inputs from each cell into an array */
    let inputTotal = "";

    /* Create a blank string variable*/
    
    inputValues.forEach((value, index) => {
            inputTotal += value
    });

    var inputAsNumber = Number(inputTotal) / 100
    /* Concatenate each object in the input array onto the string variable */

    inputs.forEach((input, index) =>{
        input.value = ""
    });
    document.getElementById("output").innerHTML = "$" + inputAsNumber.toFixed(2);

    document.getElementById("answer").innerHTML = "$" + problemAnswer.toFixed(2);

    document.getElementById("test").innerHTML = inputAsNumber + "," + problemAnswer

    questionsGiven += 1;

    if (inputAsNumber === problemAnswer) {
        document.getElementById("response").innerHTML = "Correct";
        scoreTotal += 1;
        document.getElementById("questionField").style.backgroundColor = "green";
    } else {
        document.getElementById("response").innerHTML = "Incorrect";
        document.getElementById("questionField").style.backgroundColor = "red";
    }

    document.getElementById("scorecard").innerHTML = scoreTotal + " / " + questionsGiven

    document.getElementById("mainButton").removeEventListener("click",takeInputs)
    document.getElementById("mainButton").addEventListener("click",generateProblem)
    document.getElementById("mainButton").innerHTML = "New Question"

}

function generateProblem(){


    if (quizStart === 0){

        fullStartTime = new Date().getTime();
        
        document.getElementById("timer").innerHTML = fullStartTime;

        // var timerInterval = setInterval(tick, 1000);

        quizStart = 1;

    };

    var localStartTime = new Date().getTime();

    clockUpdate();

    calculation[0] = Math.floor(Math.random() * 10000) / 100;
    calculation[1] = Math.floor(Math.random() * 10000) / 100;

    calculation.sort(function(x,y){return y - x});

    problemAnswer = Math.round((calculation[0] - calculation[1]) * 100) / 100;

    document.getElementById("question1").innerHTML = calculation[0].toFixed(2); 
    document.getElementById("question2").innerHTML = "- " + calculation[1].toFixed(2);

    document.getElementById("test").innerHTML = calculation + "," + (scoreTotal/ questionsGiven) * 100 + "%";

    document.getElementById("mainButton").removeEventListener("click",generateProblem)
    document.getElementById("mainButton").addEventListener("click",takeInputs)
    document.getElementById("mainButton").innerHTML = "Submit Answer"

    document.getElementById("questionField").style.backgroundColor = "white";
}

function tabNavigator(){
    document.querySelector("div.answerEntry input[tabindex='" + tabPosition + "']").focus()
}

function clockUpdate() {
    document.getElementById("timer").innerHTML = fullStartTime;
}