let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateDisplay(currentNumber);
}

function appendOperator(op) {
  if (currentNumber === "") return;
  previousNumber = currentNumber;
  updateDisplay(`${previousNumber} ${op}`);  // Update display with both numbers and operator
  currentNumber = "";
  operator = op;
}

function calculate() {
  if (currentNumber === "" || operator === "") return;
  let result;
  try {
    result = eval(`${previousNumber} ${operator} ${currentNumber}`);
  } catch (error) {
    result = "Error";
  }
  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  updateDisplay(currentNumber);
}
function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateDisplay("0");
}


function updateDisplay(value) {
  var displayElement = document.getElementById("contt");
  if (displayElement) {
    displayElement.textContent = value;
  } else {
    console.error("Display element with id 'contt' not found");
  }
}
