import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import PurchaseSummary from "./PurchaseSummary";
import ProcessingPayment from "./ProcessingPayment";
import BlockchainVerification from "./BlockchainVerification";

import InvoiceModal from "../payments/InvoiceModal";
import ReceiptModal from "../payments/ReceiptModal";

import { purchaseProduct } from "../../services/purchaseService";

import generateReceiptId from "../../utils/generateReceiptId";
import formatDate from "../../utils/formatDate";

const PurchaseFlow = ({
  open,
  product,
  onClose,
}) => {
  const navigate = useNavigate();

  const [step, setStep] = useState("summary");
  const [loading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    if (!open || !product) return;

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const blockchainFee = 15;
    const tax = product.price * 0.05;

    setTransaction({
      buyerId: user?.id,

      buyer: user?.name,

      seller: product.company,

      productId: product.id,

      product: product.name,

      subtotal: product.price,

      blockchainFee,

      tax,

      total:
        product.price +
        blockchainFee +
        tax,

      receiptId:
        generateReceiptId(),

      invoiceId: "",

      hash: "",

      date: formatDate(),

      status: "Completed",
    });

    setStep("summary");
  }, [open, product]);

  const handlePurchase = async () => {
    try {
      setLoading(true);

      const response =
        await purchaseProduct({
          buyerId:
            transaction.buyerId,

          productId:
            transaction.productId,

          amount:
            transaction.total,
        });

      setTransaction((prev) => ({
        ...prev,

        invoiceId:
          response.invoiceId,

        hash:
          response.transactionHash,
      }));

      toast.success(
        "Purchase completed successfully!"
      );

      setStep("processing");

      setTimeout(() => {
        setStep("blockchain");
      }, 2200);

    } catch (error) {

      const message =
        error.response?.data?.message ||
        "Purchase Failed";

      if (
        message ===
        "Insufficient wallet balance"
      ) {

        toast.error(
          "Insufficient Wallet Balance"
        );

        const goToWallet =
          window.confirm(
            "Your wallet balance is too low.\n\nWould you like to open your Wallet?"
          );

        if (goToWallet) {

          onClose();

          navigate("/wallet");

        }

      } else {

        toast.error(message);

      }

    } finally {

      setLoading(false);

    }
  };

  if (!open || !transaction) {
    return null;
  }

  return (
    <>
      <PurchaseSummary
        open={
          step === "summary"
        }
        transaction={transaction}
        loading={loading}
        onClose={onClose}
        onConfirm={
          handlePurchase
        }
      />

      {step ===
        "processing" && (
        <ProcessingPayment />
      )}

      {step ===
        "blockchain" && (
        <BlockchainVerification
          hash={
            transaction.hash
          }
          onContinue={() =>
            setStep("invoice")
          }
        />
      )}

      <InvoiceModal
        open={
          step === "invoice"
        }
        transaction={transaction}
        onContinue={() =>
          setStep("receipt")
        }
      />

      <ReceiptModal
        open={
          step === "receipt"
        }
        transaction={transaction}
        onFinish={() => {
          setStep("summary");

          setTransaction(null);

          onClose();
        }}
      />
    </>
  );
};

export default PurchaseFlow;