import Order from "../models/orderModel.js";

// @desc    Create an invoice
// @api     POST /api/payment/create-invoice
// @access  Public
const createInvoice = asyncHandler(async (req, res) => {
  res.send("Hello Body!");
});

export { createInvoice };
