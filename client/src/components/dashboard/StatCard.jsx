import { motion } from "framer-motion";

const StatCard = ({
  title,
  value,
  change,
  color,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
    >
      <p className="text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className={`mt-4 font-semibold ${color}`}>
        {change}
      </p>
    </motion.div>
  );
};

export default StatCard;