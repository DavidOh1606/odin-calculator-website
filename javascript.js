
const NUM_DECIMALS = 10;

let firstTerm = null;
let operator = null;
let secondTerm = null;

const error = document.querySelector(".error");
const firstTermText = document.querySelector(".first-term");
const operatorText = document.querySelector(".operator-term");
const secondTermText = document.querySelector(".second-term");

const numberButtons = document.querySelector(".container-numbers");
const operatorButtons = document.querySelector(".container-operators");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector("#clear");

numberButtons.addEventListener("click", selectNumber);
operatorButtons.addEventListener("click", selectOperator);
equalsButton.addEventListener("click", operate);
clearButton.addEventListener("click", clear);


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        error.innerText = "Can't divide by 0";
        return null;
    }

    return a / b;
}

function operate() {
    if (firstTerm === null || operator === null || secondTerm === null) return;

    let result;
    if (operator === "+") {
        result = add(firstTerm, secondTerm);
    }

    else if (operator === "-") {
        result = subtract(firstTerm, secondTerm);
    }

    else if (operator === "*") {
        result = multiply(firstTerm, secondTerm);
    }

    else if (operator === "/") {
        result = divide(firstTerm, secondTerm);
    }

    result = Number(result.toFixed(NUM_DECIMALS));

    firstTerm = result;
    operator = null;
    secondTerm = null;

    firstTermText.innerText = firstTerm;
    operatorText.innerText = "";
    secondTermText.innerText = "";
}

function selectNumber(e) {
    if (!e.target.classList.contains("number")) return;

    if (error.innerText != "") error.innerText = "";

    if (firstTerm === null || operator === null) {
        firstTerm = Number(e.target.innerText);
        firstTermText.innerText = firstTerm;
    }

    else {
        secondTerm = Number(e.target.innerText);
        secondTermText.innerText = secondTerm;
    }
}

function selectOperator(e) {

    if (!e.target.classList.contains("operator")) return;

    if (error.innerText != "") error.innerText = "";

    operator = e.target.innerText;
    operatorText.innerText = operator;
}

function clear() {
    firstTerm = null;
    operator = null;
    secondTerm = null;

    firstTermText.innerText = "";
    secondTermText.innerText = "";
    operatorText.innerText = "";
}