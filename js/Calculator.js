import { sum, substract, multiply, divide } from "./mathFunctions.js";

export default class Calculator {
  constructor(previousOperandNode, currentOperandNode) {
    this.previousOperandNode = previousOperandNode;
    this.currentOperandNode = currentOperandNode;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  deleteCurrentOperand() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = " ";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const curr = parseFloat(this.currentOperand);
    if (isNaN(prev) && current === 0) return 0;
    switch (this.operation) {
      case "+":
        computation = sum(prev, curr);
        break;
      case "-":
        computation = substract(prev, curr);
        break;
      case "*":
        computation = multiply(prev, curr);
        break;
      case "÷":
        computation = divide(prev, curr);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  appendDigit(digit) {
    if (digit === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + digit.toString();
  }

  signNumber() {
    if (parseFloat(this.currentOperand) >= 0) {
      this.currentOperand = "-" + this.currentOperand;
    } else {
      this.currentOperand = this.currentOperand.slice(1);
    }
  }

  setPI() {
    this.currentOperand = "3.14159265359";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString();
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandNode.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandNode.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandNode.innerText = "";
    }
  }
}
