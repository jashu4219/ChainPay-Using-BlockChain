import {
  getTransactions,
  getTransactionById,
} from "../services/transactionService.js";

export const fetchTransactions = async (req, res) => {
  try {
    const transactions = await getTransactions();

    res.status(200).json({
      success: true,
      count: transactions.length,
      transactions,
    });
  } catch (error) {
    console.error("Fetch Transactions Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch transactions",
    });
  }
};

export const fetchTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await getTransactionById(id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      success: true,
      transaction,
    });
  } catch (error) {
    console.error("Fetch Transaction Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch transaction",
    });
  }
};