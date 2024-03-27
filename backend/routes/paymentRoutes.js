import express from "express";
const router = express.Router();
import {
  createInvoice,
  statusCallback,
} from "../controllers/paymentController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/create-invoice", protect, createInvoice);
router.post("/status-callback", protect, statusCallback);

export default router;
