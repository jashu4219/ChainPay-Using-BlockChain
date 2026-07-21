import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
} from "lucide-react";

export const buildAdminStats = (
  stats
) => [
  {
    title: "Users",
    value: stats.users,
    icon: Users,
    color: "text-cyan-400",
  },
  {
    title: "Products",
    value: stats.products,
    icon: Package,
    color: "text-orange-400",
  },
  {
    title: "Transactions",
    value: stats.transactions,
    icon: ShoppingCart,
    color: "text-purple-400",
  },
  {
    title: "Revenue",
    value: `$${Number(
      stats.revenue
    ).toLocaleString()}`,
    icon: DollarSign,
    color: "text-green-400",
  },
];