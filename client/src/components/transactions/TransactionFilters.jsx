const TransactionFilters = ({
  search,
  setSearch,
  status,
  setStatus,
}) => {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Search buyer, product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-cyan-400"
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-white outline-none focus:border-cyan-400"
      >
        <option value="All">
          All Status
        </option>

        <option value="Completed">
          Completed
        </option>

        <option value="Pending">
          Pending
        </option>
      </select>
    </div>
  );
};

export default TransactionFilters;