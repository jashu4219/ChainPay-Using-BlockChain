import { Wallet } from "lucide-react";

const BalanceCard = ({
  balance,
  onAddFunds,
}) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400">
            Wallet Balance
          </p>

          <h1 className="mt-3 text-5xl font-bold text-cyan-400">
            $
            {Number(balance).toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
              }
            )}
          </h1>
        </div>

        <Wallet
          className="text-cyan-400"
          size={60}
        />
      </div>

      <button
        onClick={onAddFunds}
        className="mt-8 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Add Funds
      </button>
    </div>
  );
};

export default BalanceCard;