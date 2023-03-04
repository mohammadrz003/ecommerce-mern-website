import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import colors from "colors";
import crypto from "crypto";

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

const secretKey =
  "L2bInjPtCfrkhWZHsxCRS4irhaU8qtY7yuN8aDwzbFunJKs1iVS-_BFkCaRfmKig";

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.post("/api/createInvoice", async (req, res) => {
  const { totalPrice } = req.body;
  const { data } = await axios.get(
    `https://plisio.net/api/v1/invoices/new?source_currency=USD&source_amount=${totalPrice}&order_name=techshop&order_number=${Math.random()}&api_key=L2bInjPtCfrkhWZHsxCRS4irhaU8qtY7yuN8aDwzbFunJKs1iVS-_BFkCaRfmKig&json=true&callback_url=https://techshop.iran.liara.run/api/payCallback?json=true&success_callback_url=https://techshop.iran.liara.run/api/payCallback?json=true`
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

app.post("/api/payCallback", (req, res) => {
  console.log("Hello");
  console.log("req.body", req.body);
  let chunks = "";
  req.on("data", (chunk) => (chunks += chunk));
  req.on("end", () => {
    let data;
    try {
      data = JSON.parse(chunks);
      console.log("data:", data);
      res.setHeader("Content-Type", "application/json");
    } catch (e) {
      // console.error(e);
      data = false;
    }

    if (data && vallidateRequest(data)) {
      res.writeHead(200);
      console.log("This is a correct JSON callback");
      res.end("This is a correct JSON callback");
    } else {
      res.writeHead(422);
      console.log("Incorrect data 1");
      res.end("Incorrect data 1");
    }
  });
});

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
