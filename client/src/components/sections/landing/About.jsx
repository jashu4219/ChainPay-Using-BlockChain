import {
  ShieldCheck,
  Wallet,
  BarChart3,
  Globe,
} from "lucide-react";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Transactions Verified",
    icon: ShieldCheck,
  },
  {
    value: "500+",
    label: "Businesses",
    icon: Globe,
  },
  {
    value: "$2M+",
    label: "Payments Processed",
    icon: Wallet,
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
    icon: BarChart3,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 py-32"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              About ChainPay
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">
              Modern Payments
              <br />
              Built For Modern
              <br />
              Businesses.
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">
              ChainPay is a blockchain-powered accounts payable platform
              that simplifies secure payments, invoice management,
              wallet operations and transaction verification through one
              modern web application.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Instead of juggling multiple tools,
              businesses can manage products,
              payments,
              invoices,
              wallets,
              analytics
              and administration from one secure platform.
            </p>

          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="grid gap-6 md:grid-cols-2"
          >

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
                >

                  <Icon className="h-10 w-10 text-cyan-400" />

                  <h3 className="mt-6 text-4xl font-bold text-white">

                    {item.value}

                  </h3>

                  <p className="mt-3 text-slate-400">

                    {item.label}

                  </p>

                </motion.div>

              );

            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;