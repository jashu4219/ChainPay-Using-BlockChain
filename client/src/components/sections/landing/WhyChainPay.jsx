import {
  XCircle,
  CheckCircle2,
  Wallet,
  FileCheck,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";

const traditional = [
  "Manual invoice approvals",
  "Slow payment processing",
  "Limited transaction visibility",
  "No integrated wallet",
  "Paper-based records",
];

const chainpay = [
  "Automated invoices & receipts",
  "Blockchain verified payments",
  "Real-time transaction tracking",
  "Smart Wallet integration",
  "Analytics Dashboard",
];

const WhyChainPay = () => {
  return (
    <section className="bg-slate-950 py-32">

      <div className="mx-auto max-w-[1400px] px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Why ChainPay
          </p>

          <h2 className="text-5xl font-bold text-white">

            A Better Way To
            <br />
            Manage Business Payments

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">

            Replace outdated payment workflows with
            blockchain verification,
            smart wallets,
            automated invoices,
            and real-time analytics.

          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Traditional */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl border border-red-500/20 bg-slate-900 p-10"
          >

            <h3 className="mb-10 text-3xl font-bold text-white">

              Traditional Payments

            </h3>

            <div className="space-y-6">

              {traditional.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <XCircle className="text-red-400" />

                  <span className="text-lg text-slate-300">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* ChainPay */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl border border-cyan-500/30 bg-slate-900 p-10"
          >

            <h3 className="mb-10 text-3xl font-bold text-cyan-400">

              ChainPay

            </h3>

            <div className="space-y-6">

              {chainpay.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-green-400" />

                  <span className="text-lg text-white">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <FeatureCard
            icon={ShieldCheck}
            title="Blockchain"
          />

          <FeatureCard
            icon={Wallet}
            title="Smart Wallet"
          />

          <FeatureCard
            icon={FileCheck}
            title="Invoices"
          />

          <FeatureCard
            icon={BarChart3}
            title="Analytics"
          />

        </div>

      </div>

    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
}) => (
  <motion.div
    whileHover={{
      y: -8,
    }}
    className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center"
  >

    <Icon className="mx-auto h-10 w-10 text-cyan-400" />

    <h3 className="mt-6 text-xl font-semibold text-white">

      {title}

    </h3>

  </motion.div>
);

export default WhyChainPay;