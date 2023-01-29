import { Order, OrderAbstraction } from "../../src/models/order.model"

describe('Testar comportamentos do model Order (Pedido)', () => {
    let sut: OrderAbstraction

    it('Não deve permitir a criação de pedido com cpf invalido', () => {
        expect(() => { sut = new Order(1, '111.111.111-11')}).toThrowError('Pedido não pode ser criado com esse cpf');
    })

    it('Deve criar um pedido com o cpf válido', () => {
        const mockCPF = '065.302.093-79'
        sut = new Order(1, mockCPF);
        expect(sut.cpf).toEqual(mockCPF)
    })

    it('Deve adicionar um novo produto ao pedido', () => {
        const mockProduct = { 'description': 'blob', 'value': 100.00, 'quantity': 1};
        sut = new Order(1, "065.302.093-79");
        sut.addProduct(mockProduct);

        expect(sut.products.length).toEqual(1)
        expect(sut.getProducts()[0]).toEqual(mockProduct)
    })

    it('Deve calcular o valor total do pedido sem desconto', () => {
        const mockProduct = { 'description': 'blob', 'value': 100.00, 'quantity': 1};
        sut = new Order(1, "065.302.093-79");
        sut.addProduct(mockProduct);
        expect(sut.getTotalValue()).toEqual(100);
    })

    it('Deve calcular o valor total do pedido com desconto', () => {
        const mockProduct = { 'description': 'blob', 'value': 100.00, 'quantity': 1, 'discount': 0.10};
        sut = new Order(1, "065.302.093-79");
        sut.addProduct(mockProduct);
        expect(sut.getTotalValue()).toEqual(90); 
    })
})
