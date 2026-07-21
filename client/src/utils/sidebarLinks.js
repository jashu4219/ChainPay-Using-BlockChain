import {
  LayoutDashboard,
  Store,
  Wallet,
  Receipt,
  BarChart3,
  Settings,
  ArrowLeftRight,
} from "lucide-react";

export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/buyer/dashboard",
  },
  {
    name: "Marketplace",
    icon: Store,
    path: "/marketplace",
  },
  {
    name: "Transactions",
    icon: ArrowLeftRight,
    path: "/transactions",
  },
  {
    name: "Wallet",
    icon: Wallet,
    path: "/wallet",
  },
  {
    name: "Invoices",
    icon: Receipt,
    path: "/invoices",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];