import path from "path";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import colors from "colors";
import morgan from "morgan";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
// Routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import { updateOrderToPaid } from "./controllers/orderControllers.js";

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.post("/api/createInvoice", async (req, res) => {
  const { totalPrice, orderId } = req.body;
  const { data } = await axios.get(
    `https://plisio.net/api/v1/invoices/new?source_currency=USD&source_amount=${totalPrice}&order_name=techshop&order_number=${orderId}&api_key=${process.env.PLISIO_SECRET_KEY}&json=true&callback_url=${process.env.PLISIO_CALLBACK_URL}?json=true&success_url=${process.env.PLISIO_SUCCESS_URL}${orderId}`
  );
  res.json(data);
});
app.post("/api/payCallback", updateOrderToPaid);

// static assets
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("server is running...");
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
