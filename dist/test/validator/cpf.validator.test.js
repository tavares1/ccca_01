"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_validator_1 = __importStar(require("../../src/validator/cpf.validator"));
test('065.302.093-79 é um CPF válido', function () {
    const cpf = '065.302.093-79';
    expect((0, cpf_validator_1.default)(cpf)).toBeTruthy();
});
test('111.111.111-11 é um CPF inválido', function () {
    const cpf = '111.111.111-11';
    expect((0, cpf_validator_1.default)(cpf)).toBeFalsy();
});
test("Número de digitos do CPF é menor 11 ou maior que 14", function () {
    const cpf = '065.302.0';
    expect((0, cpf_validator_1.default)(cpf)).toBeFalsy();
});
test('Validação deve retornar 0, pois o resto da divisão é menor que 2', function () {
    const sum = 12;
    expect((0, cpf_validator_1.validateDigit)(sum)).toEqual(0);
});
