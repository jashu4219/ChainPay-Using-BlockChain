const AuthInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full rounded-xl border bg-slate-900 px-5 py-4 text-white outline-none transition-all duration-300
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-slate-700 focus:border-cyan-400"
        }`}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default AuthInput;