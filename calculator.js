let firstNumber = "0";
let secondNumber = "";
let operation = "";
let userInput = "";
let inputArray = [];
let result = 0;

const calculatorButtons = document.querySelectorAll(".calculator-button");
const numbers = document.querySelectorAll(".number");
const display = document.querySelector("#screen-number");
const equalButton = document.querySelector(".equal");
const symbols  = document.querySelectorAll(".symbol");
const clearBtn = document.querySelector(".clear");

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

function populateDisplay(toBeDisplayed) {
    display.textContent = toBeDisplayed;
}

function getResult() {
  equalButton.addEventListener("click", function () {
    result = operator(parseInt(inputArray[0]), parseInt(inputArray[2]), inputArray[1]);
  });
}

calculatorButtons.forEach((button) => {
    button.addEventListener("click", function() {
        if (
          button.value == "+" ||
          button.value == "-" ||
          button.value == "*" ||
          button.value == "/"
        ) {
          inputArray.push(userInput);
          inputArray.push(button.value);
          userInput = "";
        } else if (button.value == "=") {
          inputArray.push(userInput);
          populateDisplay(operator(parseInt(inputArray[0]), parseInt(inputArray[2]), inputArray[1]));
        } else {
          userInput = userInput + button.value;
          populateDisplay(userInput);
        }
    });
});

clearBtn.addEventListener("click", function() {
    window.location.reload();
});
