import {
  getWallet,
  createWallet,
  addFunds,
  getWalletHistory,
} from "../services/walletService.js";

export const fetchWallet = async (req, res) => {
  try {
    const { userId } = req.params;

    let wallet = await getWallet(userId);

    if (!wallet) {
      wallet = await createWallet(userId);
    }

    res.status(200).json({
      success: true,
      wallet,
    });

  } catch (error) {

    console.error("Wallet Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch wallet",
    });

  }
};

export const depositFunds = async (req, res) => {
  try {
    const { userId } = req.params;

    const { amount } = req.body;

    if (!amount || Number(amount) <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount",
      });
    }

    const wallet = await addFunds(
      userId,
      Number(amount)
    );

    res.status(200).json({
      success: true,
      message: "Funds added successfully",
      wallet,
    });

  } catch (error) {

    console.error("Deposit Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const fetchWalletHistory = async (
  req,
  res
) => {
  try {
    const { userId } = req.params;

    const history =
      await getWalletHistory(userId);

    res.status(200).json({
      success: true,
      history,
    });

  } catch (error) {

    console.error(
      "Wallet History Error:",
      error
    );

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch wallet history",
    });

  }
};