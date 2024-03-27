import express from "express";
const router = express.Router();
import { createInvoice } from "../controllers/paymentController";
import { protect } from "../middleware/authMiddleware";

router.post("/create-invoice", protect, createInvoice);

export default router;
