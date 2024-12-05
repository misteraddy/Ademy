const Order = require("../schema/Order");

const createOrder = (orderData) => {
  const order = new Order(orderData);
  return order.save();
};

module.exports = { createOrder };
