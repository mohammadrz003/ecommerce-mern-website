import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userControllers.js";

router.route("/login").post(authUser);

export default router;
