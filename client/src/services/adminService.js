import API from "./api";

export const fetchAdminDashboard =
  async () => {
    const response = await API.get(
      "/admin/dashboard"
    );

    return response.data;
  };

export const fetchUsers =
  async () => {
    const response = await API.get(
      "/admin/users"
    );

    return response.data;
  };

export const fetchProducts =
  async () => {
    const response = await API.get(
      "/admin/products"
    );

    return response.data;
  };

export const fetchTransactions =
  async () => {
    const response = await API.get(
      "/admin/transactions"
    );

    return response.data;
  };