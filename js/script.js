"use strict";
import Calculator from "./Calculator.js";

const previousOperandNode = document.querySelector("[data-previous-operand]");
const currentOperandNode = document.querySelector("[data-current-operand]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const equalsButton = document.querySelector("[data-equals]");
const numberButtons = document.querySelectorAll("[data-number]");
const signedButton = document.getElementById("signed-button");
const piButton = document.getElementById("pi-button");

const calculator = new Calculator(previousOperandNode, currentOperandNode);

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

deleteButton.addEventListener("click", (button) => {
  calculator.deleteCurrentOperand();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

signedButton.addEventListener("click", (button) => {
  calculator.signNumber();
  calculator.updateDisplay();
});

piButton.addEventListener("click", (button) => {
  calculator.setPI();
  calculator.updateDisplay();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendDigit(button.innerText);
    calculator.updateDisplay();
  });
});
