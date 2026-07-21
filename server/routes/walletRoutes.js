import express from "express";

import {
  fetchWallet,
  depositFunds,
  fetchWalletHistory,
} from "../controllers/walletController.js";

const router = express.Router();

router.get("/:userId", fetchWallet);

router.post(
  "/:userId/add-funds",
  depositFunds
);

router.get(
  "/:userId/history",
  fetchWalletHistory
);

export default router;