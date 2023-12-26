let operator = "";
let currentNumber = "0";
let prevNumber = "0";
let result = 0;

let value = "";
let userInput = "";
let prevOperator = "";
const operators = [];
let total = 0;
let flag = true;

const buttons = document.querySelectorAll(".calculator-button");
const symbols = document.querySelectorAll(".symbol");
const equal = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
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
    if(num2 == 0) {
        return "Err";
    }
    return num1 / num2;
}

function operate(firstNumber, secondNumber, operator) {
    switch(operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
            break;
        case "/":
            result = divide(firstNumber, secondNumber);
            break;
    }
    return result;
}

function populateDisplay(input) {
    display.textContent = input;
}

function clear() {
    window.location.reload();
}

function updateDisplay() {
  prevOperator = operators.shift();
  total = operate(parseInt(prevNumber), parseInt(currentNumber), prevOperator);
  populateDisplay(total);
}

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        value = button.value;
        if(button.classList.contains("number")) {
            userInput += `${value}`;
            currentNumber = userInput;
            populateDisplay(userInput);
            if(flag) {
                prevNumber = currentNumber;
            }
        }
        else if(button.classList.contains("symbol")) {
            operator = button.value;
            populateDisplay(currentNumber);
            operators.push(operator);
            flag = false;
            if(operators.length > 1) {
                updateDisplay();
                prevNumber = total;
            }
            userInput = "";
        }
        else if(button.classList.contains("equal")) {
            updateDisplay();
        }
        else if(button.classList.contains("clear")) {
            clear();
        }
    });
});
