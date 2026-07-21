import pool from "../config/db.js";

export const getDashboardStats =
  async () => {
    const [[users]] =
      await pool.query(
        "SELECT COUNT(*) AS totalUsers FROM users"
      );

    const [[products]] =
      await pool.query(
        "SELECT COUNT(*) AS totalProducts FROM products"
      );

    const [[transactions]] =
      await pool.query(
        "SELECT COUNT(*) AS totalTransactions FROM transactions"
      );

    const [[revenue]] =
      await pool.query(
        `
        SELECT
          IFNULL(SUM(amount),0)
          AS totalRevenue
        FROM transactions
      `
      );

    return {
      users: users.totalUsers,
      products: products.totalProducts,
      transactions:
        transactions.totalTransactions,
      revenue:
        revenue.totalRevenue,
    };
  };

export const getAllUsers =
  async () => {
    const [rows] =
      await pool.query(
        `
        SELECT
          id,
          name,
          email,
          role
        FROM users
        ORDER BY id DESC
      `
      );

    return rows;
  };

export const getAllProducts =
  async () => {
    const [rows] =
      await pool.query(
        `
        SELECT *
        FROM products
        ORDER BY id DESC
      `
      );

    return rows;
  };

export const getAllTransactions =
  async () => {
    const [rows] =
      await pool.query(
        `
        SELECT *
        FROM transactions
        ORDER BY id DESC
      `
      );

    return rows;
  };