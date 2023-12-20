let firstNumber = 0;
let secondNumber = 0;
let operation = "";
let userInput = 0;

const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#screen-number");

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operator(firstNumber, secondNumber, operation) {
    switch(operation) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", function() {
        display.textContent = number.value;
    });
});
