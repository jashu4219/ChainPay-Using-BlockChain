import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import { revenueData } from "../../utils/dashboardData";

const RevenueChart = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={revenueData}>
          <XAxis dataKey="month" stroke="#94A3B8" />

          <Tooltip />

          <Area
            dataKey="revenue"
            stroke="#06B6D4"
            fill="#0891B2"
          />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;