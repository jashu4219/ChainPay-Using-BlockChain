import { useEffect, useMemo, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import TransactionTable from "../../components/transactions/TransactionTable";
import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionDetailsModal from "../../components/transactions/TransactionDetailsModal";

import {
  fetchTransactions,
  fetchTransaction,
} from "../../services/transactionService";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  const [selectedTransaction, setSelectedTransaction] =
    useState(null);

  const [openModal, setOpenModal] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data =
          await fetchTransactions();

        setTransactions(data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }
    };

    loadTransactions();
  }, []);

  const filteredTransactions =
    useMemo(() => {
      return transactions.filter(
        (transaction) => {

          const matchesSearch =
            transaction.buyer
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            transaction.product
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            transaction.company
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =
            status === "All" ||
            transaction.status ===
              status;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      transactions,
      search,
      status,
    ]);

  const handleView =
    async (id) => {
      try {
        const transaction =
          await fetchTransaction(
            id
          );

        setSelectedTransaction(
          transaction
        );

        setOpenModal(true);

      } catch (error) {

        console.error(error);

      }
    };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">

          <h1 className="text-3xl font-bold text-white">
            Loading Transactions...
          </h1>

        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Transaction History
        </h1>

        <p className="mt-2 text-slate-400">
          View all blockchain
          purchases.
        </p>

      </div>

      <TransactionFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <TransactionTable
        transactions={
          filteredTransactions
        }
        onView={handleView}
      />

      <TransactionDetailsModal
        open={openModal}
        transaction={
          selectedTransaction
        }
        onClose={() => {
          setOpenModal(false);

          setSelectedTransaction(
            null
          );
        }}
      />

    </DashboardLayout>
  );
};

export default TransactionHistory;