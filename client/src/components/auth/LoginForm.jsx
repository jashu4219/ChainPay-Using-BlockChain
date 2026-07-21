import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

import { loginUser } from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);

      localStorage.setItem("token", response.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      toast.success(response.message);

      navigate("/buyer/dashboard");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="w-full max-w-md">
      <h1 className="mb-2 text-4xl font-bold text-white">
        Welcome Back 👋
      </h1>

      <p className="mb-10 text-slate-400">
        Sign in to continue to ChainPay.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={(name) =>
            register(name, {
              required: "Email is required",
            })
          }
          error={errors.email}
        />

        <div className="relative">
          <AuthInput
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            register={(name) =>
              register(name, {
                required: "Password is required",
              })
            }
            error={errors.password}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-[52px] text-slate-400"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-slate-400">
            <input type="checkbox" />
            Remember me
          </label>

          <Link
            to="/forgot-password"
            className="text-cyan-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <AuthButton
          type="submit"
          loading={loading}
        >
          Sign In
        </AuthButton>

        <button
          type="button"
          className="w-full rounded-xl border border-slate-700 py-4 text-white"
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-cyan-400"
          >
            Create Account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;