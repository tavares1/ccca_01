import { Order, OrderOutput } from "../models/order.model";
import { ProductInput } from "../models/product.model";

export class StoreManager {

    private static _instance: StoreManager = new StoreManager();

    private constructor() {}

    private orders:Order[] = [];

    public static getInstance(): StoreManager { 
        return this._instance;
    }

    createOrder(cpf: string): OrderOutput {
        const order = new Order(this.orders.length + 1, cpf);
        this.orders.push(order);
        return order;
    }

    getOrderById(id: number): OrderOutput {
        const order = this.orders.find(e => e.id === id);
        if (order === undefined) throw Error('Pedido não encontrado');
        return order;
    }

    addProduct(id: number, product: ProductInput): OrderOutput {
        const order = this.getOrderById(id);
        order.addProduct(product);
        return order;
    }

    getTotalValue(id: number): number {
        return this.getOrderById(id).getTotalValue();
    }
    
}
