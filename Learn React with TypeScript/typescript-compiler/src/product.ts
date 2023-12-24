class Product {
  constructor(public name: string, public unitPrice: number) {
    this.unitPrice = 1;
  }
  getDiscountedPrice(discount: number): number {
    return this.unitPrice - discount;
  }
}

const table = new Product("Table", 45); 
console.log(table.getDiscountedPrice(5));

function log(message: string) {
  return undefined
}