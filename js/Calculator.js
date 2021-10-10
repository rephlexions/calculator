export default class Calculator {
  constructor(previousOperandNode, currentOperandNode) {
    this.previousOperandNode = previousOperandNode;
    this.currentOperandNode = currentOperandNode;
    this.clear();
  }

  clear() {
    this.currentOperand = "0";
    this.previousOperand = "";
    this.operation = undefined;
  }

  deleteCurrentOperand() {
    this.currentOperand = "0" + this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) && current === 0) return 0;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
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
    if (this.currentOperandNode.innerText[0] === digit.toString()) {
      this.currentOperand = this.currentOperand + digit.toString();
    } else {
      this.currentOperand = "" + digit.toString();
    }
  }

  signNumber() {
    if (parseFloat(this.currentOperand) >= 0) {
      this.currentOperand = "-" + this.currentOperand;
    } else {
      this.currentOperand = this.currentOperand.slice(1);
    }
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay = "0";
    if (isNaN(integerDisplay)) {
      integerDisplay = "0";
    } else {
      integerDisplay = integerDigits.toLocaleString("en-GB");
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      integerDisplay = integerDigits;
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
