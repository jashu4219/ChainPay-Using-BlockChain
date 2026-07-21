import { motion } from "framer-motion";

const AdminStatCard = ({
  title,
  value,
  icon: Icon,
  color = "text-cyan-400",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-7"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            {value}
          </h2>

        </div>

        <Icon
          size={42}
          className={color}
        />

      </div>
    </motion.div>
  );
};

export default AdminStatCard;