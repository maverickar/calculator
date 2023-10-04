const storageDisplay = document.querySelector(".storageDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalButton = document.querySelector(".button#equal");
const clearButton = document.querySelector(".bigButton#clearButton");

let number1;
let number2;
let operator;
let result = 0;

numberButtons.forEach((button) => {
    button.addEventListener('click', storeFirstValue);
    button.addEventListener('click', updateCurrentDisplay);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', getOperator);
    button.addEventListener('click', updateStorageDisplay);
});

equalButton.addEventListener('click', operate);
clearButton.addEventListener('click', clearDisplay);

function operate() {
    switch(operator) {
        case "+":
            result = number1 + number2;
            currentDisplay.textContent = `${result}`;
        case "-":
            return number1 - number2;
        case "x":
            return number1 * number2;
        case "÷":
            return number1 / number2;
    } 
}

function clearDisplay() {
    storageDisplay.textContent = "";
    currentDisplay.textContent = "0";
}

function storeFirstValue(button) {
    if(number1 === undefined) {
        number1 = parseInt(button.target.id);
    } else {
        number1 += button.target.id;
    }
}

function getOperator(button) {
    operator = button.target.id;
}

function updateStorageDisplay() {
    storageDisplay.textContent = `${parseInt(number1)} ${operator}`;
}

function updateCurrentDisplay(button) {
    if(currentDisplay.textContent === "0") {
        currentDisplay.textContent = `${button.target.id}`;
    } else {
        currentDisplay.textContent += `${button.target.id}`;
    }
}