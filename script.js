const inputs = document.querySelectorAll(".num-input")
const inputValues = [];
const calculation = []

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
    
    inputValues.forEach((value, subindex) => {
            inputTotal+= value
    });

    var inputAsNumber = Number(inputTotal) / 100
    /* Concatenate each object in the input array onto the string variable */

    document.getElementById("output").innerHTML = "$" + inputAsNumber.toFixed(2);

    document.getElementById("answer").innerHTML = "$" + calculation[2].toFixed(2);
}

function generateProblem(){
    calculation[0] = Math.floor(Math.random() * 10000) / 100;
    calculation[1] = Math.floor(Math.random() * 10000) / 100;
    calculation.sort(function(x,y){return y - x});
    calculation[2] = calculation[0] - calculation[1]
    document.getElementById("question1").innerHTML = calculation[0].toFixed(2) 
    document.getElementById("question2").innerHTML = "- " + calculation[1].toFixed(2);
}