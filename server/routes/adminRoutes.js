import express from "express";

import {
  dashboard,
  users,
  products,
  transactions,
} from "../controllers/adminController.js";

import {
  authenticate,
  requireAdmin,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authenticate);

router.use(requireAdmin);

router.get(
  "/dashboard",
  dashboard
);

router.get(
  "/users",
  users
);

router.get(
  "/products",
  products
);

router.get(
  "/transactions",
  transactions
);

export default router;