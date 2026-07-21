import API from "./api";

export const fetchWallet = async (
  userId
) => {
  const response = await API.get(
    `/wallet/${userId}`
  );

  return response.data.wallet;
};

export const addFunds = async (
  userId,
  amount
) => {
  const response = await API.post(
    `/wallet/${userId}/add-funds`,
    {
      amount,
    }
  );

  return response.data.wallet;
};

export const fetchWalletHistory =
  async (userId) => {
    const response =
      await API.get(
        `/wallet/${userId}/history`
      );

    return response.data.history;
  };