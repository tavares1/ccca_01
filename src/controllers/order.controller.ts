import { ProductInput } from "../models/product.model"
import { getOrder, addProduct, createOrder, getTotalValue } from "../services/order.service"
import { Request, Response } from "express"

interface CustomRequest<T> extends Request {
    body: T
}

const fetchOrder = (req: Request, res: Response) => {
    const id = Number(req.params.order_id);
    const order = getOrder(id);
    res.json({
        'Pedido': order
    });
}

const newProductToOrder = (req: CustomRequest<ProductInput>, res: Response) => {
    const id = Number(req.params.order_id);
    const product: ProductInput = req.body;
    const updatedOrder = addProduct(id, product);
    res.json({
        'Produtos adicionados': updatedOrder
    });

};

const createNewOrder = (req: Request, res: Response) => {
    const { cpf } = req.body;
    const order = createOrder(cpf);
    res.json({
        'Novo pedido criado': order
    });
};

const getTotalValueFromOrder = (req: Request, res: Response) => {
    const id = Number(req.params.order_id);
    const totalValue = getTotalValue(id);
    res.json({
        'Valor total do pedido': totalValue
    });
}

export { fetchOrder, newProductToOrder, createNewOrder, getTotalValueFromOrder } 
