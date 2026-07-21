import pool from "../config/db.js";

export const getAllProducts = async () => {
  const [products] = await pool.query(
    "SELECT * FROM products ORDER BY created_at DESC"
  );

  return products;
};