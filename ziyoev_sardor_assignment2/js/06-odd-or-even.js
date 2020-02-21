const MODULO = 2;
const EVEN = 0;
const ODD = 1;

// declare variables
var enteredNumber;
var result;

// prompt user to enter an even number
enteredNumber = prompt("Enter an even number: ");

// convert user input into a number
enteredNumber = Number(enteredNumber);

// determine result of modulo equation
result = enteredNumber % MODULO;

// while loop to check if enteredNumber is even or odd
while (result === EVEN) {
  document.write(enteredNumber + " is an even number <br/>");
  enteredNumber = prompt("Enter an even number: ");
  enteredNumber = Number(enteredNumber);
  result = enteredNumber % MODULO;

  if (result === ODD) {
    document.write(enteredNumber + " isn't an even number");
    break;
  }
}