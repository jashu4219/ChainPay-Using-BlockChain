import { useState } from "react";
import { X } from "lucide-react";

const AddFundsModal = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [amount, setAmount] =
    useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">
            Add Funds
          </h2>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <input
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
          placeholder="Enter amount"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
        />

        <button
          onClick={() => {
            onSubmit(Number(amount));
            setAmount("");
          }}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950"
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default AddFundsModal;