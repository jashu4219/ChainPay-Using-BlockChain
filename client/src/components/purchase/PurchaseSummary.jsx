import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const PurchaseSummary = ({
  open,
  transaction,
  loading,
  onClose,
  onConfirm,
}) => {
  if (!open || !transaction) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
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

          <Row
            label="Product"
            value={transaction.product}
          />

          <Row
            label="Seller"
            value={transaction.seller}
          />

          <Row
            label="Subtotal"
            value={`$${transaction.subtotal.toLocaleString()}`}
          />

          <Row
            label="Blockchain Fee"
            value={`$${transaction.blockchainFee}`}
          />

          <Row
            label="Tax"
            value={`$${transaction.tax.toFixed(2)}`}
          />

          <hr className="my-6 border-slate-700" />

          <Row
            label="Total"
            value={`$${transaction.total.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}`}
            big
          />

          <button
            disabled={loading}
            onClick={onConfirm}
            className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : "Confirm Purchase"}
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
  <div className="mb-4 flex justify-between">
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