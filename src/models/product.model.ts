export interface ProductAbstraction {
    description: string
    value: number
    quantity: number
    discount?: number
}

export default class Product implements ProductAbstraction {
    constructor(
        readonly description: string, 
        readonly value: number, 
        readonly quantity: number, 
        readonly discount?: number
        ) {
            if (!this.isDiscountValid(discount)) throw Error('Desconto no formato inválido(undefined | 0.0 ... 1.0');
        }

    private isDiscountValid(discount?: number): boolean {
        if (discount != undefined && this.isDiscountInRange(discount))  return false
        return true
    }

    private isDiscountInRange(discount: number): boolean {
        return (discount < 0.0 || discount > 1.0)
    }
}
