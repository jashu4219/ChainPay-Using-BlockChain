import { Link } from "react-router-dom";

import Logo from "../common/Logo";

import { NAV_LINKS } from "../../constants/navigation";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-8">

        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">

          {NAV_LINKS.map((link) => (

            <a
              key={link.label}
              href={link.href}
              className="relative font-medium text-slate-300 transition hover:text-white
                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300
                hover:after:w-full"
            >
              {link.label}
            </a>

          ))}

        </nav>

        <div className="hidden items-center gap-5 lg:flex">

          <Link
            to="/login"
            className="font-medium text-slate-300 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-200 hover:scale-105 hover:bg-cyan-400 active:scale-95"
          >
            Launch App
          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;