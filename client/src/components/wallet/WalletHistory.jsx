const WalletHistory = ({
  history = [],
}) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Wallet History
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 text-left text-slate-400">
            <th className="pb-4">Type</th>

            <th>Amount</th>

            <th>Description</th>

            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {history.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="py-8 text-center text-slate-400"
              >
                No wallet transactions found.
              </td>
            </tr>
          ) : (
            history.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-800"
              >
                <td className="py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.type === "credit"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="text-white">
                  ${Number(item.amount).toLocaleString()}
                </td>

                <td className="text-white">
                  {item.description}
                </td>

                <td className="text-slate-400">
                  {new Date(
                    item.created_at
                  ).toLocaleString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WalletHistory;