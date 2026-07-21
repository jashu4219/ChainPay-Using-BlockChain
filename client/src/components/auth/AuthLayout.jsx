const AuthLayout = ({ children, banner }) => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-2">

        {/* Left */}
        <div className="flex items-center justify-center p-10">
          {children}
        </div>

        {/* Right */}
        <div className="hidden lg:flex">
          {banner}
        </div>

      </div>
    </div>
  );
};

export default AuthLayout;