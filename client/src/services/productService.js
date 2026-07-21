import API from "./api";

export const fetchProducts = async () => {
  const response = await API.get("/products");

  return response.data.products;
};

export const fetchProductById = async (id) => {
  const response = await API.get(`/products/${id}`);

  return response.data.product;
};