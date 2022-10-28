export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + parseInt(amount), 0);