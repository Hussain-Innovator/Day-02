// Function Parameters and Return Types
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers);
function getStringLength(str) {
    return str.length;
}
function negateBoolean(value) {
    return !value;
}
// Type Guarding
function performOperationIfNumber(value) {
    if (typeof value === "number") {
        console.log("Performing operation on number:", value);
    }
}
function performOperationIfString(value) {
    if (typeof value === "string") {
        console.log("Performing operation on string:", value);
    }
}
