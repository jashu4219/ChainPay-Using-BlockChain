import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const BlockchainVerification = ({
  hash,
  onContinue,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
        <ShieldCheck className="mx-auto h-24 w-24 text-green-400" />

        <h2 className="mt-6 text-3xl font-bold text-white">
          Transaction Verified
        </h2>

        <p className="mt-4 text-slate-400">
          Your blockchain transaction has been verified successfully.
        </p>

        <div className="mt-8 rounded-xl bg-slate-950 p-5">
          <code className="break-all text-cyan-400">
            {hash}
          </code>
        </div>

        <button
          onClick={onContinue}
          className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Invoice
        </button>
      </div>
    </motion.div>
  );
};

export default BlockchainVerification;