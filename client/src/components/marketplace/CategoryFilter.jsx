const categories = [
  "All",
  "Software",
  "Cloud",
  "Security",
  "Blockchain",
];

const CategoryFilter = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setSelected(category)}
          className={`rounded-full px-5 py-2 transition ${
            selected === category
              ? "bg-cyan-500 text-slate-950"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {category}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;