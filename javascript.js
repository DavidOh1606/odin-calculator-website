let firstTerm = null;
let operator = null;
let secondTerm = null;

const firstTermText = document.querySelector(".first-term");
const operatorText = document.querySelector(".operator-text");
const secondTermText = document.querySelector(".second-term");
const numberButtons = document.querySelector(".container-numbers");

numberButtons.addEventListener("click", selectNumber);





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
    return a / b;
}

function selectNumber(e) {
    if (!e.target.classList.contains("number")) {
        return;
    }

    if (firstTerm === null || operator === null) {
        firstTerm = Number(e.target.innerText);
        firstTermText.innerText = firstTerm;
    }
}