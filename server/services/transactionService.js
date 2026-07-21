import pool from "../config/db.js";

export const getTransactions = async () => {
  const [transactions] = await pool.query(`
    SELECT
      t.id,
      t.invoice_id,
      t.transaction_hash,
      t.amount,
      t.status,
      t.purchased_at,

      u.name AS buyer,
      u.email,

      p.name AS product,
      p.company

    FROM transactions t

    JOIN users u
      ON t.buyer_id = u.id

    JOIN products p
      ON t.product_id = p.id

    ORDER BY t.purchased_at DESC
  `);

  return transactions;
};

export const getTransactionById = async (id) => {
  const [rows] = await pool.query(
    `
      SELECT
        t.*,
        u.name AS buyer,
        u.email,
        p.name AS product,
        p.company

      FROM transactions t

      JOIN users u
        ON t.buyer_id = u.id

      JOIN products p
        ON t.product_id = p.id

      WHERE t.id = ?
    `,
    [id]
  );

  return rows[0];
};