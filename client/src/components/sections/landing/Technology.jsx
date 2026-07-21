import {
  User,
  Database,
  Receipt,
  BarChart3,
  ShieldCheck,
  Server,
} from "lucide-react";

import { FaReact } from "react-icons/fa";

import { motion } from "framer-motion";

const steps = [
  {
    title: "User",
    description:
      "Customers interact with ChainPay through a modern web interface.",
    icon: User,
  },
  {
    title: "React Frontend",
    description:
      "A responsive React application provides a seamless user experience.",
    icon: FaReact,
  },
  {
    title: "Express API",
    description:
      "REST APIs securely process authentication, products and payments.",
    icon: Server,
  },
  {
    title: "MySQL Database",
    description:
      "Persistent storage for users, wallets, invoices and transactions.",
    icon: Database,
  },
  {
    title: "Blockchain Verification",
    description:
      "Each purchase receives a secure blockchain verification hash.",
    icon: ShieldCheck,
  },
  {
    title: "Invoices & Analytics",
    description:
      "Generate invoices, receipts and real-time business insights.",
    icon: Receipt,
  },
];

const Technology = () => {
  return (
    <section
      id="technology"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-5xl px-8">

        <div className="mb-20 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Technology
          </p>

          <h2 className="text-5xl font-bold text-white">
            How ChainPay Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Every payment follows a secure pipeline from the user
            interface to blockchain verification and analytics.
          </p>

        </div>

        <div className="relative">

          <div className="absolute left-7 top-0 h-full w-1 bg-slate-800" />

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="relative mb-12 flex gap-8"
              >

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500">

                  <Icon className="h-7 w-7 text-slate-950" />

                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

                  <h3 className="text-2xl font-bold text-white">

                    {step.title}

                  </h3>

                  <p className="mt-3 max-w-2xl leading-8 text-slate-400">

                    {step.description}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
};

export default Technology;