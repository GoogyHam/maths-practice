const inputs = document.querySelectorAll(".num-input")
const inputValues = [];

document.getElementById("submitAnswerButton").addEventListener("click", takeInputs)

document.getElementById("submitAnswerButton").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitAnswerButton").click()
    }
});

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
}
