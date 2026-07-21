import { motion } from "framer-motion";

const WelcomeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8"
    >
      <p className="text-cyan-100 text-lg">
        Good Evening 👋
      </p>

      <h1 className="mt-2 text-4xl font-bold text-white">
        Welcome back, Jaswanth
      </h1>

      <p className="mt-3 text-cyan-100">
        You processed <span className="font-bold">$248,520</span> in blockchain payments this month.
      </p>
    </motion.div>
  );
};

export default WelcomeBanner;