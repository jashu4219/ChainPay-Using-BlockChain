import pool from "../config/db.js";

export const getWallet = async (userId) => {
  const [rows] = await pool.query(
    `
      SELECT
        w.id,
        w.balance,
        u.name,
        u.email
      FROM wallets w
      JOIN users u
        ON w.user_id = u.id
      WHERE w.user_id = ?
    `,
    [userId]
  );

  return rows[0];
};

export const createWallet = async (userId) => {
  await pool.query(
    `
      INSERT INTO wallets (user_id, balance)
      VALUES (?, 0)
    `,
    [userId]
  );

  return await getWallet(userId);
};

export const addFunds = async (
  userId,
  amount
) => {
  let wallet = await getWallet(userId);

  if (!wallet) {
    wallet = await createWallet(userId);
  }

  await pool.query(
    `
      UPDATE wallets
      SET balance = balance + ?
      WHERE user_id = ?
    `,
    [amount, userId]
  );

  const updatedWallet =
    await getWallet(userId);

  await pool.query(
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
        'credit',
        ?,
        'Funds Added'
      )
    `,
    [updatedWallet.id, amount]
  );

  return updatedWallet;
};

export const deductFunds = async (
  userId,
  amount
) => {
  const wallet =
    await getWallet(userId);

  if (!wallet) {
    throw new Error(
      "Wallet not found"
    );
  }

  if (
    Number(wallet.balance) <
    Number(amount)
  ) {
    throw new Error(
      "Insufficient wallet balance"
    );
  }

  await pool.query(
    `
      UPDATE wallets
      SET balance = balance - ?
      WHERE user_id = ?
    `,
    [amount, userId]
  );

  const updatedWallet =
    await getWallet(userId);

  await pool.query(
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
        'Product Purchase'
      )
    `,
    [updatedWallet.id, amount]
  );

  return updatedWallet;
};

export const getWalletHistory =
  async (userId) => {
    const wallet =
      await getWallet(userId);

    if (!wallet) {
      return [];
    }

    const [history] =
      await pool.query(
        `
        SELECT *
        FROM wallet_transactions
        WHERE wallet_id = ?
        ORDER BY created_at DESC
      `,
        [wallet.id]
      );

    return history;
  };