import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PurchaseSummary = ({
  open,
  product,
  onClose,
  onConfirm,
}) => {
  if (!open || !product) return null;

  const subtotal = product.price;
  const blockchainFee = 15;
  const tax = subtotal * 0.05;
  const total = subtotal + blockchainFee + tax;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              Purchase Summary
            </h2>

            <button onClick={onClose}>
              <X className="text-white" />
            </button>
          </div>

          <div className="space-y-5">
            <Row
              label="Product"
              value={product.name}
            />

            <Row
              label="Seller"
              value={product.company}
            />

            <Row
              label="Subtotal"
              value={`$${subtotal.toLocaleString()}`}
            />

            <Row
              label="Blockchain Fee"
              value={`$${blockchainFee}`}
            />

            <Row
              label="Tax (5%)"
              value={`$${tax.toFixed(2)}`}
            />

            <hr className="border-slate-700" />

            <Row
              label="Total"
              value={`$${total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}`}
              big
            />
          </div>

          <button
  onClick={() => {
    console.log("BUTTON CLICKED");
    onConfirm();
  }}
            className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Confirm Purchase
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Row = ({
  label,
  value,
  big = false,
}) => (
  <div className="flex justify-between">
    <span
      className={
        big
          ? "text-xl font-bold text-white"
          : "text-slate-400"
      }
    >
      {label}
    </span>

    <span
      className={
        big
          ? "text-xl font-bold text-cyan-400"
          : "text-white"
      }
    >
      {value}
    </span>
  </div>
);

export default PurchaseSummary;