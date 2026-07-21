import {
  CheckCircle2,
  Home,
  Download,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import formatCurrency from "../../utils/formatCurrency";

const ReceiptModal = ({
  open,
  transaction,
  onFinish,
}) => {
  if (!open || !transaction) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: .9 }}
          animate={{ scale: 1 }}
          exit={{ scale: .9 }}
          className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center"
        >
          <CheckCircle2 className="mx-auto h-24 w-24 text-green-400" />

          <h1 className="mt-8 text-4xl font-bold text-white">
            Payment Successful
          </h1>

          <p className="mt-3 text-slate-400">
            Your blockchain transaction has been completed.
          </p>

          <div className="my-10 space-y-5 rounded-2xl bg-slate-950 p-6 text-left">

            <Row
              label="Receipt ID"
              value={transaction.receiptId}
            />

            <Row
              label="Invoice"
              value={transaction.invoiceId}
            />

            <Row
              label="Product"
              value={transaction.product}
            />

            <Row
              label="Seller"
              value={transaction.seller}
            />

            <Row
              label="Amount"
              value={formatCurrency(transaction.total)}
            />

          </div>

          <div className="flex gap-4">

            <button
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-4 text-white transition hover:border-cyan-400"
            >
              <Download size={20} />

              Download
            </button>

            <button
              onClick={onFinish}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              <Home size={20} />

              Dashboard
            </button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Row = ({
  label,
  value,
}) => (
  <div className="flex justify-between">

    <span className="text-slate-400">
      {label}
    </span>

    <span className="font-medium text-white">
      {value}
    </span>

  </div>
);

export default ReceiptModal;