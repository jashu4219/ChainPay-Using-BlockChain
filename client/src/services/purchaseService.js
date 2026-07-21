import API from "./api";

export const purchaseProduct = async (
  purchaseData
) => {
  const response = await API.post(
    "/purchases",
    purchaseData
  );

  return response.data;
};