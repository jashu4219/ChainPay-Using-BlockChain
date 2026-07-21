import express from "express";

import {
  fetchTransactions,
  fetchTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.get("/", fetchTransactions);

router.get("/:id", fetchTransaction);

export default router;