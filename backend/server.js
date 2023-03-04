import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import colors from "colors";
import crypto from "crypto";
import asyncHandler from "express-async-handler";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const secretKey = process.env.PLISIO_SECRET_KEY;

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.post("/api/createInvoice", async (req, res) => {
  const { totalPrice, orderId } = req.body;
  const { data } = await axios.get(
    `https://plisio.net/api/v1/invoices/new?source_currency=USD&source_amount=${totalPrice}&order_name=techshop&order_number=${orderId}&api_key=L2bInjPtCfrkhWZHsxCRS4irhaU8qtY7yuN8aDwzbFunJKs1iVS-_BFkCaRfmKig&json=true&callback_url=https://techshop.iran.liara.run/api/payCallback?json=true&success_callback_url=https://techshop.iran.liara.run/api/payCallback?json=true`
  );
  res.json(data);
});

const vallidateRequest = function (data) {
  console.log("validate request");
  if (typeof data === "object" && data.verify_hash && secretKey) {
    const ordered = { ...data };
    delete ordered.verify_hash;
    const string = JSON.stringify(ordered);
    const hmac = crypto.createHmac("sha1", secretKey);
    hmac.update(string);
    const hash = hmac.digest("hex");
    return hash === data.verify_hash;
  }
  return false;
};

app.post(
  "/api/payCallback",
  asyncHandler((req, res) => {
    console.log(req.body);
    let data = "";
    try {
      data = req.body;
    } catch (e) {
      // console.error(e);
      data = false;
    }

    if (data && vallidateRequest(data)) {
      res.status(200);
      console.log("This is a correct JSON callback");
      res.send("This is a correct JSON callback");
    } else {
      res.status(422);
      console.log("Incorrect data 1");
      throw new Error("Incorrect data 1");
    }
  })
);

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
);
