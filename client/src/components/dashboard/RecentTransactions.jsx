const RecentTransactions = ({
  transactions = [],
}) => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold text-white">
        Recent Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 text-left text-slate-400">
            <th className="pb-4">Buyer</th>

            <th>Product</th>

            <th>Amount</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="py-8 text-center text-slate-400"
              >
                No transactions found.
              </td>
            </tr>
          ) : (
            transactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-800"
              >
                <td className="py-5 text-white">
                  {item.buyer}
                </td>

                <td className="text-white">
                  {item.product}
                </td>

                <td className="text-white">
                  ${Number(item.amount).toLocaleString()}
                </td>

                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      item.status === "Completed" ||
                      item.status === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;