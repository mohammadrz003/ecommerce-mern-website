import asyncHandler from "express-async-handler";
import axios from "axios";
import crypto from "crypto";
import Order from "../models/orderModel.js";

// @desc    Create an invoice
// @api     POST /api/payment/create-invoice
// @access  Public
const createInvoice = asyncHandler(async (req, res) => {
  const { totalAmount, orderId } = req.body;

  const invoiceData = {
    amount: totalAmount,
    currency: "USD",
    order_id: orderId,
    url_success: `https://ecommerce-mern-website-client.onrender.com/order/${orderId}`,
    url_callback:
      "https://ecommerce-mern-website-backend.onrender.com/api/payment/status-callback",
    lifetime: 300,
  };

  const authData = {
    merchant: process.env.CRYPTOMUS_MERCHANT_UUID,
    sign: crypto
      .createHash("md5")
      .update(
        Buffer.from(JSON.stringify(invoiceData)).toString("base64") +
          process.env.CRYPTOMUS_PAYMENT_API_KEY
      )
      .digest("hex"),
  };

  const { data } = await axios.post(
    "https://api.cryptomus.com/v1/payment",
    invoiceData,
    {
      headers: {
        ...authData,
      },
    }
  );

  const order = await Order.findById(orderId);
  order.paymentResult = {
    id: data.result.uuid,
    status: data.result.payment_status,
  };
  order.save();

  res.json(data);
});

// @desc    payment status webhook
// @api     POST /api/payment/status-callback
// @access  Public
const statusCallback = asyncHandler(async (req, res) => {
  const data = req.body;

  // if (!data.sign) {
  //   res.status(400);
  //   throw new Error("Payload is not valid");
  // }
  console.log("callback data: ", data);

  res.send("Hello Buddy!");
});

export { createInvoice, statusCallback };
