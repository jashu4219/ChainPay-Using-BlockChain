import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/auth/ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import BuyerDashboard from "../pages/Buyer/BuyerDashboard";
import Marketplace from "../pages/Marketplace/Marketplace";
import TransactionHistory from "../pages/Transactions/TransactionHistory";
import WalletPage from "../pages/Wallet/Wallet";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/"
          element={<Landing />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot-password"
          element={
            <div className="flex min-h-screen items-center justify-center bg-slate-950 text-4xl font-bold text-white">
              Forgot Password (Coming Soon)
            </div>
          }
        />

        {/* Protected Routes */}

        <Route
          path="/buyer/dashboard"
          element={
            <ProtectedRoute>
              <BuyerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/marketplace"
          element={
            <ProtectedRoute>
              <Marketplace />
            </ProtectedRoute>
          }
        />

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <TransactionHistory />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <WalletPage />
            </ProtectedRoute>
          }
        />
          <Route
          path="/admin/dashboard"
          element={
          <ProtectedRoute>
          <AdminDashboard />
         </ProtectedRoute>
          } 
        />
        {/* 404 */}

        <Route
          path="*"
          element={
            <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
              <h1 className="text-7xl font-bold text-cyan-400">
                404
              </h1>

              <p className="mt-4 text-2xl text-white">
                Page Not Found
              </p>

              <p className="mt-2 text-slate-400">
                The page you are looking for does not exist.
              </p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;