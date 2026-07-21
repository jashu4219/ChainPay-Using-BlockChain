import { getDashboardStats } from "../services/dashboardService.js";

export const getDashboard = async (req, res) => {
  try {
    const dashboard = await getDashboardStats();

    res.status(200).json({
      success: true,
      ...dashboard,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
    });
  }
};