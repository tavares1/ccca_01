
function formatCPF(cpf: string): string {
    return cpf
        .replace('.', '')
        .replace('.', '')
        .replace('-', '')
        .replace(" ", "");
}

export function validateDigit(sum: number): number {
    const rest = (sum % 11);
    return (rest < 2) ? 0 : 11 - rest;
}

type SumOfDigits =  {
    first: number;
    second: number
}

function getSumOfDigits(cpf: string): SumOfDigits {
    let first: number = 0;
    let second: number = 0;
    let digit: number;

    for (let increasingNumber = 1; increasingNumber < cpf.length - 1; increasingNumber++) {
        digit = parseInt(cpf.substring(increasingNumber - 1, increasingNumber));
        first = first + (11 - increasingNumber) * digit;
        second = second + (12 - increasingNumber) * digit;
    };

    return {
        first,
        second
    }
}

export default function validate(cpf: string): boolean {
    if (cpf.length < 11 || cpf.length > 14) return false;
    cpf = formatCPF(cpf);
    if (cpf.split("").every(character => character === cpf[0])) return false;

    const sumOfDigits = getSumOfDigits(cpf);

    let firstDigit = validateDigit(sumOfDigits.first)
    sumOfDigits.second += 2 * firstDigit;
    let secondDigit = validateDigit(sumOfDigits.second)
    
    let numberDigitVerification = cpf.substring(cpf.length - 2, cpf.length);
    const numberDigitResult = `${firstDigit}${secondDigit}`
    return numberDigitVerification == numberDigitResult;    
}
