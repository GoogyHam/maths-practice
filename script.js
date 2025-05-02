const inputs = document.querySelectorAll(".num-input")
const inputValues = [];
const calculation = [];
let problemAnswer = 0;

document.getElementById("submitAnswerButton").addEventListener("click", takeInputs)

document.getElementById("submitAnswerButton").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitAnswerButton").click()
    }
});

generateProblem()

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

    if (inputAsNumber === problemAnswer) {
        document.getElementById("response").innerHTML = "TRUKE"
    } else {
        document.getElementById("response").innerHTML = "LIE NUKE"
    }

}

function generateProblem(){
    calculation[0] = Math.floor(Math.random() * 10000) / 100;
    calculation[1] = Math.floor(Math.random() * 10000) / 100;

    calculation.sort(function(x,y){return y - x});

    problemAnswer = Math.round((calculation[0] - calculation[1]) * 100) / 100;

    document.getElementById("question1").innerHTML = calculation[0].toFixed(2); 
    document.getElementById("question2").innerHTML = "- " + calculation[1].toFixed(2);

    document.getElementById("test").innerHTML = calculation
}