 
type SumOfDigits =  {
    first: number;
    second: number;
}

export default class CpfValidator {

    private cpf: string

    constructor(cpf: string) {
        if (this.isNumberOfDigitsInvalid(cpf)) throw Error('CPF não tem a quantidade de caracteres correto.');
        const formattedCPF = this.formatCPF(cpf)
        if (this.isNotRepeatedDigits(formattedCPF)) throw Error ('CPF contém itens repetidos');
        this.cpf = formattedCPF
    }
    
    private isNumberOfDigitsInvalid(cpf: string): boolean {
        return (cpf.length < 11 || cpf.length > 14)
    }

    private isNotRepeatedDigits(cpf: string): boolean {
        return cpf.split("").every(character => character === cpf[0])
    }
    
    private formatCPF(cpf: string): string {
        return cpf
            .replace('.', '')
            .replace('.', '')
            .replace('-', '')
            .replace(" ", "");
    }
    
    private validateDigit(sum: number): number {
        const rest = (sum % 11);
        return (rest < 2) ? 0 : 11 - rest;
    }
  
    
    private getSumOfDigits(): SumOfDigits {
        let first: number = 0;
        let second: number = 0;
        let digit: number;
    
        for (let increasingNumber = 1; increasingNumber < this.cpf.length - 1; increasingNumber++) {
            digit = parseInt(this.cpf.substring(increasingNumber - 1, increasingNumber));
            first = first + (11 - increasingNumber) * digit;
            second = second + (12 - increasingNumber) * digit;
        };
    
        return {
            first,
            second
        }
    }
    
    public validate(): boolean {

        const sumOfDigits: SumOfDigits = this.getSumOfDigits();
        const firstDigit: number = this.validateDigit(sumOfDigits.first)
        sumOfDigits.second += 2 * firstDigit;
        
        const secondDigit:number = this.validateDigit(sumOfDigits.second)
        const numberDigitVerification:string = this.cpf.substring(this.cpf.length - 2, this.cpf.length);
        
        const numberDigitResult: string = `${firstDigit}${secondDigit}`
        return numberDigitVerification == numberDigitResult;    
    }
}

