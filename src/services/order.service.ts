import { StoreManager } from "../managers/store.manager";
import { OrderOutput } from "../models/order.model";
import { ProductInput } from "../models/product.model";

const store = StoreManager.getInstance();

const createOrder = (cpf: string): OrderOutput => {
    return store.createOrder(cpf);
}

const addProduct = (id: number, product: ProductInput): OrderOutput => {
    return store.addProduct(id,product);
}

const getOrder = (id: number): OrderOutput => {
    return store.getOrderById(id);
}

const getTotalValue = (id: number): number => {
    return store.getTotalValue(id);
}

export { addProduct, getOrder, createOrder, getTotalValue }
