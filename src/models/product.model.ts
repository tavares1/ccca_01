export interface ProductInput {
    description: string
    value: number
    quantity: number
    discount?: number
}

export default class Product implements ProductInput {
    constructor(
        readonly description: string, 
        readonly value: number, 
        readonly quantity: number, 
        readonly discount?: number
        ) {
            if (!this.isDiscountValid(discount)) throw Error('Invalid discount, should be undefined or a number in range 0.0 ... 1.0');
        }

    private isDiscountValid(discount?: number): boolean {
        if (discount != undefined && discount < 0.0 && discount > 1.0)  return false
        return true
    }
}
