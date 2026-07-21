import { Link } from "react-router-dom";
import {
  Laptop,
  Smartphone,
  Cpu,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const products = [
  {
    title: "MacBook Pro M4",
    company: "Apple",
    price: "$2,199",
    icon: Laptop,
  },
  {
    title: "iPhone 17 Pro",
    company: "Apple",
    price: "$1,299",
    icon: Smartphone,
  },
  {
    title: "RTX 5090",
    company: "NVIDIA",
    price: "$2,499",
    icon: Cpu,
  },
];

const MarketplacePreview = () => {
  return (
    <section
      id="marketplace"
      className="bg-slate-950 py-28"
    >
      <div className="mx-auto max-w-[1400px] px-8">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Marketplace
          </p>

          <h2 className="text-5xl font-bold text-white">
            Blockchain Verified Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Browse premium products secured through blockchain
            verification with automated invoices,
            smart wallet payments and instant receipts.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (

              <motion.div
                key={product.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500"
              >

                <div className="flex items-center justify-between">

                  <div className="rounded-2xl bg-cyan-500/10 p-5">

                    <Icon className="h-10 w-10 text-cyan-400" />

                  </div>

                  <ShieldCheck className="text-green-400" />

                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">

                  {product.title}

                </h3>

                <p className="mt-2 text-slate-400">

                  {product.company}

                </p>

                <div className="mt-10 flex items-center justify-between">

                  <span className="text-3xl font-bold text-cyan-400">

                    {product.price}

                  </span>

                  <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-semibold text-green-400">

                    Blockchain Verified

                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

        <div className="mt-16 text-center">

          <Link
            to="/marketplace"
            className="inline-flex rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Browse Marketplace →
          </Link>

        </div>

      </div>
    </section>
  );
};

export default MarketplacePreview;