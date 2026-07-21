import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bell,
  ChevronDown,
  LogOut,
  Search,
  Settings,
  User,
  Wallet,
} from "lucide-react";

import toast from "react-hot-toast";

import { logoutUser } from "../../services/authService";

const Topbar = () => {
  const navigate = useNavigate();

  const [open, setOpen] =
    useState(false);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    logoutUser();

    toast.success(
      "Logged out successfully"
    );

    navigate("/login");
  };

  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">

      <div className="relative">

        <Search
          className="absolute left-4 top-3.5 text-slate-500"
          size={18}
        />

        <input
          placeholder="Search..."
          className="w-80 rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-400"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell
          className="cursor-pointer text-slate-400 transition hover:text-cyan-400"
          size={22}
        />

        <div className="relative">

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-800"
          >

            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="h-11 w-11 rounded-full"
            />

            <div className="text-left">

              <h3 className="font-semibold text-white">
                {user?.name ||
                  "User"}
              </h3>

              <p className="text-sm text-slate-400">
                {user?.role ||
                  "Buyer"}
              </p>

            </div>

            <ChevronDown
              className={`transition ${
                open
                  ? "rotate-180"
                  : ""
              }`}
              size={18}
            />

          </button>

          {open && (

            <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

              <button
                className="flex w-full items-center gap-3 px-5 py-4 text-white transition hover:bg-slate-800"
              >
                <User size={18} />
                Profile
              </button>

              <button
                onClick={() =>
                  navigate("/wallet")
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-white transition hover:bg-slate-800"
              >
                <Wallet size={18} />
                Wallet
              </button>

              <button
                className="flex w-full items-center gap-3 px-5 py-4 text-white transition hover:bg-slate-800"
              >
                <Settings
                  size={18}
                />
                Settings
              </button>

              <div className="border-t border-slate-800" />

              <button
                onClick={
                  handleLogout
                }
                className="flex w-full items-center gap-3 px-5 py-4 text-red-400 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
};

export default Topbar;