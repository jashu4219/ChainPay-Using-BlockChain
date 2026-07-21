import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const TransactionDetailsModal = ({
  open,
  transaction,
  onClose,
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
          className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 p-8"
        >
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">
              Transaction Details
            </h2>

            <button onClick={onClose}>
              <X className="text-white" />
            </button>
          </div>

          <div className="grid gap-5">
            <Row
              label="Invoice"
              value={transaction.invoice_id}
            />

            <Row
              label="Transaction Hash"
              value={transaction.transaction_hash}
            />

            <Row
              label="Buyer"
              value={transaction.buyer}
            />

            <Row
              label="Email"
              value={transaction.email}
            />

            <Row
              label="Product"
              value={transaction.product}
            />

            <Row
              label="Company"
              value={transaction.company}
            />

            <Row
              label="Amount"
              value={`$${Number(transaction.amount).toLocaleString()}`}
            />

            <Row
              label="Status"
              value={transaction.status}
            />

            <Row
              label="Purchased At"
              value={new Date(
                transaction.purchased_at
              ).toLocaleString()}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Row = ({ label, value }) => (
  <div className="flex items-start justify-between border-b border-slate-800 pb-3">
    <span className="font-medium text-slate-400">
      {label}
    </span>

    <span className="max-w-md break-all text-right text-white">
      {value}
    </span>
  </div>
);

export default TransactionDetailsModal;