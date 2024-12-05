const orderService = require("../../services/orderService");
const { successResponse, errorResponse } = require("../../utils/responseHandler");

const createOrder = async (req, res) => {
  try {
    const { body } = req;

    const response = await orderService.createOrder(body);

    return successResponse(res, response, "Order created successfully");
  } catch (error) {
    console.error("Error in createOrder:", error.message);
    return errorResponse(res, "Failed to create order");
  }
};

const capturePaymentAndFinalizeOrder = async (req, res) => {
  try {
    const { body } = req;

    const response = await orderService.capturePaymentAndFinalizeOrder(body);

    return successResponse(res, response, "Payment captured and order finalized successfully");
  } catch (error) {
    console.error("Error in capturePaymentAndFinalizeOrder:", error.message);
    return errorResponse(res, "Failed to capture payment or finalize order");
  }
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };
