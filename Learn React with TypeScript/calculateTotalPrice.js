function calculateTotalPriceJS(product, quantity, discount) {

  // In js file. IDE doesn't know what properties the obj have.

  const priceWithoutDiscount = product.price  * quantity;
  
  const discountAmount = priceWithoutDiscount * discount;
  
  return priceWithoutDiscount - discountAmount;
  
  }