const TransactionTable = ({
  transactions,
  onView,
}) => {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
      <table className="min-w-full">
        <thead className="bg-slate-950">
          <tr>
            <th className="px-6 py-4 text-left text-slate-400">
              Buyer
            </th>

            <th className="px-6 py-4 text-left text-slate-400">
              Product
            </th>

            <th className="px-6 py-4 text-left text-slate-400">
              Company
            </th>

            <th className="px-6 py-4 text-left text-slate-400">
              Amount
            </th>

            <th className="px-6 py-4 text-left text-slate-400">
              Status
            </th>

            <th className="px-6 py-4 text-center text-slate-400">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="py-10 text-center text-slate-500"
              >
                No Transactions Found
              </td>
            </tr>
          ) : (
            transactions.map((item) => (
              <tr
                key={item.id}
                className="border-t border-slate-800"
              >
                <td className="px-6 py-5 text-white">
                  {item.buyer}
                </td>

                <td className="px-6 py-5 text-white">
                  {item.product}
                </td>

                <td className="px-6 py-5 text-white">
                  {item.company}
                </td>

                <td className="px-6 py-5 text-cyan-400">
                  $
                  {Number(
                    item.amount
                  ).toLocaleString()}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-center">
                  <button
                    onClick={() =>
                      onView(item.id)
                    }
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;