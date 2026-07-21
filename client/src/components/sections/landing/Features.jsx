import {
  ShieldCheck,
  Wallet,
  BarChart3,
  Receipt,
  Store,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT authentication with encrypted passwords and role-based access control keeps every account protected.",
  },
  {
    icon: Wallet,
    title: "Smart Wallet",
    description:
      "Manage wallet balance, add funds, monitor payment history and make seamless blockchain-powered purchases.",
  },
  {
    icon: Store,
    title: "Marketplace",
    description:
      "Browse products, purchase securely, and verify every payment with blockchain-backed transaction hashes.",
  },
  {
    icon: Receipt,
    title: "Invoices & Receipts",
    description:
      "Automatically generate professional invoices and digital receipts for every completed transaction.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize revenue, payments, invoices and transaction activity through an interactive dashboard.",
  },
  {
    icon: Users,
    title: "Admin Control Center",
    description:
      "Manage users, products, transactions and platform activity through a secure administrative dashboard.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Powerful Features
          </p>

          <h2 className="text-5xl font-bold text-white">
            Everything You Need
            <br />
            For Modern Business Payments
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            ChainPay combines secure authentication,
            blockchain verification,
            wallet management,
            invoice generation,
            analytics,
            and administration into one intelligent payment platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-500"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 transition group-hover:bg-cyan-500/20">

                  <Icon className="h-8 w-8 text-cyan-400 transition group-hover:scale-110" />

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">

                  {feature.title}

                </h3>

                <p className="leading-8 text-slate-400">

                  {feature.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Features;