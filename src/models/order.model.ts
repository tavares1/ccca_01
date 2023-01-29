import CpfValidator from "../validator/cpf.validator";
import Product, { ProductInput } from "./product.model";

export interface OrderOutput {
    readonly products: Product[];
    addProduct(input: ProductInput): void;
    getProducts(): Product[];
    getTotalValue(): number;
}

export class Order implements OrderOutput {
    readonly products: Product[] = [];
    
    constructor(readonly id: number, readonly cpf: string) {
        if (!new CpfValidator(cpf).validate()) throw 'CPF inválido'
        this.cpf = cpf
    }

    addProduct(input: ProductInput): void {
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
