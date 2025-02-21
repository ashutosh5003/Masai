function multiply(num1, num2) {
    return num1 * num2;
}

function multiplyNumbers(num1, num2) {
    return multiply.apply(null, [num1, num2]);
}

console.log(multiplyNumbers(5, 6));
