import express from "express";

import { purchaseProduct } from "../controllers/purchaseController.js";

const router = express.Router();

router.post("/", purchaseProduct);

export default router;