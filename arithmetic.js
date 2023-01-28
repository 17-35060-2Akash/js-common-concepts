const arithmetic = (num1, num2, operation) => {
    try {
        return operation(num1, num2);
    }
    catch (e) {
        return 'Invalid Operation';
    }


}

const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const devide = (a, b) => {
    return a / b;
}
const modulus = (a, b) => {
    return a % b;
}


const result = arithmetic(3, 2, subtract);
console.log(result);