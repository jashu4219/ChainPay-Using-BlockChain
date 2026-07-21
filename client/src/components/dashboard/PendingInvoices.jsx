const invoices = [
  {
    id: "#INV-201",
    supplier: "Tesla",
    amount: "$8,200",
    due: "Today",
  },
  {
    id: "#INV-202",
    supplier: "Apple",
    amount: "$12,000",
    due: "Tomorrow",
  },
  {
    id: "#INV-203",
    supplier: "Amazon",
    amount: "$4,800",
    due: "3 Days",
  },
];

const PendingInvoices = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Pending Invoices
      </h2>

      <div className="space-y-4">

        {invoices.map((invoice) => (

          <div
            key={invoice.id}
            className="flex items-center justify-between rounded-xl border border-slate-800 p-4"
          >

            <div>

              <h3 className="font-semibold text-white">
                {invoice.id}
              </h3>

              <p className="text-sm text-slate-400">
                {invoice.supplier}
              </p>

            </div>

            <div className="text-right">

              <p className="font-semibold text-white">
                {invoice.amount}
              </p>

              <p className="text-sm text-yellow-400">
                {invoice.due}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PendingInvoices;