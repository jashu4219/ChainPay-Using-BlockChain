const AuthButton = ({
  children,
  type = "button",
  loading = false,
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className="w-full rounded-xl bg-cyan-500 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default AuthButton;