import Logo from "../../common/Logo";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-8 py-12 md:flex-row">

        <div>

          <Logo />

          <p className="mt-4 max-w-md text-slate-400">
            Secure blockchain-powered accounts payable platform built
            with modern web technologies.
          </p>

        </div>

        <div className="text-center md:text-right">

          <p className="text-slate-400">
            © 2026 ChainPay
          </p>

          <p className="mt-2 text-slate-500">
            Designed & Developed by Jaswanth Reddy
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;