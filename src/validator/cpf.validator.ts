 
type SumOfDigits =  {
    first: number;
    second: number
}

export default class CpfValidator {

    isValidCPF(cpf: string): boolean {
        return (cpf.length < 11 || cpf.length > 14)
    }

    formatCPF(cpf: string): string {
        return cpf
            .replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .replace(" ", "");
    }
    
    validateDigit(sum: number): number {
        const rest = (sum % 11);
        return (rest < 2) ? 0 : 11 - rest;
    }
  
    
    getSumOfDigits(cpf: string): SumOfDigits {
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
    
    validate(cpf: string): boolean {
        if (this.isValidCPF(cpf)) throw Error('Invalid cpf');
        cpf = this.formatCPF(cpf);
        if (cpf.split("").every(character => character === cpf[0])) return false;
        const sumOfDigits = this.getSumOfDigits(cpf);
        let firstDigit = this.validateDigit(sumOfDigits.first)
        sumOfDigits.second += 2 * firstDigit;
        let secondDigit = this.validateDigit(sumOfDigits.second)
        let numberDigitVerification = cpf.substring(cpf.length - 2, cpf.length);
        const numberDigitResult = `${firstDigit}${secondDigit}`
        return numberDigitVerification == numberDigitResult;    
    }
}

