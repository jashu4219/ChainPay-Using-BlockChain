import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiJsonwebtokens,
  SiTailwindcss,
  SiAxios,
  SiEthereum,
} from "react-icons/si";

import { motion } from "framer-motion";

const technologies = [
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "JWT",
    icon: SiJsonwebtokens,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Axios",
    icon: SiAxios,
  },
  {
    name: "Blockchain",
    icon: SiEthereum,
  },
];

const TrustedTech = () => {
  return (
    <section className="border-y border-slate-800 bg-slate-950 py-24">

      <div className="mx-auto max-w-[1400px] px-8">

        <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">

          Built With Modern Technologies

        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-center text-4xl font-bold text-white">

          Crafted Using An Industry Standard Tech Stack

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-400">

          ChainPay combines a modern frontend, secure backend,
          relational database, blockchain verification,
          and responsive UI technologies into one scalable platform.

        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-8">

          {technologies.map((tech, index) => {

            const Icon = tech.icon;

            return (

              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition"
              >

                <Icon className="mx-auto text-5xl text-cyan-400" />

                <p className="mt-4 text-sm font-semibold text-white">

                  {tech.name}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default TrustedTech;