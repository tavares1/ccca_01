import { OrderAbstraction } from "../../src/models/order.model";
import {app,server} from "../../src/app";

const request = require('supertest');

describe('Teste integraçào com rotas de pedidos', () => {

    it('criar novo pedido', async () => {
        const response = await request(app)
            .post('/order')
            .send({ 'cpf': '065.302.093-79' })
        const order: OrderAbstraction = response.body.order;
        expect(order.cpf).toEqual('065.302.093-79');
        expect(order.products).toEqual([]);
    })

    it('não cria pedido, pois cpf é invalido', async () => {
        const response = await request(app)
            .post('/order')
            .send({ 'cpf': '111.111.111-11' })

        expect(response.status).toEqual(500)
    })

    afterAll(() => {
        server.close();
    });
});
