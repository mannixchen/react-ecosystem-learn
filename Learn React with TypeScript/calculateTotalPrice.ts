function calculateTotalPrice(
  product: { name: string; unitPrice: number },

  quantity: number,

  discount: number) {

  const priceWithoutDiscount = product. * quantity;

  const discountAmount = priceWithoutDiscount * discount;

  return priceWithoutDiscount - discountAmount;

}