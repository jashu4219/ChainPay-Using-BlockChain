import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

import { registerUser } from "../../services/authService";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response =
        await registerUser({
          name: data.name,
          email: data.email,
          password: data.password,
        });

      toast.success(response.message);

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="w-full max-w-md">

      <h1 className="mb-2 text-4xl font-bold text-white">
        Create Account 🚀
      </h1>

      <p className="mb-10 text-slate-400">
        Join ChainPay and manage blockchain payments securely.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        <AuthInput
          label="Full Name"
          name="name"
          placeholder="John Doe"
          register={(name) =>
            register(name, {
              required:
                "Full name is required",
            })
          }
          error={errors.name}
        />

        <AuthInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email"
          register={(name) =>
            register(name, {
              required:
                "Email is required",
              pattern: {
                value:
                  /^\S+@\S+\.\S+$/,
                message:
                  "Enter a valid email",
              },
            })
          }
          error={errors.email}
        />

        <div className="relative">

          <AuthInput
            label="Password"
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Create a password"
            register={(name) =>
              register(name, {
                required:
                  "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Minimum 6 characters",
                },
              })
            }
            error={errors.password}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
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

        <AuthInput
          label="Confirm Password"
          name="confirmPassword"
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Confirm your password"
          register={(name) =>
            register(name, {
              required:
                "Confirm your password",
              validate: (value) =>
                value ===
                  password ||
                "Passwords do not match",
            })
          }
          error={errors.confirmPassword}
        />

        <label className="flex items-center gap-2 text-sm text-slate-400">

          <input
            type="checkbox"
            required
          />

          I agree to the Terms &
          Conditions

        </label>

        <AuthButton
          type="submit"
          loading={loading}
        >
          Create Account
        </AuthButton>

        <button
          type="button"
          className="w-full rounded-xl border border-slate-700 py-4 text-white transition hover:border-cyan-400"
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-400">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-semibold text-cyan-400"
          >
            Sign In
          </Link>

        </p>

      </form>

    </div>
  );
};

export default RegisterForm;