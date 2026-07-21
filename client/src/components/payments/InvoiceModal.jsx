import { FileText, Download, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

const InvoiceModal = ({
  open,
  transaction,
  onContinue,
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
          initial={{ scale: .9 }}
          animate={{ scale: 1 }}
          exit={{ scale: .9 }}
          className="w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-10"
        >
          <div className="mb-10 flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-bold text-white">
                ChainPay Invoice
              </h1>

              <p className="mt-2 text-slate-400">
                Invoice #{transaction.invoiceId}
              </p>

            </div>

            <FileText
              className="h-14 w-14 text-cyan-400"
            />

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <Info
              title="Buyer"
              value={transaction.buyer}
            />

            <Info
              title="Seller"
              value={transaction.seller}
            />

            <Info
              title="Product"
              value={transaction.product}
            />

            <Info
              title="Date"
              value={transaction.date}
            />

          </div>

          <div className="my-10 border-t border-slate-700" />

          <Price
            label="Subtotal"
            value={transaction.subtotal}
          />

          <Price
            label="Blockchain Fee"
            value={transaction.blockchainFee}
          />

          <Price
            label="Tax"
            value={transaction.tax}
          />

          <Price
            big
            label="Total"
            value={transaction.total}
          />

          <div className="my-10 rounded-xl bg-slate-950 p-5">

            <p className="mb-2 text-sm text-slate-400">
              Blockchain Hash
            </p>

            <code className="break-all text-cyan-400">
              {transaction.hash}
            </code>

          </div>

          <div className="flex gap-4">

            <button
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-4 text-white transition hover:border-cyan-400"
            >
              <Download size={20} />
              Download
            </button>

            <button
              onClick={onContinue}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Continue

              <ArrowRight size={20} />

            </button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Info = ({ title, value }) => (
  <div>

    <p className="text-slate-400">
      {title}
    </p>

    <h3 className="mt-2 text-xl font-semibold text-white">
      {value}
    </h3>

  </div>
);

const Price = ({
  label,
  value,
  big = false,
}) => (
  <div className="mb-4 flex justify-between">

    <span
      className={
        big
          ? "text-2xl font-bold text-white"
          : "text-slate-400"
      }
    >
      {label}
    </span>

    <span
      className={
        big
          ? "text-2xl font-bold text-cyan-400"
          : "text-white"
      }
    >
      {formatCurrency(value)}
    </span>

  </div>
);

export default InvoiceModal;