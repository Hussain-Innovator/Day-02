// String Operations
// Concatenate two strings together and store the result in a new variable.
var str1 = "Hello";
var str2 = "World";
var concatenatedString = str1 + str2;

var strLength = concatenatedString.length;

var substring = concatenatedString.substring(1, 4);

var num1 = 10;
var num2 = 5;
var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var remainder = num1 % num2;

// Boolean Operations
var trueExpression = true && (false || true) && !false;
var falseExpression = false || (true && false) || !true;
// Conditional Statements
var numberToCheck = 15;
if (numberToCheck > 10) {
    console.log("The number is greater than 10.");
}

var strToCheck = "";
if (strToCheck === "") {
    console.log("The string is empty.");
}
else {
    console.log("The string is not empty.");
}
var caseNumber = 2;
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
var numbersArray = [1, 2, 3, 4, 5];
for (var i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}
var countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
