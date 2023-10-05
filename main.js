const storageDisplay = document.querySelector(".storageDisplay");
const currentDisplay = document.querySelector(".currentDisplay");
const numberButtons = document.querySelectorAll(".button.number");
const operatorButtons = document.querySelectorAll(".button.operator");
const equalButton = document.querySelector(".button#equal");
const clearButton = document.querySelector(".bigButton#clearButton");
const deleteButton = document.querySelector(".bigButton#deleteButton");

let number1;
let number2;
let currentOperation = null;
let shouldResetScreen = false;

numberButtons.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)));
operatorButtons.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));
equalButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clearDisplay);
deleteButton.addEventListener('click', deleteNumber);

function operate(number1, number2, currentOperation) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    switch(currentOperation) {
        case "+":
            return number1 + number2;
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
    number1 = "";
    number2 = "";
    currentOperation = null;
}

function setOperation(operator) {
    if(currentOperation !== null) evaluate();
    number1 = currentDisplay.textContent;
    currentOperation = operator;
    storageDisplay.textContent = `${number1} ${operator}`;
    shouldResetScreen = true;
}

function evaluate() {
    if(currentOperation === null || shouldResetScreen) return;
    number2 = currentDisplay.textContent;
    currentDisplay.textContent = operate(number1, number2, currentOperation);
    storageDisplay.textContent = `${number1} ${currentOperation} ${number2} =`
    currentOperation = null;
}

function appendNumber(number) {
    if(currentDisplay.textContent === "0" || shouldResetScreen) {
        currentDisplay.textContent = "";
        shouldResetScreen = false;
    } 
    currentDisplay.textContent += number;
}

function deleteNumber() {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, currentDisplay.textContent.length - 1);
}