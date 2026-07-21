import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import AdminStatCard from "../../components/admin/AdminStatCard";

import { buildAdminStats } from "../../utils/adminStats";

import {
  fetchAdminDashboard,
} from "../../services/adminService";

const AdminDashboard = () => {
  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard =
    async () => {
      try {
        const response =
          await fetchAdminDashboard();

        setStats(response.stats);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">

          <h1 className="text-4xl font-bold text-white">
            Loading Dashboard...
          </h1>

        </div>
      </DashboardLayout>
    );
  }

  const cards =
    buildAdminStats(stats);

  return (
    <DashboardLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome to ChainPay Admin Center
        </p>

      </div>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (
          <AdminStatCard
            key={card.title}
            {...card}
          />
        ))}

      </div>

    </DashboardLayout>
  );
};

export default AdminDashboard;