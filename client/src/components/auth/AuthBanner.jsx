import { ShieldCheck, Wallet, BarChart3 } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    title: "Blockchain Verified",
    value: "98%",
  },
  {
    icon: Wallet,
    title: "Transactions",
    value: "2,845",
  },
  {
    icon: BarChart3,
    title: "Revenue",
    value: "$248K",
  },
];

const AuthBanner = ({
  title = "Secure Access",
  subtitle = "Access your blockchain-powered accounts payable dashboard securely.",
}) => {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 p-12">

      <div className="w-full max-w-lg">

        <h2 className="mb-4 text-5xl font-bold text-white">
          {title}
        </h2>

        <p className="mb-12 text-slate-400">
          {subtitle}
        </p>

        <div className="space-y-6">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-8 w-8 text-cyan-400" />

                  <div>
                    <p className="text-slate-400">{item.title}</p>
                    <h3 className="text-2xl font-bold text-white">
                      {item.value}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default AuthBanner;