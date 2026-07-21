import crypto from "crypto";

import { createPurchase } from "../services/purchaseService.js";

export const purchaseProduct = async (req, res) => {
  try {
    const {
      buyerId,
      productId,
      amount,
    } = req.body;

    if (!buyerId || !productId || !amount) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const invoiceId = `INV-${Date.now()}`;

    const transactionHash =
      crypto.randomBytes(32).toString("hex");

    const purchase = await createPurchase({
      buyerId,
      productId,
      invoiceId,
      transactionHash,
      amount,
    });

    res.status(201).json({
      success: true,
      message: "Purchase completed successfully",

      purchaseId: purchase.purchaseId,

      invoiceId,

      transactionHash,

      remainingBalance:
        purchase.remainingBalance,
    });

  } catch (error) {

    console.error(
      "Purchase Error:",
      error
    );

    if (
      error.message ===
      "Insufficient wallet balance"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Insufficient wallet balance",
      });
    }

    if (
      error.message ===
      "Wallet not found"
    ) {
      return res.status(404).json({
        success: false,
        message: "Wallet not found",
      });
    }

    res.status(500).json({
      success: false,
      message: "Purchase failed",
    });

  }
};