import CpfValidator from "../../src/validator/cpf.validator";

test('065.302.093-79 é um CPF válido', function() {
    const cpf = '065.302.093-79';
    const validator = new CpfValidator(cpf);
    expect(validator.validate()).toBeTruthy();
})

test('111.111.111-11 é um CPF inválido', function() {
    const cpf = '111.111.111-11';
    expect(() => { new CpfValidator(cpf) }).toThrowError();
})

test("Número de digitos do CPF é menor 11 ou maior que 14", function() {
    const cpf = '065.302.09';
    expect(() => {new CpfValidator(cpf)}).toThrowError();
})
