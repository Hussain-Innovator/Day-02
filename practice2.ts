// String Operations
// Concatenate two strings together and store the result in a new variable.
const str1: string = "Hello";
const str2: string = "World";
const concatenatedString: string = str1 + str2;

// Find the length of a string and store it in a variable.
const strLength: number = concatenatedString.length;

// Extract a substring from a string and store it in a new variable.
const substring: string = concatenatedString.substring(1, 4);

// Number Operations
// Perform addition, subtraction, multiplication, and division operations on two numbers.
const num1: number = 10;
const num2: number = 5;
const addition: number = num1 + num2;
const subtraction: number = num1 - num2;
const multiplication: number = num1 * num2;
const division: number = num1 / num2;

// Find the remainder when dividing two numbers and store it in a variable.
const remainder: number = num1 % num2;

// Boolean Operations
// Create an expression that evaluates to true using boolean operators (AND, OR, NOT).
const trueExpression: boolean = true && (false || true) && !false;

// Create an expression that evaluates to false using boolean operators.
const falseExpression: boolean = false || (true && false) || !true;

// Conditional Statements
// Write an if statement to check if a number is greater than 10.
const numberToCheck: number = 15;
if (numberToCheck > 10) {
    console.log("The number is greater than 10.");
}

// Write an if-else statement to check if a string is empty.
const strToCheck: string = "";
if (strToCheck === "") {
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");
}

// Write a switch statement to handle different cases based on a number.
const caseNumber: number = 2;
switch (caseNumber) {
    case 1:
        console.log("Case 1");
        break;
    case 2:
        console.log("Case 2");
        break;
    default:
        console.log("Default case");
}

// Loops
// Use a for loop to iterate over an array of numbers and print each element.
const numbersArray: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// Use a while loop to count down from 10 to 1 and print each number.
let countdown: number = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
