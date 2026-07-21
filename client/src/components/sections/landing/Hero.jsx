import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-20 px-8 py-24 lg:flex-row">

        {/* Left */}
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Blockchain Powered Platform
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            Blockchain
            <br />
            Payments
            <br />
            Made Secure.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Manage invoices, vendors, wallets and blockchain verified
            payments through one modern SaaS platform built for businesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/login"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              Launch App
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div>
              <h3 className="text-3xl font-bold text-white">
                10K+
              </h3>

              <p className="mt-2 text-slate-400">
                Transactions
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                500+
              </h3>

              <p className="mt-2 text-slate-400">
                Businesses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                99.9%
              </h3>

              <p className="mt-2 text-slate-400">
                Security
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="relative flex h-[520px] w-full items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="absolute h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

          {/* Floating Card */}

          <motion.div
            className="absolute right-0 top-8 rounded-2xl border border-slate-700 bg-slate-900/80 px-5 py-3 backdrop-blur-xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          >
            <p className="text-sm text-slate-400">
              Transactions
            </p>

            <h3 className="text-2xl font-bold text-cyan-400">
              10,248
            </h3>

          </motion.div>

          {/* Main Card */}

          <motion.div
            className="relative w-[390px] rounded-3xl border border-slate-700 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-xl font-semibold text-white">
                Blockchain Verified
              </h2>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                ✓ Confirmed
              </span>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl bg-slate-800 p-4">

                <p className="text-sm text-slate-400">
                  Invoice
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  INV-2041
                </h3>

              </div>

              <div className="rounded-2xl bg-slate-800 p-4">

                <p className="text-sm text-slate-400">
                  Amount
                </p>

                <h3 className="mt-1 text-2xl font-bold text-cyan-400">
                  $24,800
                </h3>

              </div>

              <div className="rounded-2xl bg-slate-800 p-4">

                <p className="text-sm text-slate-400">
                  Network
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Ethereum
                </h3>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;