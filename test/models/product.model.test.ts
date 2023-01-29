import Product, { ProductAbstraction } from "../../src/models/product.model"

describe('Testa os comportamentos do model Product (produto)', () => {
    let sut: ProductAbstraction
    it('Cria um produto com o discount invalido', () => {
        expect(() => {sut = new Product('teste', 1,1, 10)}).toThrowError('Desconto no formato inválido(undefined | 0.0 ... 1.0');
    })

    it('Cria um produto com o desconto válido', () => {
        sut = new Product('teste', 1,1, 0.5);
        expect(sut.discount).toEqual(0.5);
    })
})
