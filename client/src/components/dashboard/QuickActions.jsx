import {
  PlusCircle,
  Wallet,
  FileText,
  ShieldCheck,
} from "lucide-react";

const actions = [
  {
    title: "Upload Invoice",
    icon: PlusCircle,
  },
  {
    title: "Verify Blockchain",
    icon: ShieldCheck,
  },
  {
    title: "Wallet",
    icon: Wallet,
  },
  {
    title: "Reports",
    icon: FileText,
  },
];

const QuickActions = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="rounded-2xl border border-slate-700 p-5 transition hover:border-cyan-400 hover:bg-slate-800"
            >
              <Icon
                className="mx-auto mb-3 text-cyan-400"
                size={30}
              />

              <p className="text-white">
                {item.title}
              </p>

            </button>
          );

        })}

      </div>

    </div>
  );
};

export default QuickActions;