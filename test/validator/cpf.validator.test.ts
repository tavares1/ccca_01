import CpfValidator from "../../src/validator/cpf.validator";

test('065.302.093-79 é um CPF válido', function() {
    const cpf = '065.302.093-79';
    const validator = new CpfValidator();
    expect(validator.validate(cpf)).toBeTruthy();
})

test('111.111.111-11 é um CPF inválido', function() {
    const cpf = '111.111.111-11';
    const validator = new CpfValidator();
    expect(validator.validate(cpf)).toBeFalsy();
})

test("Número de digitos do CPF é menor 11 ou maior que 14", function() {
    const cpf = '065.302.09';
    const validator = new CpfValidator();
    expect(() => validator.validate(cpf)).toThrowError();
})

test('Validação deve retornar 0, pois o resto da divisão é menor que 2', function () {
    const sum = 12;
    const validator = new CpfValidator();
    expect(validator.validateDigit(sum)).toEqual(0);
})
