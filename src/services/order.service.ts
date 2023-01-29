import { StoreManager } from "../managers/store.manager";
import { OrderAbstraction } from "../models/order.model";
import { ProductAbstraction } from "../models/product.model";

const store = StoreManager.getInstance();

const createOrder = (cpf: string): OrderAbstraction => {
    return store.createOrder(cpf);
}

const addProduct = (id: number, product: ProductAbstraction): OrderAbstraction => {
    return store.addProduct(id,product);
}

const getOrder = (id: number): OrderAbstraction => {
    return store.getOrderById(id);
}

const getTotalValue = (id: number): number => {
    return store.getTotalValue(id);
}

export { addProduct, getOrder, createOrder, getTotalValue }
