import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ProcessingPayment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
        <Loader2 className="mx-auto h-20 w-20 animate-spin text-cyan-400" />

        <h2 className="mt-8 text-3xl font-bold text-white">
          Processing Payment...
        </h2>

        <p className="mt-4 text-slate-400">
          Securely communicating with ChainPay blockchain...
        </p>

        <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="h-full rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessingPayment;