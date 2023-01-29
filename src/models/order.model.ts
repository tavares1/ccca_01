import CpfValidator from "../validator/cpf.validator";
import Product, { ProductAbstraction } from "./product.model";

export interface OrderAbstraction {
    readonly cpf: string;
    readonly products: Product[];
    addProduct(input: ProductAbstraction): void;
    getProducts(): Product[];
    getTotalValue(): number;
}

export class Order implements OrderAbstraction {

    readonly products: Product[] = [];
    
    constructor(readonly id: number, readonly cpf: string) {
        try { 
            if (new CpfValidator(cpf).validate()) this.cpf = cpf
        } catch (e) {
            throw Error('Pedido não pode ser criado com esse cpf');
        }
    }

    addProduct(input: ProductAbstraction): void {
        const product = new Product(input.description, input.value, input.quantity, input.discount)
        this.products.push(product)
    }

    getProducts(): Product[] {
        return this.products;
    }

    getTotalValue(): number {
        return this.products.reduce((acummulator, currentValue) => {
            const value = (currentValue.quantity * currentValue.value) 
            if (currentValue.discount === undefined) return (acummulator + value);
            return acummulator + (value * (1 - currentValue.discount));
        }, 0);
    }
}
