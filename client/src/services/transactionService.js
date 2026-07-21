import API from "./api";

export const fetchTransactions =
  async () => {
    const response =
      await API.get(
        "/transactions"
      );

    return response.data.transactions;
  };

export const fetchTransaction =
  async (id) => {
    const response =
      await API.get(
        `/transactions/${id}`
      );

    return response.data.transaction;
  };