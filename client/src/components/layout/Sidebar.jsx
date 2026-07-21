import { NavLink } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { sidebarLinks } from "../../utils/sidebarLinks";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">

      <div className="flex items-center gap-3 border-b border-slate-800 p-6">

        <ShieldCheck className="h-9 w-9 text-cyan-400" />

        <div>

          <h1 className="text-2xl font-bold text-white">
            ChainPay
          </h1>

          <p className="text-xs text-slate-400">
            Secure Payments
          </p>

        </div>

      </div>

      <nav className="flex-1 px-4 py-8">

        {sidebarLinks.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-4 rounded-xl px-5 py-4 transition ${
                  isActive
                    ? "bg-cyan-500 text-slate-950"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <Icon size={22} />

              {item.name}

            </NavLink>
          );

        })}

      </nav>

    </aside>
  );
};

export default Sidebar;