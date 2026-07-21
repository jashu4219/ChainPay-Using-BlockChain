import {
  getDashboardStats,
  getAllUsers,
  getAllProducts,
  getAllTransactions,
} from "../services/adminService.js";

export const dashboard = async (
  req,
  res
) => {
  try {
    const stats =
      await getDashboardStats();

    res.json({
      success: true,
      stats,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to load dashboard",
    });

  }
};

export const users = async (
  req,
  res
) => {
  try {
    const data =
      await getAllUsers();

    res.json({
      success: true,
      users: data,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to load users",
    });

  }
};

export const products =
  async (req, res) => {
    try {
      const data =
        await getAllProducts();

      res.json({
        success: true,
        products: data,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to load products",
      });

    }
  };

export const transactions =
  async (req, res) => {
    try {
      const data =
        await getAllTransactions();

      res.json({
        success: true,
        transactions: data,
      });

    } catch (error) {

      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to load transactions",
      });

    }
  };