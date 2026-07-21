import pool from "../config/db.js";

export const getDashboardStats = async () => {
  const [[revenue]] = await pool.query(`
    SELECT
      IFNULL(SUM(amount), 0) AS totalRevenue,
      COUNT(*) AS totalTransactions
    FROM transactions
  `);

  const [[products]] = await pool.query(`
    SELECT COUNT(*) AS totalProducts
    FROM products
  `);

  const [[users]] = await pool.query(`
    SELECT COUNT(*) AS totalUsers
    FROM users
  `);

  const [recentTransactions] = await pool.query(`
    SELECT
      t.id,
      t.invoice_id,
      t.amount,
      t.status,
      t.purchased_at,
      p.name AS product,
      u.name AS buyer
    FROM transactions t
    JOIN users u
      ON t.buyer_id = u.id
    JOIN products p
      ON t.product_id = p.id
    ORDER BY t.purchased_at DESC
    LIMIT 5
  `);

  return {
    stats: {
      totalRevenue: revenue.totalRevenue,
      totalTransactions: revenue.totalTransactions,
      totalProducts: products.totalProducts,
      totalUsers: users.totalUsers,
    },
    recentTransactions,
  };
};