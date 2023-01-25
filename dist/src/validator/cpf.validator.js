"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDigit = void 0;
function formatCPF(cpf) {
    return cpf
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace(" ", "");
}
function validateDigit(sum) {
    const rest = (sum % 11);
    return (rest < 2) ? 0 : 11 - rest;
}
exports.validateDigit = validateDigit;
function getSumOfDigits(cpf) {
    let first = 0;
    let second = 0;
    let digit;
    for (let increasingNumber = 1; increasingNumber < cpf.length - 1; increasingNumber++) {
        digit = parseInt(cpf.substring(increasingNumber - 1, increasingNumber));
        first = first + (11 - increasingNumber) * digit;
        second = second + (12 - increasingNumber) * digit;
    }
    ;
    return {
        first,
        second
    };
}
function validate(cpf) {
    if (cpf.length < 11 || cpf.length > 14)
        return false;
    cpf = formatCPF(cpf);
    if (cpf.split("").every(character => character === cpf[0]))
        return false;
    const sumOfDigits = getSumOfDigits(cpf);
    let firstDigit = validateDigit(sumOfDigits.first);
    sumOfDigits.second += 2 * firstDigit;
    let secondDigit = validateDigit(sumOfDigits.second);
    let numberDigitVerification = cpf.substring(cpf.length - 2, cpf.length);
    const numberDigitResult = `${firstDigit}${secondDigit}`;
    return numberDigitVerification == numberDigitResult;
}
exports.default = validate;
