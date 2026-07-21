import { X, ShieldCheck, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ProductModal = ({
  open,
  product,
  onClose,
  onBuy,
}) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .9, opacity: 0 }}
            transition={{ duration: .25 }}
            className="w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
          >
            <div className="grid lg:grid-cols-2">

              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />

              <div className="p-8">

                <div className="mb-6 flex items-center justify-between">

                  <h2 className="text-3xl font-bold text-white">
                    {product.name}
                  </h2>

                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-slate-800"
                  >
                    <X className="text-white" />
                  </button>

                </div>

                <p className="text-slate-400">
                  Sold by
                </p>

                <h3 className="mb-6 text-xl font-semibold text-white">
                  {product.company}
                </h3>

                <div className="mb-6 flex gap-4">

                  <div className="flex items-center gap-2 rounded-full bg-yellow-500/20 px-4 py-2">

                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-yellow-300">
                      {product.rating}
                    </span>

                  </div>

                  {product.verified && (
                    <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">

                      <ShieldCheck
                        size={18}
                        className="text-green-400"
                      />

                      <span className="text-green-400">
                        Verified
                      </span>

                    </div>
                  )}

                </div>

                <p className="leading-8 text-slate-300">
                  {product.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <h2 className="text-4xl font-bold text-cyan-400">
                    ${product.price.toLocaleString()}
                  </h2>

                  <button
                    onClick={onBuy}
                    className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Buy Now
                  </button>

                </div>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;