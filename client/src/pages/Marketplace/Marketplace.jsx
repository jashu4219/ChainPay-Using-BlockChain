import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import SearchBar from "../../components/marketplace/SearchBar";
import CategoryFilter from "../../components/marketplace/CategoryFilter";
import ProductCard from "../../components/marketplace/ProductCard";
import ProductModal from "../../components/marketplace/ProductModal";
import PurchaseFlow from "../../components/purchase/PurchaseFlow";

import { fetchProducts } from "../../services/productService";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [purchaseProduct, setPurchaseProduct] = useState(null);
  const [showPurchase, setShowPurchase] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.company.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const openProduct = (product) => {
    setSelectedProduct(product);
  };

  const closeProduct = () => {
    setSelectedProduct(null);
  };

  const startPurchase = () => {
    setPurchaseProduct(selectedProduct);
    setSelectedProduct(null);
    setShowPurchase(true);
  };

  const closePurchase = () => {
    setPurchaseProduct(null);
    setShowPurchase(false);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-2xl font-semibold text-white">
            Loading Products...
          </h2>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Marketplace
        </h1>

        <p className="mt-2 text-slate-400">
          Purchase blockchain-powered enterprise products.
        </p>
      </div>

      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mb-8">
        <CategoryFilter
          selected={category}
          setSelected={setCategory}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => openProduct(product)}
          />
        ))}
      </div>

      <ProductModal
        open={selectedProduct !== null}
        product={selectedProduct}
        onClose={closeProduct}
        onBuy={startPurchase}
      />

      <PurchaseFlow
        open={showPurchase}
        product={purchaseProduct}
        onClose={closePurchase}
      />
    </DashboardLayout>
  );
};

export default Marketplace;