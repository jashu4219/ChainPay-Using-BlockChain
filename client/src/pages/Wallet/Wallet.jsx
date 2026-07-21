import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import BalanceCard from "../../components/wallet/BalanceCard";
import AddFundsModal from "../../components/wallet/AddFundsModal";
import WalletHistory from "../../components/wallet/WalletHistory";

import {
  fetchWallet,
  addFunds,
  fetchWalletHistory,
} from "../../services/walletService";

const WalletPage = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const userId = user?.id;

  const [wallet, setWallet] =
    useState(null);

  const [history, setHistory] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [showModal, setShowModal] =
    useState(false);

  const loadWallet = async () => {
    try {
      const walletData =
        await fetchWallet(userId);

      const historyData =
        await fetchWalletHistory(userId);

      setWallet(walletData);

      setHistory(historyData);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    if (userId) {
      loadWallet();
    }
  }, [userId]);

  const handleAddFunds =
    async (amount) => {
      try {
        await addFunds(
          userId,
          amount
        );

        setShowModal(false);

        loadWallet();

      } catch (error) {

        console.error(error);

      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h1 className="text-3xl font-bold text-white">
            Loading Wallet...
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Wallet
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your wallet balance and transactions.
        </p>
      </div>

      <div className="mb-8">
        <BalanceCard
          balance={wallet?.balance ?? 0}
          onAddFunds={() =>
            setShowModal(true)
          }
        />
      </div>

      <WalletHistory
        history={history}
      />

      <AddFundsModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onSubmit={handleAddFunds}
      />
    </DashboardLayout>
  );
};

export default WalletPage;