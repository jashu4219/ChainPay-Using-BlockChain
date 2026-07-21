import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
          {product.category}
        </span>

        <h2 className="mt-4 text-2xl font-bold text-white">
          {product.name}
        </h2>

        <p className="mt-2 text-slate-400">
          Sold by {product.company}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-3xl font-bold text-cyan-400">
            ${product.price.toLocaleString()}
          </h3>

          <button
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <ShoppingCart size={18} />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;