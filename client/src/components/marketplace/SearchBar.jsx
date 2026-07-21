import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">

      <Search
        className="absolute left-4 top-3.5 text-slate-500"
        size={18}
      />

      <input
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-400"
      />

    </div>
  );
};

export default SearchBar;