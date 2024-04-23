// Function Parameters and Return Types
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers);

function getStringLength(str: string): number {
    return str.length;
}
function negateBoolean(value: boolean): boolean {
    return !value;
}
// Type Guarding
function performOperationIfNumber(value: any): void {
    if (typeof value === "number") {
        console.log("Performing operation on number:", value);
    }
}
function performOperationIfString(value: any): void {
    if (typeof value === "string") {
        console.log("Performing operation on string:", value);
    }
}
