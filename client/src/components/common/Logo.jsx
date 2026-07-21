import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const Logo = () => {
  const token = localStorage.getItem("token");

  const homeRoute = token
    ? "/buyer/dashboard"
    : "/";

  return (
    <Link
      to={homeRoute}
      className="flex items-center gap-2 transition hover:opacity-90"
    >
      <ShieldCheck className="h-8 w-8 text-cyan-400" />

      <span className="text-2xl font-bold tracking-tight text-white">
        ChainPay
      </span>
    </Link>
  );
};

export default Logo;