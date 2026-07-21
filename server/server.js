import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import walletRoutes from "./routes/walletRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log("=================================");
  console.log(req.method, req.url);
  console.log("Body:", req.body);
  console.log("=================================");
  next();
});

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

app.use("/api/purchases", purchaseRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/transactions", transactionRoutes);

app.use("/api/wallet", walletRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT NOW() AS serverTime"
    );

    res.json({
      success: true,
      message: "🚀 ChainPay Backend Running",
      database: "Connected",
      serverTime: rows[0].serverTime,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
    });

  }
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});