import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatCard from "../../components/dashboard/StatCard";
import RevenueChart from "../../components/dashboard/RevenueChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import QuickActions from "../../components/dashboard/QuickActions";
import PendingInvoices from "../../components/dashboard/PendingInvoices";

import { fetchDashboard } from "../../services/dashboardService";

const BuyerDashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const data = await fetchDashboard();

        setDashboard(data);
      } catch (error) {
        console.error(
          "Failed to load dashboard:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h1 className="text-3xl font-bold text-white">
            Loading Dashboard...
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  const stats = [
    {
      title: "Revenue",
      value: `$${dashboard?.stats?.totalRevenue ?? 0}`,
      color: "cyan",
    },
    {
      title: "Transactions",
      value:
        dashboard?.stats?.totalTransactions ?? 0,
      color: "green",
    },
    {
      title: "Products",
      value:
        dashboard?.stats?.totalProducts ?? 0,
      color: "purple",
    },
    {
      title: "Users",
      value:
        dashboard?.stats?.totalUsers ?? 0,
      color: "orange",
    },
  ];

  return (
    <DashboardLayout>
      <WelcomeBanner />

      <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            {...item}
          />
        ))}
      </div>

      <div className="mb-8 grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <QuickActions />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <RecentTransactions
          transactions={
            dashboard?.recentTransactions || []
          }
        />

        <PendingInvoices />
      </div>
    </DashboardLayout>
  );
};

export default BuyerDashboard;