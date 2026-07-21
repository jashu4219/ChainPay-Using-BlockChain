import pool from "../config/db.js";

export const createPurchase = async ({
  buyerId,
  productId,
  invoiceId,
  transactionHash,
  amount,
}) => {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [walletRows] = await connection.query(
      `
        SELECT
          id,
          balance
        FROM wallets
        WHERE user_id = ?
        FOR UPDATE
      `,
      [buyerId]
    );

    if (walletRows.length === 0) {
      throw new Error("Wallet not found");
    }

    const wallet = walletRows[0];

    if (Number(wallet.balance) < Number(amount)) {
      throw new Error("Insufficient wallet balance");
    }

    await connection.query(
      `
        UPDATE wallets
        SET balance = balance - ?
        WHERE user_id = ?
      `,
      [amount, buyerId]
    );

    const [result] = await connection.query(
      `
        INSERT INTO transactions
        (
          buyer_id,
          product_id,
          invoice_id,
          transaction_hash,
          amount
        )
        VALUES (?, ?, ?, ?, ?)
      `,
      [
        buyerId,
        productId,
        invoiceId,
        transactionHash,
        amount,
      ]
    );

    await connection.query(
      `
        INSERT INTO wallet_transactions
        (
          wallet_id,
          type,
          amount,
          description
        )
        VALUES
        (
          ?,
          'debit',
          ?,
          ?
        )
      `,
      [
        wallet.id,
        amount,
        `Purchase Invoice ${invoiceId}`,
      ]
    );

    await connection.commit();

    return {
      purchaseId: result.insertId,
      remainingBalance:
        Number(wallet.balance) - Number(amount),
    };

  } catch (error) {

    await connection.rollback();

    throw error;

  } finally {

    connection.release();

  }
};