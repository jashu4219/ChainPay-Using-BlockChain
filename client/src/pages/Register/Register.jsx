import AuthLayout from "../../components/auth/AuthLayout";
import AuthBanner from "../../components/auth/AuthBanner";
import RegisterForm from "../../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout banner={<AuthBanner />}>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;