var shoppingCart = [20, 15];

function getTotalCost(prices) {
  let total = 0;
  total = prices.reduce((total, price) => total + price)
  return total;
}

getTotalCost(shoppingCart);
